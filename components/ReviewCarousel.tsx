"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  CSSProperties,
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { FRIZENDO_REVIEWS, getAverageRating, type Review } from "@/components/reviews";

export type ReviewCarouselProps = {
  reviews?: readonly Review[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  autoPlayInterval?: number;
  sectionId?: string;
  className?: string;
};

type TrackStyle = CSSProperties & {
  "--rc-index": number;
};

const STAR_INDEXES = [0, 1, 2, 3, 4] as const;
const SWIPE_THRESHOLD = 48;

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function getSlidesPerView(): number {
  if (typeof window === "undefined") {
    return 1;
  }

  if (window.matchMedia("(min-width: 992px)").matches) {
    return 3;
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    return 2;
  }

  return 1;
}

function useSlidesPerView(): number {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => setSlidesPerView(getSlidesPerView());

    update();

    const mediumQuery = window.matchMedia("(min-width: 768px)");
    const largeQuery = window.matchMedia("(min-width: 992px)");

    mediumQuery.addEventListener("change", update);
    largeQuery.addEventListener("change", update);

    return () => {
      mediumQuery.removeEventListener("change", update);
      largeQuery.removeEventListener("change", update);
    };
  }, []);

  return slidesPerView;
}

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      height="16"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d="M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.42 6.2 20.47l1.11-6.46-4.7-4.58 6.49-.95L12 2.6z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={filled ? 0 : 1.6}
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <>
      {STAR_INDEXES.map((star) => (
        <StarIcon filled={star < Math.round(rating)} key={star} />
      ))}
    </>
  );
}

function QuoteIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="34" viewBox="0 0 24 24" width="34">
      <path d="M9.35 6.2c-3.02 1.3-5.1 3.86-5.1 7.35 0 2.6 1.62 4.25 3.86 4.25 2.08 0 3.67-1.53 3.67-3.56 0-1.96-1.42-3.4-3.32-3.4-.32 0-.74.05-1.03.13.42-1.38 1.75-2.82 3.22-3.5L9.35 6.2zm8.66 0c-3.02 1.3-5.1 3.86-5.1 7.35 0 2.6 1.62 4.25 3.86 4.25 2.08 0 3.67-1.53 3.67-3.56 0-1.96-1.42-3.4-3.32-3.4-.32 0-.74.05-1.03.13.42-1.38 1.75-2.82 3.22-3.5L18.01 6.2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 24 24" width="14">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <rect height="12" rx="1.5" width="4" x="6" y="6" />
      <rect height="12" rx="1.5" width="4" x="14" y="6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="M8 5.6c0-.8.86-1.3 1.55-.9l9.1 5.4c.68.4.68 1.4 0 1.8l-9.1 5.4c-.69.4-1.55-.1-1.55-.9V5.6z" />
    </svg>
  );
}

export default function ReviewCarousel({
  reviews = FRIZENDO_REVIEWS,
  title = "Our Happy Customers",
  subtitle = "Real feedback from clients across Pakistan, the UK, Hungary, the USA, Australia, and beyond.",
  eyebrow = "Client Reviews",
  autoPlayInterval = 5500,
  sectionId = "reviews",
  className,
}: ReviewCarouselProps) {
  const generatedId = useId();
  const headingId = `${generatedId}-heading`;
  const statusId = `${generatedId}-status`;

  const total = reviews.length;
  const slidesPerView = useSlidesPerView();
  const prefersReducedMotion = usePrefersReducedMotion();

  const maxIndex = Math.max(0, total - slidesPerView);
  const pages = maxIndex + 1;
  const canNavigate = maxIndex > 0;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const pointerStartX = useRef<number | null>(null);
  const activeIndex = Math.min(index, maxIndex);

  const averageRating = useMemo(() => getAverageRating(reviews), [reviews]);

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentHidden(document.hidden);

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const autoPlayEnabled =
    canNavigate &&
    !isPaused &&
    !isHovered &&
    !isFocusWithin &&
    !isDocumentHidden &&
    !prefersReducedMotion;

  useEffect(() => {
    if (!autoPlayEnabled) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => {
        const clamped = Math.min(current, maxIndex);
        return clamped >= maxIndex ? 0 : clamped + 1;
      });
    }, Math.max(2000, autoPlayInterval));

    return () => window.clearInterval(timer);
  }, [autoPlayEnabled, autoPlayInterval, maxIndex]);

  const announce = useCallback(
    (start: number) => {
      const end = Math.min(start + slidesPerView, total);
      setStatusMessage(`Showing reviews ${start + 1} to ${end} of ${total}.`);
    },
    [slidesPerView, total],
  );

  const goTo = useCallback(
    (target: number) => {
      if (total === 0) {
        return;
      }

      let next = target;

      if (next < 0) {
        next = maxIndex;
      } else if (next > maxIndex) {
        next = 0;
      }

      setIndex(next);
      announce(next);
    },
    [announce, maxIndex, total],
  );

  const handlePrevious = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const handleNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        handlePrevious();
        break;
      case "ArrowRight":
        event.preventDefault();
        handleNext();
        break;
      case "Home":
        event.preventDefault();
        goTo(0);
        break;
      case "End":
        event.preventDefault();
        goTo(maxIndex);
        break;
      default:
        break;
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const startX = pointerStartX.current;
    pointerStartX.current = null;

    if (startX === null) {
      return;
    }

    const delta = event.clientX - startX;

    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      return;
    }

    if (delta < 0) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
  };

  const handleBlurCapture = (event: ReactFocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;

    if (!event.currentTarget.contains(nextTarget)) {
      setIsFocusWithin(false);
    }
  };

  if (total === 0) {
    return null;
  }

  const trackStyle: TrackStyle = { "--rc-index": activeIndex };

  return (
    <section
      aria-labelledby={headingId}
      className={className ? `rc-section ${className}` : "rc-section"}
      id={sectionId}
    >
      <div className="container">
        <header className="rc-head">
          <div className="rc-head-copy">
            <p className="section-kicker">{eyebrow}</p>
            <h2 className="rc-title" id={headingId}>
              {title}
            </h2>
            <p className="rc-subtitle">{subtitle}</p>
          </div>

          <div
            aria-label={`Rated ${averageRating.toFixed(1)} out of 5 from ${total} verified reviews`}
            className="rc-summary"
            role="group"
          >
            <span className="rc-summary-score">{averageRating.toFixed(1)}</span>
            <span>
              <span aria-hidden="true" className="rc-rating">
                <Stars rating={averageRating} />
              </span>
              <span className="rc-summary-caption">
                <strong>{total}</strong> verified reviews
              </span>
            </span>
          </div>
        </header>

        <div
          aria-label="Client testimonials"
          aria-roledescription="carousel"
          className="rc-carousel"
          onBlurCapture={handleBlurCapture}
          onFocusCapture={() => setIsFocusWithin(true)}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerCancel={handlePointerCancel}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          role="region"
          tabIndex={0}
        >
          <div className="rc-viewport">
            <div className="rc-track" style={trackStyle}>
              {reviews.map((review, reviewIndex) => {
                const isVisible =
                  reviewIndex >= activeIndex &&
                  reviewIndex < activeIndex + slidesPerView;

                const meta = [review.context, review.platform, review.location]
                  .filter(Boolean)
                  .join(" · ");

                return (
                  <div
                    aria-hidden={!isVisible}
                    aria-label={`${reviewIndex + 1} of ${total}`}
                    aria-roledescription="slide"
                    className="rc-slide"
                    key={review.id}
                    role="group"
                  >
                    <figure className="rc-card">
                      <div className="rc-card-top">
                        <span className="rc-quote-mark">
                          <QuoteIcon />
                        </span>
                        <span
                          aria-label={`Rated ${review.rating} out of 5`}
                          className="rc-rating"
                          role="img"
                        >
                          <Stars rating={review.rating} />
                        </span>
                      </div>

                      <blockquote className="rc-quote">
                        <p>{review.quote}</p>
                      </blockquote>

                      <figcaption className="rc-author">
                        <span aria-hidden="true" className="rc-avatar">
                          {getInitials(review.author)}
                        </span>
                        <span className="rc-author-copy">
                          <span className="rc-author-name">{review.author}</span>
                          <span className="rc-author-meta">{meta}</span>
                        </span>
                        {review.verified ? (
                          <span className="rc-verified" title="Verified review">
                            <CheckIcon />
                            <span className="rc-sr-only">Verified review</span>
                          </span>
                        ) : null}
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>

          {canNavigate ? (
            <div className="rc-footer">
              <div aria-label="Review pages" className="rc-dots" role="group">
                {Array.from({ length: pages }, (_, page) => {
                  const firstReview = page + 1;
                  const lastReview = Math.min(page + slidesPerView, total);
                  const label =
                    lastReview > firstReview
                      ? `Show reviews ${firstReview} to ${lastReview}`
                      : `Show review ${firstReview}`;

                  return (
                    <button
                      aria-current={page === activeIndex ? "true" : undefined}
                      aria-label={label}
                      className="rc-dot"
                      key={page}
                      onClick={() => goTo(page)}
                      type="button"
                    >
                      <span aria-hidden="true" className="rc-dot-visual" />
                    </button>
                  );
                })}
              </div>

              <div className="rc-controls">
                <button
                  aria-label="Show previous reviews"
                  className="rc-control"
                  onClick={handlePrevious}
                  type="button"
                >
                  <ChevronIcon direction="left" />
                </button>

                {!prefersReducedMotion ? (
                  <button
                    aria-label={
                      isPaused
                        ? "Resume automatic review rotation"
                        : "Pause automatic review rotation"
                    }
                    className="rc-control"
                    onClick={() => setIsPaused((paused) => !paused)}
                    type="button"
                  >
                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                  </button>
                ) : null}

                <button
                  aria-label="Show next reviews"
                  className="rc-control"
                  onClick={handleNext}
                  type="button"
                >
                  <ChevronIcon direction="right" />
                </button>
              </div>
            </div>
          ) : null}

          <p aria-live="polite" className="rc-sr-only" id={statusId}>
            {statusMessage}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCRIPTS = [
  "https://code.jquery.com/jquery-3.4.1.min.js",
  "/lib/wow/wow.min.js",
  "/lib/easing/easing.min.js",
  "/lib/waypoints/waypoints.min.js",
  "/lib/owlcarousel/owl.carousel.min.js",
  "/lib/lightbox/js/lightbox.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
];

const OWL_SETTINGS = {
  autoplay: true,
  smartSpeed: 1000,
  margin: 25,
  loop: true,
  center: true,
  dots: false,
  nav: true,
  navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
  responsive: {
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  },
};

let libsPromise: Promise<void> | null = null;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load script: " + src));
    document.head.appendChild(s);
  });
}

function ensureLibs(): Promise<void> {
  if (!libsPromise) {
    libsPromise = SCRIPTS.reduce(
      (p, src) => p.then(() => loadScript(src)),
      Promise.resolve(),
    );
  }
  return libsPromise;
}

function startHero() {
  const el = document.getElementById("header-carousel");
  if (el && bootstrap?.Carousel) {
    const carousel = bootstrap.Carousel.getOrCreateInstance(el, {
      interval: 3000,
      ride: "carousel",
      pause: false,
      wrap: true,
      touch: true,
    });
    carousel.cycle();
  }
}

function runPageInit() {
  try {
    if (WOW) {
      new WOW().init();
    }
    if (jQuery?.fn?.owlCarousel) {
      const nodes = jQuery(".project-carousel, .testimonial-carousel");
      if (nodes.length > 0) {
        nodes.owlCarousel("destroy");
        nodes.owlCarousel(OWL_SETTINGS);
      }
    }
    startHero();
  } catch (err) {
    console.error("SiteInit page init failed", err);
  }
}

function installDocListeners() {
  if (!jQuery) return;
  const $ = jQuery;

  const $win = $(window);
  const onScroll = function (this: void) {
    const top = $win.scrollTop();
    if (top > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
      $(".back-to-top").fadeOut("slow");
    }
  };
  $win.on("scroll.siteinit", onScroll);

  $(document).on("click.siteinit", ".back-to-top", function (this: void) {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  let videoSrc: string | undefined;
  $(document).on("click.siteinit", ".btn-play", function (this: HTMLElement) {
    videoSrc = $(this).data("src");
  });
  $("#videoModal").on("shown.bs.modal.siteinit", function (this: void) {
    if (typeof videoSrc === "string") {
      $("#video").attr("src", videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    }
  });
  $("#videoModal").on("hide.bs.modal.siteinit", function (this: void) {
    if (typeof videoSrc === "string") {
      $("#video").attr("src", videoSrc);
    }
  });

  $(document).on("click.siteinit", ".navbar-nav a", function (this: void) {
    const c = document.getElementById("navbarCollapse");
    if (c && c.classList.contains("show") && bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(c).hide();
    }
  });
}

export default function SiteInit() {
  const pathname = usePathname();
  const installed = useRef(false);

  useEffect(() => {
    let alive = true;
    ensureLibs()
      .then(() => {
        if (!alive) return;
        if (!installed.current) {
          installed.current = true;
          installDocListeners();
        }
        runPageInit();
      })
      .catch((err) => console.error("SiteInit failed to load libs", err));
    return () => {
      alive = false;
    };
  }, [pathname]);

  return null;
}
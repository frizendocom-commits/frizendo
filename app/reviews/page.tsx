import type { Metadata } from "next";
import type { Viewport } from "next";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Client Reviews & Testimonials | Frizendo",
  description: "What clients say about working with Frizendo on SEO, paid ads, social media and branding projects.",
  alternates: { canonical: "https://frizendo.com/reviews" },
  openGraph: {"url":"https://frizendo.com/reviews","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <ReviewCarousel />
      <section className="footer-cta">
        <div className="footer-cta-content">
          <div>
            <span className="cta-label">LET'S WORK TOGETHER</span>
            <h2>Ready to grow your brand?</h2>
            <p>
              Let's build a digital strategy that turns your ideas
              into measurable results.
            </p>
          </div>
          <a href="/contact" className="cta-button">
            Let's Talk
            <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

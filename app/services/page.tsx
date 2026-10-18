import type { Metadata } from "next";
import type { Viewport } from "next";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Digital Marketing Services | SEO, Google Ads, Meta Ads & Social Media | Frizendo",
  description: "Frizendo services: SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management, branding and web solutions for growing brands.",
  alternates: { canonical: "https://frizendo.com/services" },
  openGraph: {"url":"https://frizendo.com/services","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <ServicesSection actionHref="/contact" actionLabel="Talk to Frizendo" />
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
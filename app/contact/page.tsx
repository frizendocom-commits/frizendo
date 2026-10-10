import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Contact Frizendo | Digital Marketing Agency in Gilgit, Pakistan",
  description: "Get in touch with Frizendo to discuss SEO, Google Ads, Meta Ads, social media, branding and web projects.",
  alternates: { canonical: "https://frizendo.com/contact.html" },
  openGraph: {"url":"https://frizendo.com/contact.html","images":["https://frizendo.com/assets/frizendo-logo.png"]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5" id="contact">
  <div className="container text-center">
    <h2 className="display-5 fw-bold">
      Ready to grow your brand?
    </h2>
    <p className="lead mb-4">
      Tell Frizendo what you are building, and we can discuss the right digital marketing strategy for your goals.
    </p>
    <a className="btn btn-primary rounded-pill py-3 px-5 me-2" href="mailto:frizendo.com@gmail.com">
      Email Frizendo
    </a>
    <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="https://wa.me/923498901846" rel="noopener" target="_blank">
      WhatsApp
    </a>
  </div>
</section>
    </>
  );
}
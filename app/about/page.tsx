import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "About Frizendo | Digital Marketing Agency in Gilgit, Pakistan",
  description: "Learn about Frizendo, the digital marketing agency in Gilgit, Pakistan helping local and international brands grow through SEO, paid ads, social media and branding.",
  alternates: { canonical: "https://frizendo.com/about.html" },
  openGraph: {"url":"https://frizendo.com/about.html","images":["https://frizendo.com/assets/frizendo-logo.png"]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5" id="about">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <img alt="Frizendo digital marketing agency team" className="img-fluid rounded" src="/img/clients-img/Frizendo%20about.png" />
        </div>
        <div className="col-lg-6">
          <p className="section-kicker">
            About Frizendo
          </p>
          <h2 className="display-6 mb-4">
            Digital marketing designed for practical, measurable growth.
          </h2>
          <p className="mb-4">
            Frizendo is a digital marketing agency based in Gilgit, Pakistan, helping businesses, professionals and brands build stronger digital presence and reach audiences in Pakistan and international markets.
          </p>
          <div className="row g-4">
            <div className="col-sm-6">
              <i className="fas fa-check-circle text-primary me-2">
              </i>
              SEO &amp; Local SEO
            </div>
            <div className="col-sm-6">
              <i className="fas fa-check-circle text-primary me-2">
              </i>
              Google &amp; Meta Ads
            </div>
            <div className="col-sm-6">
              <i className="fas fa-check-circle text-primary me-2">
              </i>
              Social Media Management
            </div>
            <div className="col-sm-6">
              <i className="fas fa-check-circle text-primary me-2">
              </i>
              International Marketing
            </div>
          </div>
          <a className="btn btn-primary rounded-pill py-3 px-5 mt-4" href="/contact">
            Talk to Frizendo
          </a>
        </div>
      </div>
    </div>
  </section>    
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
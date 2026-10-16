import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Digital Marketing Services | SEO, Google Ads, Meta Ads & Social Media | Frizendo",
  description: "Frizendo services: SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management, branding and web solutions for growing brands.",
  alternates: { canonical: "https://frizendo.com/services.html" },
  openGraph: {"url":"https://frizendo.com/services.html","images":[{"url":"/img/clients-img/Frizendo-logo.png","width":500,"height":500,"alt":"Frizendo","type":"image/png"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5 bg-light" id="services">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Services
        </p>
        <h2 className="display-6">
          Everything your brand needs to get noticed.
        </h2>
        <p>
          From search and paid acquisition to social media, branding and web presence, Frizendo brings core digital growth services together.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <div className="icon">
              <i className="fas fa-search">
              </i>
            </div>
            <h4>
              Search Engine Optimization (SEO)
            </h4>
            <p className="mb-0">
              Improve organic visibility, search rankings and qualified traffic with practical SEO strategies.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <div className="icon">
              <i className="fab fa-google">
              </i>
            </div>
            <h4>
              Google Ads
            </h4>
            <p className="mb-0">
              Build and optimize Google Ads campaigns focused on qualified traffic, leads and conversions.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <div className="icon">
              <i className="fab fa-facebook-f">
              </i>
            </div>
            <h4>
              Meta Ads
            </h4>
            <p className="mb-0">
              Reach the right audiences through Facebook and Instagram advertising with measurable campaign goals.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <div className="icon">
              <i className="fab fa-linkedin-in">
              </i>
            </div>
            <h4>
              LinkedIn Ads &amp; B2B
            </h4>
            <p className="mb-0">
              Support B2B growth with LinkedIn advertising, content strategy, targeting and lead generation.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <div className="icon">
              <i className="fas fa-share-alt">
              </i>
            </div>
            <h4>
              Social Media Management
            </h4>
            <p className="mb-0">
              Manage social channels with consistent content, audience engagement and professional brand communication.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <div className="icon">
              <i className="fas fa-laptop-code">
              </i>
            </div>
            <h4>
              Branding &amp; Web
            </h4>
            <p className="mb-0">
              Strengthen your digital presence with branding, personal positioning and website solutions.
            </p>
          </div>
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
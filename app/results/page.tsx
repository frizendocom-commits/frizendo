import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Results | Real Digital Marketing Proof | Frizendo",
  description: "Campaign results, analytics snapshots and performance numbers from Frizendo digital marketing projects.",
  alternates: { canonical: "https://frizendo.com/results.html" },
  openGraph: {"url":"https://frizendo.com/results.html","images":[{"url":"/img/clients-img/Frizendo-logo.png","width":500,"height":500,"alt":"Frizendo","type":"image/png"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5" id="results">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Results
        </p>
        <h2 className="display-6">
          Results clients can see.
        </h2>
        <p>
          Campaign and analytics snapshots showing the kind of performance Frizendo works toward.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="YouTube Views 38.5K" href="/assets/youtube-analytics-1.jpg">
              <img alt="YouTube analytics snapshot showing 38.5K views" src="/assets/youtube-analytics-1.jpg" />
            </a>
            <div className="display-6 text-primary fw-bold">
              38.5K
            </div>
            <h3 className="h5 mt-2">
              YouTube Views
            </h3>
            <p className="mb-0">
              A real analytics snapshot from a managed YouTube project.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Watch Time 48.4 hrs" href="/assets/youtube-analytics-2.jpg">
              <img alt="YouTube analytics snapshot showing 48.4 hours watch time" src="/assets/youtube-analytics-2.jpg" />
            </a>
            <div className="display-6 text-primary fw-bold">
              48.4 hrs
            </div>
            <h3 className="h5 mt-2">
              Watch Time
            </h3>
            <p className="mb-0">
              A recorded watch-time result with significant growth.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Channel Views 414.7K" href="/assets/project-4.png">
              <img alt="Channel analytics snapshot showing 414.7K views" src="/assets/project-4.png" />
            </a>
            <div className="display-6 text-primary fw-bold">
              414.7K
            </div>
            <h3 className="h5 mt-2">
              Channel Views
            </h3>
            <p className="mb-0">
              A channel analytics snapshot showing broad audience reach.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <div className="display-6 text-primary fw-bold">
              720.5 hrs
            </div>
            <h3 className="h5 mt-2">
              Total Watch Time
            </h3>
            <p className="mb-0">
              Combined watch time delivered across managed video projects.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <div className="display-6 text-primary fw-bold">
              5+
            </div>
            <h3 className="h5 mt-2">
              Countries Served
            </h3>
            <p className="mb-0">
              Clients supported from Pakistan, the UK, USA, Australia and Hungary.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <div className="display-6 text-primary fw-bold">
              6+
            </div>
            <h3 className="h5 mt-2">
              Projects Delivered
            </h3>
            <p className="mb-0">
              Campaigns, branding and social projects shipped for global clients.
            </p>
          </div>
        </div>
      </div></div>
  </section>      
  <section className="container-xxl py-5 bg-light" id="snapshots">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Snapshots
        </p>
        <h2 className="display-6">
          A quick look at the work.
        </h2>
        <p>
          Analytics and project screenshots from campaigns Frizendo has managed.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="YouTube Views 38.5K" href="/assets/youtube-analytics-1.jpg">
              <img alt="YouTube analytics snapshot showing 38.5K views" src="/assets/youtube-analytics-1.jpg" />
            </a>
            <h3 className="h5 mt-2">
              YouTube Views
            </h3>
            <p className="mb-0">
              A real analytics snapshot from a managed YouTube project.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Watch Time 48.4 hrs" href="/assets/youtube-analytics-2.jpg">
              <img alt="YouTube analytics snapshot showing 48.4 hours watch time" src="/assets/youtube-analytics-2.jpg" />
            </a>
            <h3 className="h5 mt-2">
              Watch Time
            </h3>
            <p className="mb-0">
              A recorded watch-time result with significant growth.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Channel Views 414.7K" href="/assets/project-4.png">
              <img alt="Channel analytics snapshot showing 414.7K views" src="/assets/project-4.png" />
            </a>
            <h3 className="h5 mt-2">
              Channel Views
            </h3>
            <p className="mb-0">
              A channel analytics snapshot showing broad audience reach.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Nordex Hub" href="/assets/nordex-hub.png">
              <img alt="Nordex Hub digital profile and branding work" src="/assets/nordex-hub.png" />
            </a>
            <h3 className="h5 mt-2">
              Nordex Hub
            </h3>
            <p className="mb-0">
              Digital presence and brand presentation.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Farasat Ali & Nordex Hub" href="/assets/farasat-nordex.png">
              <img alt="Professional branding and digital presence work" src="/assets/farasat-nordex.png" />
            </a>
            <h3 className="h5 mt-2">
              Farasat Ali &amp; Nordex Hub
            </h3>
            <p className="mb-0">
              Personal branding and business profile positioning.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4 h-100">
            <a className="result-media" data-lightbox="frizendo-results" data-title="Dr. Hadley Leatherman, MD" href="/assets/dr-hadley-after.png">
              <img alt="Social media setup for Dr. Hadley Leatherman" src="/assets/dr-hadley-after.png" />
            </a>
            <h3 className="h5 mt-2">
              Social Media Setup
            </h3>
            <p className="mb-0">
              Professional social media setup and management.
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
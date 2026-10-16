import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Clients & Projects | Brands We Have Worked With | Frizendo",
  description: "Brands and projects Frizendo has worked with across Pakistan, the United Kingdom, USA, Australia and Hungary.",
  alternates: { canonical: "https://frizendo.com/clients.html" },
  openGraph: {"url":"https://frizendo.com/clients.html","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5" id="clients">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Brands
        </p>
        <h2 className="display-6">
          Brands we have worked with.
        </h2>
        <p>
          Selected work across Pakistan, UK, Hungary, USA, Australia and international markets.
        </p>
      </div>
      <div className="row g-3">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://automatedgateservices.com/" rel="noopener" target="_blank">
              <img alt="Automated Gate Services Ltd logo" className="fr-client-logo" src="/img/clients-img/automated%20Gate%20services.jpg" />
              Automated Gate Services Ltd
              <small>
                United Kingdom
              </small>
            </a>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://www.facebook.com/frizendofahrdienstbrambor" rel="noopener" target="_blank">
              <img alt="Transport Service Brambor logo" className="fr-client-logo" src="/img/clients-img/Transport%20Service%20Brambor.jpg" />
              Transport Service Brambor
              <small>
                Hungary
              </small>
            </a>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://jutech.co/mobile-development" rel="noopener" target="_blank">
              <img alt="JuTech Singapore logo" className="fr-client-logo" src="/img/clients-img/JuTech%20Singapore.jpg" />
              JuTech Singapore
              <small>
                Singapore
              </small>
            </a>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://www.bni.com/" rel="noopener" target="_blank">
              <img alt="BNI logo" className="fr-client-logo" src="/img/clients-img/BNI_logo.jpg" />
              BNI
              <small>
                International
              </small>
            </a>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://binaryhub.co/" rel="noopener" target="_blank">
              <img alt="Binary Hub logo" className="fr-client-logo" src="/img/clients-img/logo-binary.jpg" />
              Binary Hub
              <small>
                Pakistan
              </small>
            </a>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://www.linkedin.com/company/evolve-cfo-online/posts/?feedView=all" rel="noopener" target="_blank">
              <img alt="Evolve CFO Online logo" className="fr-client-logo" src="/img/clients-img/Evolve%20CFO%20Services%20Logo.jpg" />
              Evolve CFO Online
              <small>
                USA
              </small>
            </a>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="fr-client">
            <a className="fr-client-link" href="https://hunzapurezza.com/" rel="noopener" target="_blank">
              <img alt="Hunza Purezza logo" className="fr-client-logo" src="/img/clients-img/Hunza%20Purezza%20Orange%20Berry%20Emblem.jpg" />
              Hunza Purezza
              <small>
                Pakistan
              </small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-xxl py-5 bg-light" id="markets">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Clients
        </p>
        <h2 className="display-6">
          Clients we have worked with.
        </h2>
        <p>
          Trusted by clients across Pakistan, the UK, Hungary, the USA, Australia, and beyond.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.linkedin.com/in/tomkradcliff/" rel="noopener" target="_blank">
              <img alt="Tom Radcliff logo" className="fr-card-logo" src="/img/clients-img/Tom%20Radcliff.jpg" />
              <h3 className="h5">
                Tom Radcliff</h3>
              <p className="text-primary fw-bold mb-2">
                Australia
              </p>
              <p className="mb-0">
                YouTube management and channel growth support.
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.linkedin.com/in/mjmagett/" rel="noopener" target="_blank">
              <img alt="Marilyn J. Magett logo" className="fr-card-logo" src="/img/clients-img/Marilyn%20J.%20Magett.jpg" />
              <h3 className="h5">
                Marilyn J. Magett</h3>
              <p className="text-primary fw-bold mb-2">
                USA
              </p>
              <p className="mb-0">
                LinkedIn Ads campaign setup and tracking.
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.instagram.com/frizendo/drhadleyleatherman/" rel="noopener" target="_blank">
              <img alt="Dr. Hadley Leatherman, MD logo" className="fr-card-logo" src="/img/clients-img/Dr.%20Hadley%20Leatherman%2C%20MD.jpg" />
              <h3 className="h5">
                Dr. Hadley Leatherman, MD</h3>
              <p className="text-primary fw-bold mb-2">
                USA
              </p>
              <p className="mb-0">
                Social media setup and management.
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.linkedin.com/in/ajaz-hussain-3549a4174/" rel="noopener" target="_blank">
              <img alt="Ajaz Hussain logo" className="fr-card-logo" src="/img/clients-img/Ajaz%20Hussain.jpg" />
              <h3 className="h5">
                Ajaz Hussain</h3>
              <p className="text-primary fw-bold mb-2">
                USA
              </p>
              <p className="mb-0">
                Lead generation.
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.linkedin.com/in/sheemajehanzeb/" rel="noopener" target="_blank">
              <img alt="Sheema Jehanzeb logo" className="fr-card-logo" src="/img/clients-img/Sheema%20Jehanzeb.jpg" />
              <h3 className="h5">
                Sheema Jehanzeb</h3>
              <p className="text-primary fw-bold mb-2">
                Dubai
              </p>
              <p className="mb-0">
                LinkedIn marketing and personal branding.
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.linkedin.com/in/pmpriyanka/" rel="noopener" target="_blank">
              <img alt="Priyanka Das logo" className="fr-card-logo" src="/img/clients-img/Priyanka%20Das.jpg" />
              <h3 className="h5">
                Priyanka Das</h3>
              <p className="text-primary fw-bold mb-2">
                Canada
              </p>
              <p className="mb-0">
                Book marketing for an AI product management book across different platforms.
              </p>
            </a>
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
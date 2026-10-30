import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Clients & Projects | Brands We Have Worked With | Frizendo",
  description: "Brands and projects Frizendo has worked with across Pakistan, the United Kingdom, USA, Australia and Hungary.",
  alternates: { canonical: "https://frizendo.com/clients" },
  openGraph: {"url":"https://frizendo.com/clients","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
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
              <Image
                alt="Automated Gate Services Ltd logo"
                className="fr-client-logo"
                src="/img/clients-img/automated Gate services.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="Transport Service Brambor logo"
                className="fr-client-logo"
                src="/img/clients-img/Transport Service Brambor.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="JuTech Singapore logo"
                className="fr-client-logo"
                src="/img/clients-img/JuTech Singapore.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="BNI logo"
                className="fr-client-logo"
                src="/img/clients-img/BNI_logo.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="Binary Hub logo"
                className="fr-client-logo"
                src="/img/clients-img/logo-binary.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="Evolve CFO Online logo"
                className="fr-client-logo"
                src="/img/clients-img/Evolve CFO Services Logo.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="Hunza Purezza logo"
                className="fr-client-logo"
                src="/img/clients-img/Hunza Purezza Orange Berry Emblem.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                quality={80}
              />
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
              <Image
                alt="Tom Radcliff logo"
                className="fr-card-logo"
                src="/img/clients-img/Tom Radcliff.jpg"
                width={2752}
                height={1536}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
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
              <Image
                alt="Marilyn J. Magett logo"
                className="fr-card-logo"
                src="/img/clients-img/Marilyn J. Magett.jpg"
                width={2752}
                height={1536}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
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
              <Image
                alt="Dr. Hadley Leatherman, MD logo"
                className="fr-card-logo"
                src="/img/clients-img/dr-hadley-leatherman-md.jpg"
                width={2752}
                height={1536}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
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
              <Image
                alt="Ajaz Hussain logo"
                className="fr-card-logo"
                src="/img/clients-img/Ajaz Hussain.jpg"
                width={2752}
                height={1536}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
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
              <Image
                alt="Sheema Jehanzeb logo"
                className="fr-card-logo"
                src="/img/clients-img/Sheema Jehanzeb.jpg"
                width={2752}
                height={1536}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
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
              <Image
                alt="Priyanka Das logo"
                className="fr-card-logo"
                src="/img/clients-img/Priyanka Das.jpg"
                width={2752}
                height={1536}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
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
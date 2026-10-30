import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Our Work | Portfolio & Digital Marketing Projects | Frizendo",
  description: "Selected Frizendo work: campaign result snapshots, international projects and client project profiles from Pakistan and global markets.",
  alternates: { canonical: "https://frizendo.com/our-work" },
  openGraph: {"url":"https://frizendo.com/our-work","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5 bg-light" id="work">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Our Work
        </p>
        <h2 className="display-6">
          Real projects. Real marketing proof.
        </h2>
        <p>
          Selected portfolio work and campaign assets from Frizendo projects.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="fr-result">
            <a data-lightbox="frizendo-work" data-title="YouTube Analytics Growth" href="/assets/project-1.png">
              <Image
                alt="YouTube analytics showing 38.5K views from a Frizendo-managed project"
                src="/assets/project-1.png"
                width={1088}
                height={629}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
            </a>
            <div className="p-4">
              <small className="text-primary fw-bold">
                RESULTS
              </small>
              <h5 className="mt-2">
                YouTube Analytics Growth
              </h5>
              <p className="mb-0">
                Channel growth and content performance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-result">
            <a data-lightbox="frizendo-work" data-title="Watch Time Growth" href="/assets/project-2.png">
              <Image
                alt="YouTube watch time showing 48.4 hours and strong growth"
                src="/assets/project-2.png"
                width={1163}
                height={739}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
            </a>
            <div className="p-4">
              <small className="text-primary fw-bold">
                RESULTS
              </small>
              <h5 className="mt-2">
                Watch Time Growth
              </h5>
              <p className="mb-0">
                Improved watch time through content optimization.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-result">
            <a data-lightbox="frizendo-work" data-title="Channel Performance" href="/assets/project-4.png">
              <Image
                alt="YouTube analytics showing 414.7K views, 720.5 watch hours and subscriber growth"
                src="/assets/project-4.png"
                width={1579}
                height={706}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
            </a>
            <div className="p-4">
              <small className="text-primary fw-bold">
                RESULTS
              </small>
              <h5 className="mt-2">
                Channel Performance
              </h5>
              <p className="mb-0">
                Long-term channel performance and audience growth.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-result">
            <a data-lightbox="frizendo-work" data-title="Dr. Hadley Leatherman, MD" href="/assets/dr-hadley-before-after.png">
              <Image
                alt="Before and after social media setup for Dr. Hadley Leatherman"
                src="/assets/dr-hadley-before-after.png"
                width={1671}
                height={941}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
            </a>
            <div className="p-4">
              <small className="text-primary fw-bold">
                SOCIAL MEDIA
              </small>
              <h5 className="mt-2">
                Dr. Hadley Leatherman, MD
              </h5>
              <p className="mb-0">
                Professional social media setup and management.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-result">
            <a data-lightbox="frizendo-work" data-title="Farasat Ali & Nordex Hub" href="/assets/farasat-nordex.png">
              <Image
                alt="Professional branding and digital presence work"
                src="/assets/farasat-nordex.png"
                width={717}
                height={449}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
            </a>
            <div className="p-4">
              <small className="text-primary fw-bold">
                BRANDING
              </small>
              <h5 className="mt-2">
                Farasat Ali &amp; Nordex Hub
              </h5>
              <p className="mb-0">
                Personal branding and business profile positioning.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-result">
            <a data-lightbox="frizendo-work" data-title="Nordex Hub" href="/assets/nordex-hub.png">
              <Image
                alt="Nordex Hub digital profile and branding work"
                src="/assets/nordex-hub.png"
                width={726}
                height={376}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
            </a>
            <div className="p-4">
              <small className="text-primary fw-bold">
                BRANDING
              </small>
              <h5 className="mt-2">
                Nordex Hub
              </h5>
              <p className="mb-0">
                Digital presence and brand presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          International Projects
        </p>
        <h2 className="display-6">
          Selected campaigns by market &amp; objective.
        </h2>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Automated Gate Services Ltd logo"
              className="fr-card-logo"
              src="/img/clients-img/automated Gate services.jpg"
              width={2720}
              height={1568}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Automated Gate Services Ltd
            </h5>
            <p className="text-primary fw-bold mb-2">
              United Kingdom
            </p>
            <p className="mb-0">
              Full marketing, advertising and online setup.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <a className="fr-client-link" href="https://www.facebook.com/frizendofahrdienstbrambor" rel="noopener" target="_blank">
              <Image
                alt="Transport Service Brambor logo"
                className="fr-card-logo"
                src="/img/clients-img/Transport Service Brambor.jpg"
                width={2720}
                height={1568}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                quality={80}
              />
              <h5>
                Transport Service Brambor
              </h5>
              <p className="text-primary fw-bold mb-2">
                Hungary
              </p>
              <p className="mb-0">
                Digital marketing and social media support.
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Tom Radcliff logo"
              className="fr-card-logo"
              src="/img/clients-img/Tom Radcliff.jpg"
              width={2752}
              height={1536}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Tom Radcliff
            </h5>
            <p className="text-primary fw-bold mb-2">
              Australia
            </p>
            <p className="mb-0">
              YouTube management and channel growth support.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="JuTech Singapore logo"
              className="fr-card-logo"
              src="/img/clients-img/JuTech Singapore.jpg"
              width={2720}
              height={1568}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              JuTech Singapore
            </h5>
            <p className="text-primary fw-bold mb-2">
              Singapore
            </p>
            <p className="mb-0">
              Personal branding and AI-related book project support.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="BNI logo"
              className="fr-card-logo"
              src="/img/clients-img/BNI_logo.jpg"
              width={2720}
              height={1568}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              BNI
            </h5>
            <p className="text-primary fw-bold mb-2">
              International
            </p>
            <p className="mb-0">
              Marketing support and digital presence work.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Financial Consulting logo"
              className="fr-card-logo"
              src="/img/clients-img/JuTech Singapore.jpg"
              width={2720}
              height={1568}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Financial Consulting
            </h5>
            <p className="text-primary fw-bold mb-2">
              USA
            </p>
            <p className="mb-0">
              LinkedIn Ads campaign monitoring and optimization.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Marilyn J. Magett logo"
              className="fr-card-logo"
              src="/img/clients-img/Marilyn J. Magett.jpg"
              width={2752}
              height={1536}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Marilyn J. Magett
            </h5>
            <p className="text-primary fw-bold mb-2">
              USA
            </p>
            <p className="mb-0">
              LinkedIn Ads campaign setup and tracking.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Dr. Hadley Leatherman, MD logo"
              className="fr-card-logo"
              src="/img/clients-img/dr-hadley-leatherman-md.jpg"
              width={2752}
              height={1536}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Dr. Hadley Leatherman, MD
            </h5>
            <p className="text-primary fw-bold mb-2">
              USA
            </p>
            <p className="mb-0">
              Social media setup and management.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Binary Hub logo"
              className="fr-card-logo"
              src="/img/clients-img/logo-binary.jpg"
              width={2720}
              height={1568}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Binary Hub
            </h5>
            <p className="text-primary fw-bold mb-2">
              Pakistan
            </p>
            <p className="mb-0">
              Social media ecosystem, content strategy, B2B branding and video SEO.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Ajaz Hussain logo"
              className="fr-card-logo"
              src="/img/clients-img/Ajaz Hussain.jpg"
              width={2752}
              height={1536}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Ajaz Hussain
            </h5>
            <p className="text-primary fw-bold mb-2">
              USA
            </p>
            <p className="mb-0">
              Lead generation.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Sheema Jehanzeb logo"
              className="fr-card-logo"
              src="/img/clients-img/Sheema Jehanzeb.jpg"
              width={2752}
              height={1536}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Sheema Jehanzeb
            </h5>
            <p className="text-primary fw-bold mb-2">
              Dubai
            </p>
            <p className="mb-0">
              LinkedIn marketing and personal branding.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="fr-card p-4">
            <Image
              alt="Priyanka Das logo"
              className="fr-card-logo"
              src="/img/clients-img/Priyanka Das.jpg"
              width={2752}
              height={1536}
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              quality={80}
            />
            <h5>
              Priyanka Das
            </h5>
            <p className="text-primary fw-bold mb-2">
              Canada
            </p>
            <p className="mb-0">
              Book marketing for an AI product management book across different platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-xxl py-5 bg-light">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Portfolio
        </p>
        <h2 className="display-6">
          Explore selected project profiles.
        </h2>
      </div>
      <div className="row g-3">
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-link" href="https://www.linkedin.com/company/binaryhubtech/home/" rel="noopener" target="_blank">
            <i className="fab fa-linkedin text-primary me-2">
            </i>
            Binary Hub — LinkedIn
            <span className="d-block small text-muted mt-1">
              View project profile
            </span>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-link" href="https://www.linkedin.com/in/web-developer-farasat-ali/" rel="noopener" target="_blank">
            <i className="fab fa-linkedin text-primary me-2">
            </i>
            Farasat Ali — LinkedIn
            <span className="d-block small text-muted mt-1">
              View project profile
            </span>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-link" href="https://www.linkedin.com/company/nordex-hub/posts/" rel="noopener" target="_blank">
            <i className="fab fa-linkedin text-primary me-2">
            </i>
            Nordex Hub — LinkedIn
            <span className="d-block small text-muted mt-1">
              View project profile
            </span>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-link" href="https://www.facebook.com/frizendo" rel="noopener" target="_blank">
            <i className="fab fa-facebook text-primary me-2">
            </i>
            Markhor Times — Facebook
            <span className="d-block small text-muted mt-1">
              View project profile
            </span>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-link" href="https://www.instagram.com/frizendo/ahmad_hsnn/reels/" rel="noopener" target="_blank">
            <i className="fab fa-instagram text-primary me-2">
            </i>
            Ahmad Hassan — Instagram
            <span className="d-block small text-muted mt-1">
              View project profile
            </span>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-link" href="https://www.bni.com/" rel="noopener" target="_blank">
            <i className="fab fa-globe text-primary me-2">
            </i>
            BNI — Official Website
            <span className="d-block small text-muted mt-1">
              View project profile
            </span>
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
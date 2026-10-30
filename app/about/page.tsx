import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import "./about.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "About Frizendo | Digital Marketing Agency in Gilgit",
  description:
    "Meet Frizendo, a digital marketing agency based in Gilgit, Gilgit-Baltistan, Pakistan. Founded by Amir Hassan with co-founder Yasir Rahim, offering SEO, Google Ads, social media marketing, branding and web solutions for local and international businesses.",
  keywords: [
    "about Frizendo",
    "Frizendo digital marketing agency",
    "digital marketing agency in Gilgit",
    "best marketing agency in Gilgit",
    "best advertising company in Gilgit",
    "advertising agency in Gilgit-Baltistan",
    "SEO agency in Gilgit",
    "social media marketing in Gilgit",
    "paid advertising agency in Gilgit",
    "local business marketing in Gilgit",
    "Amir Hassan founder of Frizendo",
    "Yasir Rahim co-founder of Frizendo",
    "digital marketing services in Gilgit Pakistan",
  ],
  authors: [{ name: "Amir Hassan, Frizendo" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://frizendo.com/about" },
  openGraph: {
    type: "website",
    siteName: "Frizendo",
    title: "About Frizendo | Digital Marketing Agency in Gilgit",
    description:
      "Meet Frizendo, a digital marketing agency in Gilgit, Pakistan, founded by Amir Hassan with co-founder Yasir Rahim. SEO, paid ads, social media, branding and web solutions for local and international brands.",
    url: "https://frizendo.com/about",
    images: [
      {
        url: "/img/og/frizendo-og.jpg",
        secureUrl: "https://frizendo.com/img/og/frizendo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Frizendo - Digital Marketing Agency in Gilgit, Pakistan",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Frizendo | Digital Marketing Agency in Gilgit",
    description:
      "The Frizendo story: founded by Amir Hassan, co-founded by Yasir Rahim. Digital marketing for businesses in Gilgit and beyond.",
    images: [
      {
        url: "/img/og/frizendo-og.jpg",
        alt: "Frizendo - Digital Marketing Agency in Gilgit, Pakistan",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://frizendo.com/#organization",
      name: "Frizendo",
      url: "https://frizendo.com/",
      logo: "https://frizendo.com/assets/frizendo-logo.png",
      image: "https://frizendo.com/assets/frizendo-logo.png",
      description:
        "Digital marketing agency based in Gilgit, Gilgit-Baltistan, Pakistan, serving local and international clients with SEO, Google Ads, paid advertising, social media marketing, branding and web solutions.",
      founder: [
        { "@id": "https://frizendo.com/#amir-hassan" },
      ],
      employee: [
        { "@id": "https://frizendo.com/#amir-hassan" },
        { "@id": "https://frizendo.com/#yasir-rahim" },
      ],
      areaServed: [
        "Gilgit",
        "Gilgit-Baltistan",
        "Pakistan",
        "United Kingdom",
        "United States",
        "Australia",
        "Hungary",
        "Worldwide",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gilgit",
        addressRegion: "Gilgit-Baltistan",
        addressCountry: "PK",
      },
      email: "frizendo.com@gmail.com",
      telephone: "+923498901846",
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/frizendo",
        "https://www.instagram.com/frizendo/",
        "https://www.linkedin.com/company/frizendo/home",
      ],
      serviceType: [
        "SEO",
        "Local SEO",
        "Digital Marketing",
        "Google Ads",
        "Paid Advertising",
        "Meta Ads",
        "LinkedIn Ads",
        "Social Media Marketing",
        "Branding",
        "Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://frizendo.com/#website",
      url: "https://frizendo.com/",
      name: "Frizendo",
      publisher: { "@id": "https://frizendo.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "AboutPage",
      "@id": "https://frizendo.com/about#webpage",
      url: "https://frizendo.com/about",
      name: "About Frizendo | Digital Marketing Agency in Gilgit",
      isPartOf: { "@id": "https://frizendo.com/#website" },
      about: { "@id": "https://frizendo.com/#organization" },
      inLanguage: "en",
      breadcrumb: { "@id": "https://frizendo.com/about#breadcrumb" },
      mainEntity: { "@id": "https://frizendo.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://frizendo.com/#amir-hassan",
      name: "Amir Hassan",
      givenName: "Amir",
      familyName: "Hassan",
      jobTitle: ["Founder", "CEO"],
      description: "Amir Hassan is the Founder and CEO of Frizendo, a digital marketing agency based in Gilgit, Pakistan.",
      worksFor: { "@id": "https://frizendo.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://frizendo.com/#yasir-rahim",
      name: "Yasir Rahim",
      givenName: "Yasir",
      familyName: "Rahim",
      alternateName: ["Yasir Rahim"],
      jobTitle: "Co-Founder",
      description: "Yasir Rahim is the co-founder of Frizendo, a digital marketing agency based in Gilgit, Pakistan.",
      url: "https://frizendo.com/about",
      knowsAbout: [
        "Digital Marketing",
        "SEO",
        "Paid Advertising",
        "Social Media Marketing",
        "Branding",
        "Web Development",
      ],
      worksFor: { "@id": "https://frizendo.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://frizendo.com/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://frizendo.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://frizendo.com/about",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="about-hero" id="about">
        <Image
          alt=""
          className="about-hero-bg"
          src="/img/clients-img/about-bg.jpg"
          fill
          sizes="100vw"
          quality={75}
          preload
        />
        <div className="container">
          <p className="about-kicker">About Frizendo</p>
          <h1>About Frizendo — Digital Marketing Agency in Gilgit</h1>
          <p className="about-lead">
            Frizendo is a digital marketing agency based in Gilgit,
            Gilgit-Baltistan, Pakistan. We help local businesses and
            international brands grow with practical SEO, paid advertising,
            social media marketing, branding and web solutions — built around
            clear goals and honest expectations.
          </p>
          <div className="mt-4">
            <Link
              className="btn btn-primary text-white rounded-pill py-3 px-5 me-2"
              href="/services"
            >
              Explore Services
            </Link>
            <Link className="btn btn-outline-light rounded-pill py-3 px-5" href="/contact">
              Talk to Frizendo
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section" id="who-we-are">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12">
              <p className="section-kicker">Who We Are</p>
              <h2 className="display-6 mb-4">
                A Gilgit-based agency with a local focus and global outlook.
              </h2>
              <p className="mb-4">
                Frizendo was founded by Amir Hassan, with Yasir Rahim as
                co-founder, to give businesses in Gilgit and Gilgit-Baltistan
                access to the same quality of digital marketing that brands in
                bigger markets depend on. Alongside local work, the agency has
                helped clients across Pakistan and international markets reach
                audiences through search, paid advertising, social media,
                branding and web solutions.
              </p>
              <p className="mb-4">
                Whether you need more visibility on Google, a stronger social
                media presence or a website that represents your business well,
                Frizendo plans digital marketing around your market, your
                customers and your goals.
              </p>
              <p className="mb-0">
                The name carries the same idea — Frizendo stands for Fresh
                Ideas, Real Results. See what FRIZ, EN and DO mean in the{" "}
                <Link href="/meaning">Frizendo brand meaning</Link> page.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-bullseye" />
                </div>
                <h3 className="h5">Our Mission</h3>
                <p className="mb-0">
                  To help businesses in Gilgit, Gilgit-Baltistan and beyond
                  build a credible online presence and reach the right audience
                  through well-executed, practical digital marketing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-eye" />
                </div>
                <h3 className="h5">Our Vision</h3>
                <p className="mb-0">
                  To be a trusted digital marketing partner for local and
                  international brands — known for clarity, honesty and work
                  that supports real business growth.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-compass" />
                </div>
                <h3 className="h5">Our Approach</h3>
                <p className="mb-0">
                  We start with the business goal, not the tactics. Then we
                  plan SEO, paid ads, social media, branding and web work
                  around what makes sense for your market and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-light" id="leadership">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
            <p className="section-kicker">Leadership</p>
            <h2 className="display-6">Meet the Founder and Co-Founder of Frizendo</h2>
            <p className="mb-0">
              Frizendo was founded and led by Amir Hassan, with Yasir Rahim
              working alongside him as co-founder.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <a
                className="about-profile"
                href="https://www.mehakaura.com/"
                rel="noopener"
                target="_blank"
              >
                <h3 className="h4 mb-0">Amir Hassan</h3>
                <span className="about-role">Founder of Frizendo</span>
                <p>
                  Amir Hassan is the Founder & CEO of Frizendo, a young
                  entrepreneur and digital marketing strategist from Gilgit,
                  Pakistan. He specializes in SEO, Google Ads, paid advertising,
                  social media marketing, branding, and web development, helping
                  businesses grow across Pakistan and international markets.
                </p>
              </a>
            </div>
            <div className="col-md-6 col-lg-5">
              <a
                className="about-profile"
                href="https://www.mehakaura.com/"
                rel="noopener"
                target="_blank"
              >
                <h3 className="h4 mb-0">Yasir Rahim</h3>
                <span className="about-role">Co-Founder of Frizendo</span>
                <p>
                  Yasir Rahim is the co-founder of Frizendo. He works alongside
                  the founder to plan and deliver digital marketing projects for
                  local businesses and international clients.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="services">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
            <p className="section-kicker">Services</p>
            <h2 className="display-6">Digital marketing services in Gilgit and beyond</h2>
            <p className="mb-0">
              Frizendo brings the core digital growth services together under
              one roof so your marketing works as one connected strategy.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="fr-card p-4 position-relative">
                <div className="icon">
                  <i className="fas fa-search" />
                </div>
                <h3 className="h4">SEO &amp; Local SEO</h3>
                <p className="mb-3">
                  Improve how your business shows up in Google search and help
                  local customers find you when they search from Gilgit and
                  across Gilgit-Baltistan.
                </p>
                <Link className="stretched-link text-primary fw-bold" href="/services">
                  Explore SEO in Gilgit →
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="fr-card p-4 position-relative">
                <div className="icon">
                  <i className="fab fa-google" />
                </div>
                <h3 className="h4">Google Ads &amp; Paid Advertising</h3>
                <p className="mb-3">
                  Google Ads, Meta Ads and LinkedIn Ads campaigns built for
                  qualified traffic, enquiries and conversions.
                </p>
                <Link className="stretched-link text-primary fw-bold" href="/services">
                  Explore Paid Advertising →
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="fr-card p-4 position-relative">
                <div className="icon">
                  <i className="fas fa-share-alt" />
                </div>
                <h3 className="h4">Social Media Marketing</h3>
                <p className="mb-3">
                  Consistent content and professional management for your social
                  channels to build presence and audience trust.
                </p>
                <Link className="stretched-link text-primary fw-bold" href="/services">
                  Explore Social Media →
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="fr-card p-4 position-relative">
                <div className="icon">
                  <i className="fas fa-palette" />
                </div>
                <h3 className="h4">Branding</h3>
                <p className="mb-3">
                  Brand identity, positioning and personal branding that make
                  your business look professional and credible.
                </p>
                <Link className="stretched-link text-primary fw-bold" href="/services">
                  Explore Branding →
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="fr-card p-4 position-relative">
                <div className="icon">
                  <i className="fas fa-laptop-code" />
                </div>
                <h3 className="h4">Web Solutions</h3>
                <p className="mb-3">
                  Websites and digital assets that support your marketing and
                  give customers a strong first impression of your business.
                </p>
                <Link className="stretched-link text-primary fw-bold" href="/services">
                  Explore Web Solutions →
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="fr-card p-4 position-relative">
                <div className="icon">
                  <i className="fas fa-chart-line" />
                </div>
                <h3 className="h4">Growth Strategy</h3>
                <p className="mb-3">
                  A practical plan connecting search, paid, social and web work
                  around the business outcomes you actually care about.
                </p>
                <Link className="stretched-link text-primary fw-bold" href="/services">
                  Explore Growth Strategy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-light" id="why-frizendo">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="section-kicker">Why Frizendo</p>
              <h2 className="display-6 mb-4">
                Why choose Frizendo for digital marketing in Gilgit
              </h2>
              <p className="mb-4">
                Choosing a marketing agency is a real business decision. Here
                is how Frizendo works and what you can expect.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Based in Gilgit — we understand the local market.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Experience with local and international clients.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2" />
                  SEO, paid ads, social, branding and web under one roof.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Clear scope and honest expectations — no false promises.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2" />
                  Focus on visibility, credibility and real enquiries.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="about-local p-5">
                <h3 className="h5 text-primary">How we work with you</h3>
                <ol className="mb-0 ps-3">
                  <li className="mb-2">
                    We understand your business, market and customers.
                  </li>
                  <li className="mb-2">
                    We agree a realistic scope, timeline and budget.
                  </li>
                  <li className="mb-2">
                    We plan the right mix of SEO, paid, social and web work.
                  </li>
                  <li>
                    We execute, keep communication clear and review progress
                    together.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="gilgit-local-market">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
            <p className="section-kicker">Gilgit Local Market</p>
            <h2 className="display-6">
              Digital marketing for businesses in Gilgit &amp; Gilgit-Baltistan
            </h2>
            <p className="mb-0">
              More customers in Gilgit are searching online before they buy,
              book or visit. Digital marketing helps local businesses be found
              at that moment.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h3 className="h5">Local Visibility</h3>
                <p className="mb-0">
                  Get found for searches like businesses in Gilgit, services in
                  Gilgit-Baltistan and nearby locations that matter to your
                  customers.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-id-badge" />
                </div>
                <h3 className="h5">Credibility</h3>
                <p className="mb-0">
                  A professional website, consistent branding and active social
                  profiles make your business look established and trustworthy.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-comments" />
                </div>
                <h3 className="h5">Enquiries</h3>
                <p className="mb-0">
                  Turn online attention into messages, calls and bookings with
                  clear calls to action across search, social and paid ads.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="about-value">
                <div className="icon">
                  <i className="fas fa-globe-asia" />
                </div>
                <h3 className="h5">Wider Reach</h3>
                <p className="mb-0">
                  Reach customers beyond Gilgit — across Pakistan, returning
                  visitors to the region and international audiences.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mx-auto mt-5" style={{ maxWidth: 760 }}>
            If you are comparing digital marketing services in Gilgit, Pakistan,
            Frizendo can give you a clear, realistic view of what will help your
            business most — without promising quick fixes or guaranteed first
            place rankings.
          </p>
        </div>
      </section>

      <section className="footer-cta">
        <div className="footer-cta-content">
          <div>
            <span className="cta-label">LET'S WORK TOGETHER</span>
            <h2>Ready to grow your brand?</h2>
            <p>
              Tell Frizendo about your business and goals, and we can discuss
              the right digital marketing strategy for you.
            </p>
          </div>
          <Link href="/contact" className="cta-button">
            Contact Frizendo
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
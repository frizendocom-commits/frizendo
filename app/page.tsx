import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";
import ReviewCarousel from "@/components/ReviewCarousel";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Frizendo | Digital Marketing Agency in Gilgit, Pakistan | SEO, Ads & Social Media",
  description: "Frizendo is a digital marketing agency in Gilgit, Pakistan helping local and international brands grow through SEO, Meta Ads, Google Ads, LinkedIn Ads, social media, branding and web development.",
  keywords: ["best marketing agency in Gilgit","digital marketing agency Gilgit","SEO agency Gilgit","marketing agency in Pakistan","affordable digital marketing agency Pakistan","SEO services Pakistan","Meta Ads agency Pakistan","Google Ads agency Pakistan","LinkedIn Ads Pakistan","Frizendo","Amir Hassan Frizendo founder"],
  robots: {"index":true,"follow":true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1,"googleBot":{"index":true,"follow":true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  alternates: { canonical: "https://frizendo.com/" },
  openGraph: {"type":"website","siteName":"Frizendo","title":"Frizendo | Digital Marketing Agency in Gilgit, Pakistan","description":"SEO, paid ads, social media, branding and web development for local and international brands.","url":"https://frizendo.com/","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
  twitter: {"card":"summary_large_image","title":"Frizendo | Digital Marketing Agency in Gilgit, Pakistan","description":"Performance-focused digital marketing for local and international brands.","images":[{"url":"/img/og/frizendo-og.jpg","alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan"}]},
  authors: [{"name":"Amir Hassan, Frizendo"}],
}

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
        "Frizendo stands for Fresh Ideas, Real Results. Digital marketing agency serving Gilgit, Pakistan and international clients with SEO, Meta Ads, Google Ads, LinkedIn Ads, social media marketing, branding and web development.",
      founder: [
        { "@id": "https://frizendo.com/#amir-hassan" },
      ],
      employee: [
        { "@id": "https://frizendo.com/#amir-hassan" },
        { "@id": "https://frizendo.com/#yasir-rahim" },
      ],
      areaServed: [
        "Gilgit, Pakistan",
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
        "Digital Marketing",
        "Meta Ads",
        "Google Ads",
        "LinkedIn Ads",
        "Social Media Management",
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
      "@type": "Person",
      "@id": "https://frizendo.com/#amir-hassan",
      name: "Amir Hassan",
      givenName: "Amir",
      familyName: "Hassan",
      jobTitle: ["Founder", "CEO"],
      description: "Amir Hassan is the Founder and CEO of Frizendo, a digital marketing agency based in Gilgit, Pakistan.",
      url: "https://frizendo.com/about",
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
  ],
};

type HomeFaq = { q: string; a: string };

const HOME_FAQS: HomeFaq[] = [
  {
    q: "What is Frizendo?",
    a: "Frizendo is a digital marketing agency based in Gilgit, Gilgit-Baltistan, Pakistan, offering SEO, paid advertising, social media marketing, branding and web solutions to local and international clients.",
  },
  {
    q: "What services does Frizendo provide?",
    a: "Frizendo provides SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management, content strategy, personal branding, YouTube marketing, branding and website solutions.",
  },
  {
    q: "Does Frizendo provide SEO services in Gilgit?",
    a: "Yes. Frizendo provides SEO and local SEO strategies designed to improve search visibility, organic traffic and digital presence for businesses in Gilgit and beyond.",
  },
  {
    q: "Does Frizendo work with international clients?",
    a: "Yes. Frizendo has worked on projects and campaigns for clients and brands across the United Kingdom, Hungary, the United States, Australia and other international markets.",
  },
  {
    q: "Does Frizendo offer affordable digital marketing services in Pakistan?",
    a: "Frizendo offers practical digital marketing solutions for different business needs and budgets. Contact the team for a project-specific scope and quotation.",
  },
  {
    q: "How can I contact Frizendo?",
    a: "You can email frizendo.com@gmail.com, message +92 349 8901846 on WhatsApp, or use the contact page on this website.",
  },
  {
    q: "Who is the CEO of Frizendo?",
    a: "Amir Hassan is the Founder and CEO of Frizendo. Yasir Rahim is the Co-Founder of Frizendo.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="container-fluid px-0 mb-5 hero-frizendo" id="home">
    <h1 className="hero-brandline">
      Frizendo stands for Fresh Ideas, Real Results
    </h1>
    <div className="carousel slide" data-bs-interval={3000} data-bs-ride="carousel" id="header-carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            alt="Digital marketing strategy and growth"
            className="w-100 hero-img"
            src="/img/clients-img/hero-background.jpg"
            width={1920}
            height={1072}
            sizes="100vw"
            quality={80}
            preload
          />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-start hero-copy">
                  <p className="fs-5 text-white">
                    Digital Marketing Agency in
                    <strong>
                      Gilgit, Pakistan
                    </strong>
                  </p>
                  <h2 className="display-2 text-white mb-4">
                    Turn attention into growth.
                  </h2>
                  <p className="fs-5 text-white mb-4">
                    Frizendo helps local and international brands grow through SEO, Google Ads, Meta Ads, LinkedIn Ads, social media, branding and web solutions.
                  </p>
                  <a className="btn btn-primary text-white rounded-pill py-3 px-5 me-2" href="/services">
                    Explore Services
                  </a>
                  <a className="btn btn-outline-light rounded-pill py-3 px-5" href="/our-work">
                    View Our Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            alt="Performance marketing campaigns"
            className="w-100 hero-img"
            src="/img/clients-img/hero-background-2.jpg"
            width={1920}
            height={1072}
            sizes="100vw"
            quality={80}
            loading="eager"
            fetchPriority="low"
          />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-start hero-copy">
                  <p className="fs-5 text-white">
                    SEO • Paid Ads • Social Media • Branding
                  </p>
                  <h2 className="display-2 text-white mb-4">
                    Marketing built around measurable growth.
                  </h2>
                  <p className="fs-5 text-white mb-4">
                    From Gilgit to international markets, we build practical digital strategies designed to improve visibility, leads and brand growth.
                  </p>
                  <a className="btn btn-primary text-white rounded-pill py-3 px-5" href="/contact">
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container-xxl py-4">
    <div className="container">
      <div className="row g-0 feature-row">
        <div className="col-md-6 col-lg-3">
          <div className="feature-item border h-100 p-4">
            <div className="btn-square bg-light rounded-circle mb-3" style={{width: 56, height: 56}}>
              <i className="fas fa-search text-primary">
              </i>
            </div>
            <h3 className="h5">
              SEO Growth
            </h3>
            <p className="mb-0">
              Search visibility and organic growth strategies for local, national and international markets.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-item border h-100 p-4">
            <div className="btn-square bg-light rounded-circle mb-3" style={{width: 56, height: 56}}>
              <i className="fas fa-bullseye text-primary">
              </i>
            </div>
            <h3 className="h5">
              Paid Advertising
            </h3>
            <p className="mb-0">
              Google, Meta and LinkedIn campaigns focused on qualified traffic, leads and conversions.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-item border h-100 p-4">
            <div className="btn-square bg-light rounded-circle mb-3" style={{width: 56, height: 56}}>
              <i className="fas fa-share-alt text-primary">
              </i>
            </div>
            <h3 className="h5">
              Social Media
            </h3>
            <p className="mb-0">
              Content and social management that strengthens brand presence and audience engagement.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-item border h-100 p-4">
            <div className="btn-square bg-light rounded-circle mb-3" style={{width: 56, height: 56}}>
              <i className="fas fa-chart-line text-primary">
              </i>
            </div>
            <h3 className="h5">
              Growth Strategy
            </h3>
            <p className="mb-0">
              Practical, data-informed marketing strategies built around sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="container-xxl py-5" id="about">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <Image
            alt="Frizendo digital marketing agency team"
            className="img-fluid fr-rounded"
            src="/img/clients-img/Frizendo about.png"
            width={1254}
            height={1254}
            sizes="(max-width: 991px) 90vw, 45vw"
            quality={75}
          />
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
  <section className="container-xxl py-5 bg-light" id="brand-meaning">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Brand Meaning
        </p>
        <h2 className="display-6">
          What Does Frizendo Stand For?
        </h2>
        <p>
          Frizendo stands for Fresh Ideas, Real Results — a brand philosophy
          built on creative thinking, energy, and delivering meaningful
          business outcomes.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <h3 className="h5">
              FRIZ — Fresh Ideas
            </h3>
            <p className="mb-0">
              Creative thinking, new perspectives, and innovative solutions.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <h3 className="h5">
              EN — Energy
            </h3>
            <p className="mb-0">
              Passion, motivation, and dedicated execution.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="fr-card p-4 h-100">
            <h3 className="h5">
              DO — Deliver Outcomes
            </h3>
            <p className="mb-0">
              Turning strategies into action and focusing on measurable
              business results.
            </p>
          </div>
        </div>
      </div>
      <div className="see-more-wrap">
        <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="/meaning">
          Discover the meaning behind Frizendo
        </a>
      </div>
    </div>
  </section>
  <ServicesSection actionHref="/services" actionLabel="Explore Service" />
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
      <div className="row g-3 home-clients">
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
                USA
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
      <div className="see-more-wrap d-md-none">
        <a className="btn btn-primary rounded-pill py-3 px-5" href="/clients">
          See All Clients
        </a>
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
      <div className="row g-4 home-markets">
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
      <div className="see-more-wrap d-md-none">
        <a className="btn btn-primary rounded-pill py-3 px-5" href="/our-work">
          See More
        </a>
      </div>
    </div>
  </section>
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
              <h3 className="h5 mt-2">
                YouTube Analytics Growth</h3>
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
              <h3 className="h5 mt-2">
                Watch Time Growth</h3>
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
              <h3 className="h5 mt-2">
                Channel Performance</h3>
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
              <h3 className="h5 mt-2">
                Dr. Hadley Leatherman, MD</h3>
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
              <h3 className="h5 mt-2">
                Farasat Ali &amp; Nordex Hub</h3>
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
              <h3 className="h5 mt-2">
                Nordex Hub</h3>
              <p className="mb-0">
                Digital presence and brand presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-xxl py-5" id="home-faq">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          FAQs
        </p>
        <h2 className="display-6">
          Common questions about Frizendo.
        </h2>
        <p>
          Quick answers to what clients usually ask before getting started.
        </p>
      </div>
      <div className="accordion fr-faq mx-auto" id="homeFaqAccordion" style={{maxWidth: 900}}>
        {HOME_FAQS.map((faq, index) => (
          <div className="accordion-item mb-2 border rounded overflow-hidden" key={index}>
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-target={`#homeFaq${index}`}
                data-bs-toggle="collapse"
                type="button"
              >
                {faq.q}
              </button>
            </h3>
            <div
              className="accordion-collapse collapse"
              data-bs-parent="#homeFaqAccordion"
              id={`homeFaq${index}`}
            >
              <div className="accordion-body">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-wrap">
        <a className="btn btn-outline-primary rounded-pill py-3 px-5" href="/faq">
          See All FAQs
        </a>
      </div>
    </div>
  </section>
  <section className="container-xxl py-5">
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
  <ReviewCarousel />
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
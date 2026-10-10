import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Frizendo | Digital Marketing Agency in Gilgit, Pakistan | SEO, Ads & Social Media",
  description: "Frizendo is a digital marketing agency in Gilgit, Pakistan helping local and international brands grow through SEO, Meta Ads, Google Ads, LinkedIn Ads, social media, branding and web development.",
  keywords: ["best marketing agency in Gilgit","digital marketing agency Gilgit","SEO agency Gilgit","marketing agency in Pakistan","affordable digital marketing agency Pakistan","SEO services Pakistan","Meta Ads agency Pakistan","Google Ads agency Pakistan","LinkedIn Ads Pakistan","Frizendo","Amir Hassan Frizendo founder"],
  robots: {"index":true,"follow":true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1,"googleBot":{"index":true,"follow":true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  alternates: { canonical: "https://frizendo.com/" },
  openGraph: {"type":"website","siteName":"Frizendo","title":"Frizendo | Digital Marketing Agency in Gilgit, Pakistan","description":"SEO, paid ads, social media, branding and web development for local and international brands.","url":"https://frizendo.com/","images":["https://frizendo.com/assets/frizendo-logo.png"]},
  twitter: {"card":"summary_large_image","title":"Frizendo | Digital Marketing Agency in Gilgit, Pakistan","description":"Performance-focused digital marketing for local and international brands.","images":["https://frizendo.com/assets/frizendo-logo.png"]},
  authors: [{"name":"Amir Hassan, Frizendo"}],
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\r\n   {\r\n \"@context\":\"https://schema.org\",\r\n \"@graph\":[\r\n  {\r\n   \"@type\":\"ProfessionalService\",\r\n   \"@id\":\"https://frizendo.com/#business\",\r\n   \"name\":\"Frizendo\",\r\n   \"url\":\"https://frizendo.com/\",\r\n   \"logo\":\"https://frizendo.com/assets/frizendo-logo.png\",\r\n   \"image\":\"https://frizendo.com/assets/frizendo-logo.png\",\r\n   \"description\":\"Digital marketing agency serving Gilgit, Pakistan and international clients with SEO, Meta Ads, Google Ads, LinkedIn Ads, social media marketing, branding and web development.\",\r\n   \"founder\":{\"@type\":\"Person\",\"name\":\"Amir Hassan\"},\r\n   \"employee\":[{\"@type\":\"Person\",\"name\":\"Yasir Rahim\",\"jobTitle\":\"Co-Founder\"}],\r\n   \"areaServed\":[\"Gilgit, Pakistan\",\"Pakistan\",\"United Kingdom\",\"United States\",\"Australia\",\"Hungary\",\"Worldwide\"],\r\n   \"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Gilgit\",\"addressRegion\":\"Gilgit-Baltistan\",\"addressCountry\":\"PK\"},\r\n   \"email\":\"frizendo.com@gmail.com\",\r\n   \"telephone\":\"+923498901846\",\r\n   \"priceRange\":\"$$\",\r\n   \"serviceType\":[\"SEO\",\"Digital Marketing\",\"Meta Ads\",\"Google Ads\",\"LinkedIn Ads\",\"Social Media Management\",\"Branding\",\"Web Development\"]\r\n  },\r\n  {\r\n   \"@type\":\"WebSite\",\r\n   \"@id\":\"https://frizendo.com/#website\",\r\n   \"url\":\"https://frizendo.com/\",\r\n   \"name\":\"Frizendo\",\r\n   \"publisher\":{\"@id\":\"https://frizendo.com/#business\"},\r\n   \"inLanguage\":\"en\"\r\n  },\r\n  {\r\n   \"@type\":\"Person\",\r\n   \"@id\":\"https://frizendo.com/#amir-hassan\",\r\n   \"name\":\"Amir Hassan\",\r\n   \"jobTitle\":\"Founder\",\r\n   \"worksFor\":{\"@id\":\"https://frizendo.com/#business\"}\r\n  },\r\n  {\r\n   \"@type\":\"Person\",\r\n   \"@id\":\"https://frizendo.com/#yasir-rahim\",\r\n   \"name\":\"Yasir Rahim\",\r\n   \"jobTitle\":\"Co-Founder\",\r\n   \"worksFor\":{\"@id\":\"https://frizendo.com/#business\"}\r\n  }\r\n ]\r\n}\r\n  " }} />
      <section className="container-fluid px-0 mb-5 hero-frizendo" id="home">
    <h1 className="visually-hidden">
      Frizendo — Digital Marketing Agency in Gilgit, Pakistan
    </h1>
    <div className="carousel slide" data-bs-interval={3000} data-bs-ride="carousel" id="header-carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img alt="Digital marketing strategy and growth" className="w-100 hero-img" src="/img/clients-img/hero-background.jpg" />
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
          <img alt="Performance marketing campaigns" className="w-100 hero-img" src="/img/clients-img/hero-backround%202.jpg" />
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
          <img alt="Frizendo digital marketing agency team" className="img-fluid fr-rounded" src="/img/clients-img/Frizendo%20about.png" />
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
            <h3 className="h4">
              Search Engine Optimization (SEO)</h3>
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
            <h3 className="h4">
              Google Ads</h3>
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
            <h3 className="h4">
              Meta Ads</h3>
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
            <h3 className="h4">
              LinkedIn Ads &amp; B2B</h3>
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
            <h3 className="h4">
              Social Media Management</h3>
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
            <h3 className="h4">
              Branding &amp; Web</h3>
            <p className="mb-0">
              Strengthen your digital presence with branding, personal positioning and website solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
                USA
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
      <div className="see-more-wrap d-md-none">
        <a className="btn btn-primary rounded-pill py-3 px-5" href="/our-work">
          See More Markets
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
              <img alt="YouTube analytics showing 38.5K views from a Frizendo-managed project" src="/assets/project-1.png" />
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
              <img alt="YouTube watch time showing 48.4 hours and strong growth" src="/assets/project-2.png" />
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
              <img alt="YouTube analytics showing 414.7K views, 720.5 watch hours and subscriber growth" src="/assets/project-4.png" />
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
              <img alt="Before and after social media setup for Dr. Hadley Leatherman" src="/assets/dr-hadley-before-after.png" />
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
              <img alt="Professional branding and digital presence work" src="/assets/farasat-nordex.png" />
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
              <img alt="Nordex Hub digital profile and branding work" src="/assets/nordex-hub.png" />
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
      </div>
      <div className="see-more-wrap">
        <a className="btn btn-primary rounded-pill py-3 px-5" href="/results">
          See More Results
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
  <section className="container-xxl py-5 bg-light" id="reviews">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 760}}>
        <p className="section-kicker">
          Reviews
        </p>
        <h2 className="display-6">
          What clients say.
        </h2>
        <p>
          Selected client feedback from Frizendo projects.
        </p>
      </div>
      <div className="review-viewport">
        <div className="review-track">
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo set up and managed my Google Ads campaign professionally. Great communication, timely delivery, and quality work.”
              </p>
              <small>
                Google Ads Client · Upwork
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo did an excellent job setting up and optimizing all my social media accounts. Everything was handled professionally.”
              </p>
              <small>
                Client from Hungary · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Great experience working with Frizendo. The communication was clear, the work was delivered on time, and everything was set up properly.”
              </p>
              <small>
                Client from Hungary · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo created some awesome thumbnails that were visually appealing with a very quick turnaround.”
              </p>
              <small>
                Repeat Client, Australia · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “1000% recommend. Very fast delivery. Works well. Professional work.”
              </p>
              <small>
                Repeat Client, United States · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo did an excellent job optimizing my LinkedIn profile. Everything looks professional, well-structured, and aligned with personal branding.”
              </p>
              <small>
                Client, United States · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo set up and managed my Google Ads campaign professionally. Great communication, timely delivery, and quality work.”
              </p>
              <small>
                Google Ads Client · Upwork
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo did an excellent job setting up and optimizing all my social media accounts. Everything was handled professionally.”
              </p>
              <small>
                Client from Hungary · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Great experience working with Frizendo. The communication was clear, the work was delivered on time, and everything was set up properly.”
              </p>
              <small>
                Client from Hungary · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo created some awesome thumbnails that were visually appealing with a very quick turnaround.”
              </p>
              <small>
                Repeat Client, Australia · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “1000% recommend. Very fast delivery. Works well. Professional work.”
              </p>
              <small>
                Repeat Client, United States · Fiverr
              </small>
            </div>
          </div>
          <div className="review-item">
            <div className="fr-testimonial">
              <div className="stars">
                ★★★★★
              </div>
              <p>
                “Frizendo did an excellent job optimizing my LinkedIn profile. Everything looks professional, well-structured, and aligned with personal branding.”
              </p>
              <small>
                Client, United States · Fiverr
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
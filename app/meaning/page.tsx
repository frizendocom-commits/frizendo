import type { Metadata } from "next";
import type { Viewport } from "next";
import Link from "next/link";
import "./meaning.css";

const PAGE_URL = "https://frizendo.com/meaning";
const ORG_ID = "https://frizendo.com/#organization";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Frizendo Meaning: Fresh Ideas, Real Results",
  description:
    "Discover what Frizendo means: Fresh Ideas, Real Results. Learn how FRIZ stands for Fresh Ideas, EN for Energy, and DO for Deliver Outcomes.",
  keywords: [
    "Frizendo meaning",
    "what does Frizendo stand for",
    "Frizendo full form",
    "FRIZ EN DO meaning",
    "Fresh Ideas Real Results",
    "Frizendo brand philosophy",
    "meaning of Frizendo name",
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
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Frizendo",
    title: "Frizendo Meaning: Fresh Ideas, Real Results",
    description:
      "What Frizendo means: FRIZ for Fresh Ideas, EN for Energy and DO for Deliver Outcomes — the brand philosophy behind Fresh Ideas, Real Results.",
    url: PAGE_URL,
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
    title: "Frizendo Meaning: Fresh Ideas, Real Results",
    description:
      "What Frizendo means: FRIZ for Fresh Ideas, EN for Energy and DO for Deliver Outcomes.",
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

const FAQS = [
  {
    q: "What does Frizendo mean?",
    a: "Frizendo means Fresh Ideas, Real Results. The name combines three principles: FRIZ for Fresh Ideas, EN for Energy and DO for Deliver Outcomes.",
  },
  {
    q: "What does FRIZENDO stand for?",
    a: "FRIZENDO stands for Fresh Ideas, Real Results. FRIZ represents Fresh Ideas, EN represents Energy, and DO represents Deliver Outcomes.",
  },
  {
    q: "What does FRIZ mean in Frizendo?",
    a: "FRIZ means Fresh Ideas. It stands for new ideas, creative thinking, innovative strategies and a different approach to solving business challenges.",
  },
  {
    q: "What does EN mean in Frizendo?",
    a: "EN means Energy. It stands for passion, motivation, dedication and giving every project the best possible effort.",
  },
  {
    q: "What does DO mean in Frizendo?",
    a: "DO means Deliver Outcomes. It stands for turning strategies into action and focusing on measurable business results.",
  },
  {
    q: "What is the Frizendo brand philosophy?",
    a: "The Frizendo brand philosophy is Fresh Ideas, Real Results — creative thinking, passionate execution and measurable business outcomes.",
  },
  {
    q: "What does Fresh Ideas, Real Results mean?",
    a: "Fresh Ideas, Real Results means Frizendo pairs new, creative thinking with a focus on delivering measurable business outcomes, instead of treating marketing as routine activity.",
  },
  {
    q: "What is Frizendo?",
    a: "Frizendo is a digital marketing agency based in Gilgit, Pakistan, offering SEO, paid advertising, social media marketing, branding and web solutions to local and international clients.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Frizendo Meaning: Fresh Ideas, Real Results",
      description:
        "Frizendo stands for Fresh Ideas, Real Results. FRIZ means Fresh Ideas, EN means Energy, and DO means Deliver Outcomes.",
      isPartOf: { "@id": "https://frizendo.com/#website" },
      about: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntity: { "@id": `${PAGE_URL}#term-frizendo` },
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${PAGE_URL}#brand-terms`,
      name: "Frizendo Brand Meaning",
      description:
        "The official meaning of the Frizendo brand name and the three principles it is built from.",
      url: PAGE_URL,
      hasDefinedTerm: [
        { "@id": `${PAGE_URL}#term-frizendo` },
        { "@id": `${PAGE_URL}#term-friz` },
        { "@id": `${PAGE_URL}#term-en` },
        { "@id": `${PAGE_URL}#term-do` },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#term-frizendo`,
      name: "Frizendo",
      termCode: "FRIZENDO",
      description:
        "Frizendo stands for Fresh Ideas, Real Results. FRIZ represents Fresh Ideas, EN represents Energy, and DO represents Deliver Outcomes.",
      inDefinedTermSet: { "@id": `${PAGE_URL}#brand-terms` },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#term-friz`,
      name: "FRIZ",
      termCode: "FRIZ",
      description:
        "FRIZ stands for Fresh Ideas: new ideas, creative thinking, innovative strategies and a different approach to solving business challenges.",
      inDefinedTermSet: { "@id": `${PAGE_URL}#brand-terms` },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#term-en`,
      name: "EN",
      termCode: "EN",
      description:
        "EN stands for Energy: passion, motivation, dedication and giving every project the best possible effort.",
      inDefinedTermSet: { "@id": `${PAGE_URL}#brand-terms` },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#term-do`,
      name: "DO",
      termCode: "DO",
      description:
        "DO stands for Deliver Outcomes: turning strategies into action and focusing on measurable business results.",
      inDefinedTermSet: { "@id": `${PAGE_URL}#brand-terms` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "Brand Meaning",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

const PRINCIPLES = [
  {
    tag: "FRIZ",
    title: "Fresh Ideas",
    body: "New ideas, creative thinking and a different approach to solving business challenges.",
    sub: "Creative thinking · New perspectives · Innovative strategies",
  },
  {
    tag: "EN",
    title: "Energy",
    body: "Passion, motivation and dedicated execution on every project we take on.",
    sub: "Passion · Motivation · Best effort",
  },
  {
    tag: "DO",
    title: "Deliver Outcomes",
    body: "Turning strategies into action and focusing on measurable business results.",
    sub: "Action · Accountability · Measurable results",
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

      <section className="meaning-hero">
        <div className="container">
          <p className="meaning-kicker">Brand Meaning</p>
          <h1>What Does Frizendo Mean?</h1>
          <p className="meaning-answer">
            Frizendo stands for Fresh Ideas, Real Results. FRIZ means Fresh
            Ideas, EN means Energy, and DO means Deliver Outcomes. The name
            expresses a brand philosophy focused on creative thinking,
            passionate execution, and measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="meaning-section" id="what-does-frizendo-stand-for">
        <div className="container">
          <p className="section-kicker">The Name</p>
          <h2 className="display-6 mb-4">What Does FRIZENDO Stand For?</h2>
          <p className="meaning-lead">
            FRIZENDO stands for <strong>Fresh Ideas, Real Results</strong>. The
            name is built from three short parts, and each part carries one
            principle of the brand: <strong>FRIZ</strong> for Fresh Ideas,{" "}
            <strong>EN</strong> for Energy, and <strong>DO</strong> for Deliver
            Outcomes.
          </p>
          <p className="meaning-lead">
            Together, the three principles describe how Frizendo approaches
            work: think freshly, work energetically, and measure what was
            delivered.
          </p>

          <div className="official-definition">
            <p className="mb-0">
              &ldquo;Frizendo stands for Fresh Ideas, Real Results. FRIZ
              represents Fresh Ideas, EN represents Energy, and DO represents
              Deliver Outcomes. Together, these principles reflect
              Frizendo&rsquo;s approach to creative thinking, passionate
              execution, and measurable business outcomes.&rdquo;
            </p>
            <cite>The official Frizendo brand definition</cite>
          </div>

          <div className="row g-4 mt-2">
            {PRINCIPLES.map((item) => (
              <div className="col-md-4" key={item.tag}>
                <div className="principle-card">
                  <span className="principle-tag">{item.tag}</span>
                  <h3 className="h4">{item.title}</h3>
                  <p>{item.body}</p>
                  <p className="principle-sub">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="meaning-section bg-light" id="friz-fresh-ideas">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="meaning-detail">
                <span className="meaning-detail-label">FRIZ</span>
                <h2 className="h4">FRIZ — Fresh Ideas</h2>
                <p className="mb-0">
                  FRIZ stands for Fresh Ideas: new ideas, creative thinking,
                  innovative strategies and a different approach to solving
                  business challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meaning-detail">
                <span className="meaning-detail-label">EN</span>
                <h2 className="h4">EN — Energy</h2>
                <p className="mb-0">
                  EN stands for Energy: passion, motivation, dedication, and
                  giving every project our best effort from start to finish.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="meaning-detail">
                <span className="meaning-detail-label">DO</span>
                <h2 className="h4">DO — Deliver Outcomes</h2>
                <p className="mb-0">
                  DO stands for Deliver Outcomes: turning strategies into action
                  and focusing on measurable business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meaning-section" id="why-fresh-ideas-real-results">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <p className="section-kicker">The Philosophy</p>
              <h2 className="display-6 mb-4">
                Why Fresh Ideas, Real Results?
              </h2>
              <p>
                Fresh ideas on their own are only concepts. Results without new
                thinking are usually the same activity repeated. The phrase
                Fresh Ideas, Real Results joins the two: creative work that is
                expected to end in something measurable.
              </p>
              <p className="mb-0">
                That is why the name matters to clients. It states what the
                agency is trying to do on every project — bring a fresh
                perspective to the problem, put real energy into the work, and
                deliver an outcome that can be checked against the goals that
                were agreed at the start.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="meaning-detail">
                <h3 className="h5 text-primary">
                  What the three principles mean in practice
                </h3>
                <ul className="meaning-list mb-0">
                  <li>
                    Fresh Ideas means the strategy is built for your market,
                    not copied from a template.
                  </li>
                  <li>
                    Energy means the work is executed with attention, momentum
                    and clear communication.
                  </li>
                  <li>
                    Deliver Outcomes means progress is measured against real
                    business results such as visibility, leads and enquiries.
                  </li>
                  <li>
                    Real Results means honest reporting — including what did
                    not work and what changes next.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="meaning-section bg-light"
        id="how-frizendo-applies-these-principles"
      >
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
            <p className="section-kicker">In Practice</p>
            <h2 className="display-6">
              How Frizendo Applies These Principles to Marketing
            </h2>
            <p className="mb-0">
              The brand meaning is not a slogan on its own — it shapes how the
              agency plans and runs marketing work.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="meaning-detail">
                <h3 className="h5">Fresh Ideas shape the strategy</h3>
                <p className="mb-0">
                  Every project starts with the business goal, the market and
                  the audience. SEO, paid advertising, social media and
                  branding are planned around what is genuinely different and
                  useful about the business — not a standard package applied to
                  everyone.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meaning-detail">
                <h3 className="h5">Energy drives the execution</h3>
                <p className="mb-0">
                  Campaigns, content and website work are produced with focus
                  and steady communication, so projects keep moving and clients
                  always know where things stand.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meaning-detail">
                <h3 className="h5">Deliver Outcomes keeps the focus on results</h3>
                <p className="mb-0">
                  Work is reviewed against the outcomes that were agreed —
                  search visibility, qualified traffic, leads and enquiries —
                  rather than against the volume of activity produced.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="meaning-detail">
                <h3 className="h5">Real Results build long-term trust</h3>
                <p className="mb-0">
                  Reporting stays honest and specific. Clear expectations and
                  measurable progress are what turn a first project into an
                  ongoing working relationship.
                </p>
              </div>
            </div>
          </div>

          <div className="meaning-links justify-content-center">
            <Link className="btn btn-primary rounded-pill py-3 px-5" href="/services">
              Explore Marketing Services
            </Link>
            <Link
              className="btn btn-outline-dark rounded-pill py-3 px-5"
              href="/about"
            >
              About Frizendo
            </Link>
          </div>
        </div>
      </section>

      <section className="meaning-section" id="frizendo-faq">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 760 }}>
            <p className="section-kicker">FAQ</p>
            <h2 className="display-6">
              Frequently Asked Questions About Frizendo
            </h2>
            <p className="mb-0">
              Direct answers to the questions people ask about the Frizendo
              name and brand meaning.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQS.map((faq) => (
              <div className="meaning-faq-item" key={faq.q}>
                <h3 className="h5">{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="meaning-section bg-light" id="meaning-links">
        <div className="container text-center">
          <div className="mx-auto" style={{ maxWidth: 760 }}>
            <p className="section-kicker">Fresh Ideas, Real Results</p>
            <h2 className="display-6">
              The meaning behind Frizendo, applied to your marketing
            </h2>
            <p className="mb-0">
              Frizendo is a digital marketing agency in Gilgit, Pakistan,
              working with local and international brands. If you want fresh
              thinking backed by measurable outcomes, start from the{" "}
              <Link href="/">homepage</Link> or explore the{" "}
              <Link href="/services">marketing services</Link> the agency
              offers.
            </p>
            <div className="meaning-links justify-content-center">
              <Link className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Frizendo Homepage
              </Link>
              <Link
                className="btn btn-outline-dark rounded-pill py-3 px-5"
                href="/services"
              >
                Marketing Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

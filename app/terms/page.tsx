import type { Metadata } from "next";
import type { Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Terms of Service | Frizendo",
  description:
    "Terms of service for Frizendo, a digital marketing agency in Gilgit, Pakistan: scope of work, client responsibilities, fees, ad spend, intellectual property, liability and governing law.",
  alternates: { canonical: "https://frizendo.com/terms.html" },
  openGraph: {"url":"https://frizendo.com/terms.html","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

type Term = {
  n: string;
  title: string;
  body?: string;
  bullets?: string[];
};

const TERMS: Term[] = [
  {
    n: "01",
    title: "Acceptance",
    body: "By using frizendo.com or hiring Frizendo (\"we\", \"us\"), a digital marketing agency in Gilgit, Pakistan, you agree to these Terms. If you do not agree, please do not use our Website or services.",
  },
  {
    n: "02",
    title: "Our Services",
    body: "We provide SEO, paid advertising (Google, Meta, LinkedIn), social media management, content, branding, web development and related marketing services. The exact deliverables, timeline and fees for each project are set out in a written proposal, quotation or invoice that you accept (the \"Agreed Scope\"). Work outside the Agreed Scope is quoted separately.",
  },
  {
    n: "03",
    title: "Client Responsibilities",
    body: "You agree to provide accurate information, content, approvals and account access on time, and to have the right to use all materials you give us. Your products, offers and claims must be lawful and follow platform advertising policies. Delays on your side may delay delivery.",
  },
  {
    n: "04",
    title: "Fees and Payment",
    body: "Fees are stated in the Agreed Scope. Unless agreed otherwise, projects require an advance payment before work starts, and monthly services are billed in advance. You cover bank and transfer fees and any taxes. We may pause work on overdue invoices. For orders placed through Upwork or Fiverr, that platform's payment rules also apply.",
  },
  {
    n: "05",
    title: "Ad Spend and Third-Party Platforms",
    body: "Ad budgets are paid by you directly to the platform and are not part of our fees. We do not control platform decisions, such as ad approvals, pricing, algorithm changes or account suspensions, and we are not responsible for them.",
  },
  {
    n: "06",
    title: "No Guarantee of Results",
    body: "We work with care and professional skill, but we do not guarantee any specific ranking, traffic, followers, views, leads, sales or return on ad spend. Results and reviews shown on our Website are past examples and do not promise the same outcome for you.",
  },
  {
    n: "07",
    title: "Revisions and Delivery",
    body: "Delivery dates are estimates and depend on your timely input. The Agreed Scope states the number of revisions included; extra revisions may be charged. Please report any problem with a deliverable within 7 days of delivery.",
  },
  {
    n: "08",
    title: "Intellectual Property and Portfolio",
    body: "You keep ownership of the materials you give us. Once you have paid in full, you own the final deliverables created for you. We keep our tools, templates and methods. Unless you tell us otherwise in writing, we may show your name, logo and the public results of our work in our portfolio. You can ask us to remove them at any time.",
  },
  {
    n: "09",
    title: "Confidentiality",
    body: "Both parties will keep the other's non-public business information confidential and use it only for the project, except where disclosure is required by law.",
  },
  {
    n: "10",
    title: "Cancellation and Refunds",
    bullets: [
      "Monthly services: cancel with 14 days' written notice. Fees for the current billing period are not refunded.",
      "One-time projects: if you cancel before work starts, we refund the advance minus costs already paid. After work starts, you pay for the work completed.",
      "Non-refundable: delivered work, ad spend and third-party costs (domains, hosting, tools).",
    ],
  },
  {
    n: "11",
    title: "Limitation of Liability",
    body: "Our Website and services are provided \"as is\". To the fullest extent allowed by law, we are not liable for indirect or consequential losses, such as lost profit or revenue. Our total liability is limited to the fees you paid for the affected service in the previous 3 months.",
  },
  {
    n: "12",
    title: "Governing Law",
    body: "These Terms are governed by the laws of Pakistan. We will first try to resolve any dispute in good faith. If that fails, the courts of Gilgit, Gilgit-Baltistan have jurisdiction.",
  },
  {
    n: "13",
    title: "Changes and Contact",
    body: "We may update these Terms by posting a new version on this page. Questions: frizendo.com@gmail.com or +92 349 8901846.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://frizendo.com/terms#page",
      url: "https://frizendo.com/terms",
      name: "Terms of Service | Frizendo",
      description:
        "Terms of service for Frizendo, a digital marketing agency in Gilgit, Pakistan.",
      isPartOf: { "@id": "https://frizendo.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://frizendo.com/terms#breadcrumb",
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
          name: "Terms of Service",
          item: "https://frizendo.com/terms",
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
      <section className="container-xxl py-5 legal-page" id="terms">
        <div className="container">
          <div className="text-center mx-auto legal-head">
            <p className="section-kicker">Legal</p>
            <h2 className="display-6">Terms of Service.</h2>
            <p className="legal-lead">
              These Terms apply to your use of frizendo.com and to any digital
              marketing services you hire from Frizendo in Gilgit, Pakistan.
            </p>
          </div>

          <div className="legal-wrap">
            {TERMS.map((term) => (
              <article className="legal-card" key={term.n}>
                <div className="legal-card-head">
                  <span className="legal-num" aria-hidden="true">
                    {term.n}
                  </span>
                  <h3>{term.title}</h3>
                </div>
                {term.body ? <p>{term.body}</p> : null}
                {term.bullets ? (
                  <ul>
                    {term.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}

            <p className="legal-contact">
              Questions about these Terms?{" "}
              <Link href="/contact">Contact Frizendo</Link> or email{" "}
              <a href="mailto:frizendo.com@gmail.com">frizendo.com@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="footer-cta">
        <div className="footer-cta-content">
          <div>
            <span className="cta-label">LET'S WORK TOGETHER</span>
            <h2>Ready to grow your brand?</h2>
            <p>
              Let&apos;s build a digital strategy that turns your ideas
              into measurable results.
            </p>
          </div>
          <Link href="/contact" className="cta-button">
            Let&apos;s Talk
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

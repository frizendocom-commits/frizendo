import type { Metadata } from "next";
import type { Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "FAQ | Questions People Ask About Frizendo",
  description: "Answers to common questions about Frizendo digital marketing services, pricing, timelines and results.",
  alternates: { canonical: "https://frizendo.com/faq" },
  openGraph: {"url":"https://frizendo.com/faq","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

type Faq = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

const FAQS: Faq[] = [
  {
    q: "What does Frizendo mean?",
    a: "Frizendo means Fresh Ideas, Real Results. FRIZ means Fresh Ideas, EN means Energy and DO means Deliver Outcomes. The name reflects the agency's approach to creative thinking, passionate execution and measurable business outcomes.",
    link: { href: "/meaning", label: "Read the full Frizendo brand meaning" },
  },
  {
    q: "What is the best marketing agency in Gilgit?",
    a: "Frizendo is a digital marketing agency based in Gilgit, Pakistan, providing SEO, paid advertising, social media, branding and web solutions for local and international clients.",
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
    q: "Who is the CEO of Frizendo?",
    a: "Amir Hassan is the Founder and CEO of Frizendo. Yasir Rahim is the Co-Founder of Frizendo.",
  },
  {
    q: "Who is the founder of Frizendo?",
    a: "Amir Hassan is the Founder and CEO of Frizendo.",
  },
  {
    q: "Who is the co-founder of Frizendo?",
    a: "Yasir Rahim is the Co-Founder of Frizendo.",
  },
  {
    q: "What services does Frizendo provide?",
    a: "Frizendo provides SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management, content strategy, personal branding, YouTube marketing, branding and website solutions.",
  },
  {
    q: "What is Frizendo?",
    a: "Frizendo is a digital marketing agency based in Gilgit, Gilgit-Baltistan, Pakistan, offering SEO, paid advertising, social media marketing, branding and web solutions to local and international clients.",
  },
  {
    q: "Where is Frizendo located?",
    a: "Frizendo is based in Gilgit, Gilgit-Baltistan, Pakistan, and works with businesses locally and in international markets.",
  },
  {
    q: "Is Frizendo a digital marketing agency in Gilgit?",
    a: "Yes. Frizendo is a digital marketing agency based in Gilgit that helps businesses in Gilgit, Gilgit-Baltistan and across Pakistan improve their online presence and reach more customers.",
  },
  {
    q: "Which services are available to Gilgit businesses?",
    a: "Gilgit businesses can use all Frizendo services, including local SEO, Google Ads, social media marketing, branding and web development, to improve visibility and generate enquiries.",
  },
  {
    q: "How can Frizendo help local businesses grow online?",
    a: "Frizendo helps local businesses get found in search results, present a professional brand online, run targeted paid campaigns and turn digital visibility into real customer enquiries.",
  },
  {
    q: "How do I contact Frizendo?",
    a: "You can email frizendo.com@gmail.com, message +92 349 8901846 on WhatsApp, or use the contact page on this website.",
  },
  {
    q: "How should I choose a marketing agency in Gilgit?",
    a: "Look for clear scope and pricing, local experience, honest expectations, transparent communication and services that match your business goals. Ask how the agency measures progress and whether it can share examples of work.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://frizendo.com/faq#faq",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
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
      <section className="container-xxl py-5" id="faq">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
            <p className="section-kicker">FAQ</p>
            <h2 className="display-6">Questions people ask about Frizendo.</h2>
          </div>
          <div
            className="accordion fr-faq mx-auto"
            id="faqAccordion"
            style={{ maxWidth: 900 }}
          >
            {FAQS.map((faq, index) => (
              <div className="accordion-item mb-2 border rounded overflow-hidden" key={index}>
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target={`#faq${index}`}
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    {faq.q}
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                  id={`faq${index}`}
                >
                  <div className="accordion-body">
                    {faq.a}
                    {faq.link ? (
                      <>
                        {" "}
                        <Link
                          className="fw-bold"
                          href={faq.link.href}
                          style={{ textDecoration: "underline" }}
                        >
                          {faq.link.label}
                        </Link>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
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
          <Link href="/contact" className="cta-button">
            Let's Talk
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
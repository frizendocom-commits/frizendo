import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "FAQ | Questions People Ask About Frizendo",
  description: "Answers to common questions about Frizendo digital marketing services, pricing, timelines and results.",
  alternates: { canonical: "https://frizendo.com/faq.html" },
  openGraph: {"url":"https://frizendo.com/faq.html","images":["https://frizendo.com/assets/frizendo-logo.png"]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
      <section className="container-xxl py-5" id="faq">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 800}}>
        <p className="section-kicker">
          FAQ
        </p>
        <h2 className="display-6">
          Questions people ask about Frizendo.
        </h2>
      </div>
      <div className="accordion fr-faq mx-auto" id="faqAccordion" style={{maxWidth: 900}}>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq0" data-bs-toggle="collapse" type="button">
              What is the best marketing agency in Gilgit?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq0">
            <div className="accordion-body">
              Frizendo is a digital marketing agency based in Gilgit, Pakistan, providing SEO, paid advertising, social media, branding and web solutions for local and international clients.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq1" data-bs-toggle="collapse" type="button">
              Does Frizendo provide SEO services in Gilgit?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq1">
            <div className="accordion-body">
              Yes. Frizendo provides SEO and local SEO strategies designed to improve search visibility, organic traffic and digital presence for businesses in Gilgit and beyond.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq2" data-bs-toggle="collapse" type="button">
              Does Frizendo work with international clients?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq2">
            <div className="accordion-body">
              Yes. Frizendo has worked on projects and campaigns for clients and brands across the United Kingdom, Hungary, the United States, Australia and other international markets.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq3" data-bs-toggle="collapse" type="button">
              Does Frizendo offer affordable digital marketing services in Pakistan?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq3">
            <div className="accordion-body">
              Frizendo offers practical digital marketing solutions for different business needs and budgets. Contact the team for a project-specific scope and quotation.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq4" data-bs-toggle="collapse" type="button">
              Who is the founder of Frizendo?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq4">
            <div className="accordion-body">
              Amir Hassan is the founder of Frizendo.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq5" data-bs-toggle="collapse" type="button">
              Who is the co-founder of Frizendo?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq5">
            <div className="accordion-body">
              Yasir Rahim is the co-founder of Frizendo.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2 border rounded overflow-hidden">
          <h3 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-target="#faq6" data-bs-toggle="collapse" type="button">
              What services does Frizendo provide?
            </button>
          </h3>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion" id="faq6">
            <div className="accordion-body">
              Frizendo provides SEO, Google Ads, Meta Ads, LinkedIn Ads, social media management, content strategy, personal branding, YouTube marketing, branding and website solutions.
            </div>
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
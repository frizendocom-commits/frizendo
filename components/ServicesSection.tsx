import Link from "next/link";

type Service = {
  icon: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: "fas fa-search",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve organic visibility, search rankings and qualified traffic with practical SEO strategies.",
  },
  {
    icon: "fab fa-google",
    title: "Google Ads",
    description:
      "Build and optimize Google Ads campaigns focused on qualified traffic, leads and conversions.",
  },
  {
    icon: "fab fa-facebook-f",
    title: "Meta Ads",
    description:
      "Reach the right audiences through Facebook and Instagram advertising with measurable campaign goals.",
  },
  {
    icon: "fab fa-linkedin-in",
    title: "LinkedIn Ads & B2B",
    description:
      "Support B2B growth with LinkedIn advertising, content strategy, targeting and lead generation.",
  },
  {
    icon: "fas fa-share-alt",
    title: "Social Media Management",
    description:
      "Manage social channels with consistent content, audience engagement and professional brand communication.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Branding & Web",
    description:
      "Strengthen your digital presence with branding, personal positioning and website solutions.",
  },
];

type ServicesSectionProps = {
  actionHref: string;
  actionLabel: string;
};

export default function ServicesSection({
  actionHref,
  actionLabel,
}: ServicesSectionProps) {
  return (
    <section className="container-xxl py-5 bg-light svc-section" id="services">
      <div className="container">
        <div className="text-center mx-auto svc-head">
          <p className="section-kicker">Services</p>
          <h2 className="display-6">
            Everything your brand needs to get noticed.
          </h2>
          <p className="svc-lead">
            From search and paid acquisition to social media, branding and web
            presence, Frizendo brings core digital growth services together.
          </p>
        </div>

        <div className="row g-4 svc-grid">
          {SERVICES.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.title}>
              <article className="svc-card">
                <div className="svc-card-head">
                  <span className="svc-icon">
                    <i className={service.icon} aria-hidden="true" />
                  </span>
                  <span className="svc-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="svc-title">{service.title}</h3>

                <p className="svc-desc">{service.description}</p>

                <Link className="svc-link" href={actionHref}>
                  {actionLabel}
                  <span className="svc-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

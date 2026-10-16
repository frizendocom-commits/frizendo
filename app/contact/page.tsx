import type { Metadata } from "next";
import type { Viewport } from "next";
import ContactBriefForm from "@/components/ContactBriefForm";
import "./contact.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Contact Frizendo | Digital Marketing Agency in Gilgit, Pakistan",
  description:
    "Send Frizendo a project brief on WhatsApp, email us or connect on LinkedIn, Instagram and Facebook — digital marketing agency in Gilgit, Pakistan.",
  alternates: { canonical: "https://frizendo.com/contact.html" },
  openGraph: {"url":"https://frizendo.com/contact.html","images":[{"url":"/img/clients-img/Frizendo-logo.png","width":500,"height":500,"alt":"Frizendo","type":"image/png"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const SOCIALS = [
  {
    name: "LinkedIn",
    handle: "linkedin.com/company/frizendo",
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/company/frizendo/home",
  },
  {
    name: "Instagram",
    handle: "/frizendo",
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/frizendo/",
  },
  {
    name: "WhatsApp",
    handle: "+92 349 8901846",
    icon: "fab fa-whatsapp",
    href: "https://wa.me/923498901846",
  },
  {
    name: "Facebook",
    handle: "/frizendo",
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/frizendo",
  },
];

export default function Page() {
  return (
    <section className="container-xxl py-5 contact-brief" id="contact">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <ContactBriefForm />
          </div>
          <div className="col-lg-5">
            <div className="connect-card">
              <h2 className="connect-title">Let&apos;s connect</h2>
              <p className="connect-sub">
                Reach out directly or follow our updates:
              </p>
              <ul className="connect-list">
                {SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a
                      className="connect-item"
                      href={social.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span aria-hidden="true" className="connect-icon">
                        <i className={social.icon} />
                      </span>
                      <span>
                        <span className="connect-name">{social.name}</span>
                        <span className="connect-handle">{social.handle}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

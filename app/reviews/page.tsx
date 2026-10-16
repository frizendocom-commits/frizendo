import type { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
  title: "Client Reviews & Testimonials | Frizendo",
  description: "What clients say about working with Frizendo on SEO, paid ads, social media and branding projects.",
  alternates: { canonical: "https://frizendo.com/reviews.html" },
  openGraph: {"url":"https://frizendo.com/reviews.html","images":[{"url":"/img/og/frizendo-og.jpg","secureUrl":"https://frizendo.com/img/og/frizendo-og.jpg","width":1200,"height":630,"alt":"Frizendo - Digital Marketing Agency in Gilgit, Pakistan","type":"image/jpeg"}]},
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  return (
    <>
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
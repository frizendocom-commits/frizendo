import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link className="footer-logo" href="/">
            <img alt="Frizendo digital marketing agency logo" src="/assets/frizendo-logo.png" />
            <span>Frizendo</span>
          </Link>

          <p className="footer-description">
            Digital marketing agency in Gilgit, Pakistan helping
            local and international brands grow through SEO,
            paid ads, social media, branding and web solutions.
          </p>

          <div className="footer-tags">
            <span>SEO</span>
            <span>Paid Ads</span>
            <span>Social Media</span>
            <span>Web Solutions</span>
          </div>

          <div className="footer-socials">
            <a href="https://www.facebook.com/frizendo" rel="noopener" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/frizendo/" rel="noopener" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/frizendo/home" rel="noopener" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://wa.me/923498901846" rel="noopener" target="_blank" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/meaning">Brand Meaning</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <Link href="/services">SEO</Link>
            </li>
            <li>
              <Link href="/services">Paid Advertising</Link>
            </li>
            <li>
              <Link href="/services">Social Media Marketing</Link>
            </li>
            <li>
              <Link href="/services">Branding</Link>
            </li>
            <li>
              <Link href="/services">Web Solutions</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <a
            className="contact-item"
            href="https://www.google.com/maps/search/?api=1&amp;query=Gilgit%2C%20Gilgit-Baltistan%2C%20Pakistan"
            rel="noopener"
            target="_blank"
          >
            <i className="fas fa-map-marker-alt" />
            <span>
              Gilgit, Gilgit-Baltistan,
              <br />
              Pakistan
            </span>
          </a>

          <a className="contact-item" href="mailto:frizendo.com@gmail.com">
            <i className="fas fa-envelope" />
            <span>frizendo.com@gmail.com</span>
          </a>

          <a className="contact-item" href="tel:+923498901846">
            <i className="fas fa-phone" />
            <span>+92 349 8901846</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>Frizendo</strong>. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/assets/Frizendo_Privacy_Policy.pdf">Privacy Policy</a>
          <a href="/assets/Frizendo_Terms_of_Service.pdf">Terms of Service</a>
        </div>

        <p className="footer-made">
          Digital growth from <span>Gilgit</span> 🌐
        </p>

        <p className="footer-dev">
          Developed by Henzify | Developer:{" "}
          <a
            href="https://muhammad-smoky.vercel.app/"
            rel="noopener"
            target="_blank"
          >
            Muhammad Azizi
          </a>
        </p>
      </div>
    </footer>
  );
}
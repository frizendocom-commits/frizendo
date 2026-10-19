import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/our-work.html", destination: "/our-work", permanent: true },
      { source: "/clients.html", destination: "/clients", permanent: true },
      { source: "/reviews.html", destination: "/reviews", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteInit from "@/components/SiteInit";
import RouterAdapter from "@/components/RouterAdapter";

export const metadata: Metadata = {
  metadataBase: new URL("https://frizendo.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link
          href="/assets/favicon-48x48.png"
          rel="icon"
          sizes="48x48"
          type="image/png"
        />
        <link
          href="/assets/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link
          href="/assets/favicon-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/assets/favicon-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link
          href="/assets/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/css/frizendo.css" rel="stylesheet" />
        <Header />
        {children}
        <Footer />
        <SiteInit />
        <RouterAdapter />
      </body>
    </html>
  );
}

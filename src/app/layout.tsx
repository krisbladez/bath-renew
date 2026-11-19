import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, siteUrl } from "@/content/company";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bathroom Remodeling in the Twin Cities | Bath Renew",
    template: "%s | Bath Renew",
  },
  description:
    "Bath Renew LLC provides affordable bathroom remodeling, shower updates, and tub-to-shower conversions for Minneapolis and Twin Cities homeowners.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: company.brandName,
    title: "Bathroom Remodeling in the Twin Cities | Bath Renew",
    description:
      "Affordable bathroom remodeling for Twin Cities homeowners. Request a free estimate from Bath Renew.",
    url: siteUrl,
    images: [{ url: "/images/projects/bathroom-feature.jpg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.legalName,
  url: siteUrl,
  telephone: company.phoneDisplay,
  email: company.email,
  image: `${siteUrl}/images/brand/logo.png`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Minneapolis–St. Paul metropolitan area",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Long Lake",
    addressRegion: "MN",
    addressCountry: "US",
  },
  description:
    "Residential bathroom remodeling company serving Minneapolis and surrounding Twin Cities communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        ) : null}
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

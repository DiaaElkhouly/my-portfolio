import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://diaaelkhouly.vercel.app";
const siteTitle = "Diaa Elkhouly | Freelance Full-Stack Web Developer";
const siteDescription =
  "Diaa Elkhouly is a freelance full-stack web developer in Egypt, building web applications and digital experiences with React and Next.js.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Diaa Elkhouly Portfolio",
  authors: [{ name: "Diaa Elkhouly", url: siteUrl }],
  creator: "Diaa Elkhouly",
  publisher: "Diaa Elkhouly",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
    siteName: "Diaa Elkhouly Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Diaa Elkhouly - Freelance Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Diaa Elkhouly",
        url: siteUrl,
        jobTitle: "Freelance Full-Stack Web Developer",
        description: siteDescription,
        email: "diaaelkhouly8@gmail.com",
        address: { "@type": "PostalAddress", addressCountry: "EG" },
        sameAs: [
          "https://github.com/DiaaElkhouly",
          "https://www.linkedin.com/in/diaa-elkhouly-42abb4339/",
        ],
        knowsAbout: [
          "Web development",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "E-commerce",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Diaa Elkhouly Portfolio",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}

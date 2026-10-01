import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://churchill.design"),
  title: "Wilson Churchill — Process-Driven Product Designer",
  description:
    "Product designer crafting web and mobile interfaces with a focus on clear, scalable digital experiences. High-impact fintech, SaaS, and health applications.",
  keywords: [
    "Product Designer",
    "UI/UX Designer",
    "Design Systems",
    "Mobile Design",
    "Web App",
    "Framer",
    "Next.js",
  ],
  authors: [{ name: "Wilson Churchill" }],
  openGraph: {
    title: "Wilson Churchill — Product Designer Portfolio",
    description:
      "I design products for web and mobile interfaces, focusing on clear and scalable digital experiences.",
    url: "https://churchill.design",
    siteName: "Wilson Churchill Portfolio",
    images: [
      {
        url: "/images/hero-reference.png",
        width: 1200,
        height: 630,
        alt: "Wilson Churchill Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Churchill — Product Designer Portfolio",
    description:
      "I design products for web and mobile interfaces, focusing on clear and scalable digital experiences.",
    images: ["/images/hero-reference.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-accent="blue">
      <body>{children}</body>
    </html>
  );
}

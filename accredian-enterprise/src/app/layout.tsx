import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Corporate Training & Upskilling Solutions",
  description:
    "Empowering Corporates, Accelerating Careers. Industry-leading enterprise training programs in Data Science, AI, Product Management, and more.",
  keywords: [
    "corporate training",
    "enterprise upskilling",
    "Accredian",
    "data science training",
    "AI training",
    "workforce development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-700">
        {children}
      </body>
    </html>
  );
}

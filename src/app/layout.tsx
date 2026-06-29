import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh | Java Backend Developer",
  description: "Software Engineer specializing in Java, Spring Boot, REST APIs, React and AI-powered applications.",
  keywords: [
    "Lokesh",
    "Java",
    "Spring Boot",
    "Backend Developer",
    "Software Engineer",
    "React",
    "REST APIs",
    "Portfolio"
  ],
  openGraph: {
    title: "Lokesh | Java Backend Developer",
    description: "Software Engineer specializing in Java, Spring Boot, REST APIs, React and AI-powered applications.",
    url: "https://lokesh-portfolio.vercel.app", // Fallback Vercel URL
    siteName: "Lokesh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh | Java Backend Developer",
    description: "Software Engineer specializing in Java, Spring Boot, REST APIs, React and AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-primary-bg text-text-main flex flex-col font-sans selection:bg-accent/30 selection:text-text-main">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}


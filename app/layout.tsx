import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blazej Nowak — Strength & Control",
  description:
    "Former pro boxer. 13 years in the ring. Now I build fighters outside of it. 1:1 premium online coaching for men 30+ who are done making excuses.",
  openGraph: {
    title: "Blazej Nowak — Strength & Control",
    description:
      "13 years in the ring. Now I build fighters outside of it. Apply for P4P 1:1 coaching.",
    url: "https://blazejnowak.com",
    siteName: "Blazej Nowak",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#0A0A0A] text-white antialiased">
        {/* Marks JS as available before first paint — scroll-reveal CSS
            only hides elements under html.js, so a no-JS visit gets a
            fully visible static page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { Providers } from "@/providers";
import { dmSansFont, funnelDisplayFont } from "@/shared/styles/fonts";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Tobacco Storage",
  description: "Pet project to simplify tobacco storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${dmSansFont.variable} ${funnelDisplayFont.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body /* className={`${dmSansFont.variable}`} */>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

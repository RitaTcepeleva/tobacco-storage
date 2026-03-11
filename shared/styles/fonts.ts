import { DM_Sans, Funnel_Display } from "next/font/google";

export const dmSansFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const funnelDisplayFont = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-display",
});

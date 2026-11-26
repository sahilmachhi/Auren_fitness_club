import type { Metadata } from "next";
import { BBH_Bogle, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const bbhBogle = BBH_Bogle({
  variable: "--font-bbh-bogle",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Auren Fitness Club | Build Strength. Become Unstoppable.",
    template: "%s | Auren Fitness Club",
  },
  description:
    "Strength training, certified personal coaching, and proven transformation programs at Auren Fitness Club. Book your free trial today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bbhBogle.variable} ${dmSans.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

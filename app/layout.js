import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Baccarat — Boutique Factory | Chandigarh",
  description:
    "Introducing the Baccarat Boutique Factory on Hoshiarpur Highway, Chandigarh. Since 1764, Baccarat has crafted the world's finest crystal — a legacy of French artistry and unparalleled luxury.",
  keywords: [
    "Baccarat",
    "crystal",
    "luxury",
    "Chandigarh",
    "boutique",
    "factory",
    "French heritage",
    "glassware",
    "chandelier",
  ],
  openGraph: {
    title: "Baccarat — Boutique Factory | Chandigarh",
    description:
      "Crafted in Light. Defined by Legacy. Discover the new Baccarat Boutique Factory in Chandigarh.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        <SmoothScroll />
        <CustomCursor />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}

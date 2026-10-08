import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const siteUrl = "https://terqovunax.quest";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Gra logiczna online — połącz trasę", template: "%s | Gra logiczna" },
  description: "Darmowa gra logiczna po polsku. Obracaj kafelki, połącz świetlną trasę i rozwiązuj coraz ciekawsze układy. Graj od razu w przeglądarce, bez konta.",
  openGraph: {
    title: "Gra logiczna online — połącz trasę",
    description: "Obracaj kafelki i znajdź drogę dla światła. Darmowa gra logiczna bez rejestracji.",
    url: siteUrl,
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/images/hero-labirynt.webp", width: 1536, height: 1024, alt: "Świetlna trasa w przestrzennej łamigłówce" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" data-scroll-behavior="smooth"><body><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}

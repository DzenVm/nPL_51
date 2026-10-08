import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="site-title" aria-label="Strona główna gry logicznej">
          <span>Gra logiczna <small>połącz trasę</small></span>
        </Link>
        <nav className="main-nav" aria-label="Menu główne">
          <Link href="/gra">Gra</Link>
          <Link href="/jak-grac">Jak grać</Link>
          <Link href="/o-grze">O grze</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <Link className="header-cta" href="/gra">Zagraj teraz <ArrowUpRight size={16} strokeWidth={2} /></Link>
        <details className="mobile-menu">
          <summary aria-label="Otwórz menu"><Menu size={24} /></summary>
          <nav aria-label="Menu mobilne">
            <Link href="/gra">Gra</Link>
            <Link href="/jak-grac">Jak grać</Link>
            <Link href="/o-grze">O grze</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

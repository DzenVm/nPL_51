import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <p className="eyebrow light">CHWILA DLA UMYSŁU</p>
          <h2>Każda droga zaczyna się<br />od jednego obrotu.</h2>
          <Link href="/gra" className="footer-cta">Przejdź do gry <ArrowUpRight size={18} /></Link>
        </div>
        <div className="footer-links">
          <div><strong>Odkrywaj</strong><Link href="/gra">Gra</Link><Link href="/jak-grac">Jak grać</Link><Link href="/o-grze">O grze</Link><Link href="/faq">FAQ</Link></div>
          <div><strong>Informacje</strong><Link href="/kontakt">Kontakt</Link><Link href="/polityka-prywatnosci">Prywatność</Link><Link href="/warunki">Warunki korzystania</Link></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Gra logiczna. Wszystkie prawa zastrzeżone.</span><span>Bez konta · Bez opłat · W przeglądarce</span></div>
    </footer>
  );
}

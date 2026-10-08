import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, Fingerprint, Lightbulb, RotateCw, Sparkles } from "lucide-react";

export default function Home() {
  return <>
    <section className="hero">
      <Image src="/images/hero-labirynt.webp" alt="Przestrzenny labirynt z bursztynową świetlną trasą" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow light"><span className="eyebrow-line" /> GRA LOGICZNA ONLINE</p>
        <h1>Jedna trasa.<br /><em>Wiele możliwości.</em></h1>
        <p className="hero-lead">Obracaj kafelki, połącz światło i odkryj rozwiązanie własnym tempem. Krótka chwila skupienia, która naprawdę wciąga.</p>
        <div className="hero-actions"><Link href="/gra" className="button button-accent">Rozpocznij grę <ArrowUpRight size={19} /></Link><Link href="/jak-grac" className="button button-ghost">Poznaj zasady <ArrowRight size={18} /></Link></div>
        <div className="hero-caption"><span>01 / 03</span><span>BEZ REJESTRACJI — GRAJ OD RAZU</span></div>
      </div>
    </section>

    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <div><p className="eyebrow">PROSTA ZASADA, CIEKAWE DECYZJE</p><h2>Spokój, skupienie<br />i małe <em>„mam to!”</em></h2></div>
        <div className="intro-copy"><p>Każdy kafelek to fragment drogi. Obróć go tak, aby ścieżka prowadziła dalej — od świecącego początku aż do wyjścia. Zasady zrozumiesz w kilka sekund, ale każdy kolejny układ poprosi o świeże spojrzenie.</p><Link href="/o-grze" className="text-link">Dowiedz się więcej o grze <ArrowUpRight size={18} /></Link></div>
      </div>
      <div className="container benefits-grid">
        <div className="benefit"><span className="benefit-icon"><RotateCw size={25} /></span><span className="benefit-number">01</span><h3>Obróć</h3><p>Kliknij kafelek, aby zmienić kierunek jego ścieżki.</p></div>
        <div className="benefit"><span className="benefit-icon"><Lightbulb size={25} /></span><span className="benefit-number">02</span><h3>Połącz</h3><p>Stwórz ciągłą drogę od punktu startowego do mety.</p></div>
        <div className="benefit"><span className="benefit-icon"><Sparkles size={25} /></span><span className="benefit-number">03</span><h3>Odkryj</h3><p>Ukończ poziom i sprawdź, co czeka w następnym układzie.</p></div>
      </div>
    </section>

    <section className="feature-section section-pad"><div className="container feature-grid">
      <div className="feature-photo"><Image src="/images/kafelek-zblizenie.webp" alt="Ceramiczny kafelek z turkusowym torem" fill sizes="(max-width: 800px) 100vw, 50vw" /><span className="photo-note">ZNAJDŹ SWOJĄ DROGĘ</span></div>
      <div className="feature-copy"><p className="eyebrow">ŁAMIGŁÓWKA NA TWOICH ZASADACH</p><h2>Mały ruch.<br /><em>Duża różnica.</em></h2><p>Nie musisz ścigać się z czasem. Możesz testować pomysły, cofać się do początku i próbować ponownie tyle razy, ile chcesz. Gra zapamięta odblokowane poziomy w tej przeglądarce.</p><div className="feature-points"><span><Clock3 size={20} /> Bez presji czasu</span><span><Fingerprint size={20} /> Bez zakładania konta</span></div><Link href="/gra" className="button button-dark">Zagraj bezpłatnie <ArrowUpRight size={18} /></Link></div>
    </div></section>

    <section className="quote-section"><div className="container quote-grid"><div><p className="eyebrow">ODKRYWAJ WE WŁASNYM TEMPIE</p><h2>Trzy układy.<br />Setki <em>małych odkryć.</em></h2><p>Od pierwszego prostego połączenia po bardziej kręte drogi. Każdy poziom wprowadza nowy rytm myślenia — bez zbędnych instrukcji i rozpraszaczy.</p><Link href="/gra" className="text-link">Zobacz poziomy <ArrowUpRight size={18} /></Link></div><div className="quote-photo"><Image src="/images/sciezka-kafelkow.webp" alt="Układ białych kafelków tworzący turkusową trasę" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>
    <section className="home-cta"><div className="container home-cta-inner"><div><p className="eyebrow light">GOTOWY NA PIERWSZY RUCH?</p><h2>Droga czeka na Ciebie.</h2></div><Link href="/gra" className="button button-accent">Przejdź do gry <ArrowUpRight size={19} /></Link></div></section>
  </>;
}

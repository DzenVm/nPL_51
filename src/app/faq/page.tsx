import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Najczęstsze pytania", description: "Odpowiedzi na pytania o grę logiczną: zasady, poziomy, postęp, urządzenia i dostępność bez rejestracji." };

const questions = [
  ["Czy gra jest bezpłatna?", "Tak. Wszystkie dostępne poziomy są darmowe. Nie ma zakupów w grze ani opłat za odblokowanie kolejnych układów."],
  ["Czy muszę zakładać konto?", "Nie. Możesz rozpocząć od razu. Odblokowane poziomy zapisują się w pamięci tej przeglądarki, jeśli pozwalają na to jej ustawienia."],
  ["Jak obrócić kafelek?", "Kliknij kafelek myszą lub stuknij go na ekranie dotykowym. Każde dotknięcie obraca tor o 90 stopni."],
  ["Skąd wiem, czy droga jest połączona?", "Kafelki połączone ze startem rozświetlają się. Gdy światło dotrze do mety po ciągłym torze, pojawi się komunikat o ukończeniu poziomu."],
  ["Czy jest limit czasu?", "Nie. Możesz spokojnie testować różne rozwiązania. Licznik pokazuje jedynie liczbę wykonanych ruchów."],
  ["Co zrobić, gdy utknę?", "Pod planszą znajdziesz podpowiedź oraz przycisk ponownego rozpoczęcia układu. Możesz też przeczytać krótki przewodnik na stronie „Jak grać”."],
  ["Czy gra działa na telefonie?", "Tak. Plansza i przyciski dostosowują się do mniejszych ekranów. Wystarczy aktualna przeglądarka i połączenie z internetem do otwarcia strony."],
  ["Dlaczego mój postęp zniknął?", "Postęp jest przechowywany lokalnie w danej przeglądarce. Może zniknąć po usunięciu danych witryny, zmianie urządzenia lub w trybie prywatnym."],
];

export default function FAQ() { return <><section className="page-hero"><div className="container"><p className="eyebrow">POMOC</p><h1>Masz <em>pytanie?</em></h1><p>Tu znajdziesz najważniejsze informacje o rozgrywce i działaniu strony.</p></div></section><section className="container faq-section"><div className="faq-heading"><p className="eyebrow">ODPOWIEDZI W JEDNYM MIEJSCU</p><h2>Wszystko, co warto wiedzieć.</h2></div><div className="faq-list">{questions.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i>+</i></summary><p>{answer}</p></details>)}</div><div className="faq-end"><p>Chcesz od razu sprawdzić zasady w praktyce?</p><Link href="/gra" className="text-link">Przejdź do gry <ArrowUpRight size={18} /></Link></div></section></>; }

import type { Metadata } from "next";
import { PuzzleGame } from "@/components/PuzzleGame";

export const metadata: Metadata = { title: "Graj online", description: "Zagraj w darmową grę logiczną: obracaj kafelki i połącz trasę świetlną. Trzy poziomy, bez limitu czasu i rejestracji." };

export default function GamePage() { return <><section className="page-hero game-page-hero"><div className="container"><p className="eyebrow">GRAJ W PRZEGLĄDARCE</p><h1>Połącz <em>trasę.</em></h1><p>Obróć kafelki, znajdź ciągłą drogę i ciesz się każdym rozwiązaniem.</p></div></section><section className="container game-page-section"><PuzzleGame /></section></>; }

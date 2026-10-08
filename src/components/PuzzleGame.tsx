"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Lightbulb, RotateCcw, RotateCw, Sparkles } from "lucide-react";
import { Cell, createBoard, hasWon, levels, rotateMask, traceLight, SIZE, NORTH, EAST, SOUTH, WEST } from "@/lib/game";

const PROGRESS_KEY = "gra-logiczna-progress-v1";

function TileIcon({ mask, lit }: { mask: number; lit: boolean }) {
  const color = lit ? "#d8a65b" : "#779c97";
  const ends = [[NORTH, 24, 0], [EAST, 48, 24], [SOUTH, 24, 48], [WEST, 0, 24]];
  return <svg viewBox="0 0 48 48" aria-hidden="true" className="tile-svg">
    {ends.filter(([bit]) => mask & bit).map(([bit, x, y]) => <line key={bit} x1="24" y1="24" x2={x} y2={y} stroke={color} strokeWidth="8" strokeLinecap="round" />)}
    <circle cx="24" cy="24" r="5" fill={color} />
  </svg>;
}

export function PuzzleGame() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [board, setBoard] = useState<Cell[]>(() => createBoard(0));
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [hint, setHint] = useState(false);
  const lit = useMemo(() => traceLight(board), [board]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = Number(window.localStorage.getItem(PROGRESS_KEY) || "0");
        if (Number.isInteger(stored) && stored > 0) setUnlocked(Math.min(stored, levels.length - 1));
      } catch { /* Gra działa również bez localStorage. */ }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function selectLevel(index: number) {
    if (index > unlocked) return;
    setLevelIndex(index);
    setBoard(createBoard(index));
    setMoves(0);
    setWon(false);
    setHint(false);
  }

  function turnTile(index: number) {
    if (won) return;
    const updated = board.map((cell, cellIndex) => cellIndex === index ? { ...cell, rotation: (cell.rotation + 1) % 4 } : cell);
    setBoard(updated);
    setMoves(moves + 1);
    setHint(false);
    if (hasWon(updated)) {
      setWon(true);
      const next = Math.min(levelIndex + 1, levels.length - 1);
      if (next > unlocked) {
        setUnlocked(next);
        try { window.localStorage.setItem(PROGRESS_KEY, String(next)); } catch { /* opcjonalny zapis */ }
      }
    }
  }

  return <div className="game-shell">
    <div className="game-topbar"><div><p className="eyebrow">WYBIERZ UKŁAD</p><h2>Twój mały moment skupienia.</h2></div><div className="level-tabs" role="group" aria-label="Wybierz poziom">{levels.map((level, index) => <button key={level.title} type="button" disabled={index > unlocked} className={index === levelIndex ? "active" : ""} onClick={() => selectLevel(index)} aria-label={`Poziom ${index + 1}: ${level.title}${index > unlocked ? ", zablokowany" : ""}`} aria-pressed={index === levelIndex}>{String(index + 1).padStart(2, "0")}</button>)}</div></div>
    <div className="game-card"><div className="game-board-panel"><div className="board-title"><div><span className="level-counter">POZIOM {String(levelIndex + 1).padStart(2, "0")} / 03</span><h3>{levels[levelIndex].title}</h3><p>{levels[levelIndex].subtitle}</p></div><span className="moves-count"><strong>{moves}</strong> ruchów</span></div>
      <div className="board-wrap"><span className="board-marker start-marker">START</span><div className="game-board" role="group" aria-label="Plansza gry, 5 na 5 kafelków">{board.map((cell, index) => { const row = Math.floor(index / SIZE); const col = index % SIZE; const currentMask = rotateMask(cell.mask, cell.rotation); return <button type="button" key={index} className={`game-tile ${lit.has(index) ? "lit" : ""} ${index === 10 ? "source-tile" : ""} ${index === 14 ? "target-tile" : ""}`} onClick={() => turnTile(index)} aria-label={`Wiersz ${row + 1}, kolumna ${col + 1}; obróć kafelek`} disabled={won}><TileIcon mask={currentMask} lit={lit.has(index)} /></button>; })}</div><span className="board-marker end-marker">META</span></div>
      <div className="board-actions"><button type="button" onClick={() => selectLevel(levelIndex)}><RotateCcw size={17} /> Zacznij od nowa</button><button type="button" onClick={() => setHint(!hint)} aria-pressed={hint}><Lightbulb size={18} /> {hint ? "Ukryj podpowiedź" : "Podpowiedź"}</button></div>
      {hint && <p className="hint-box" role="status">Zacznij od kafelka przy napisie START. Gdy jego tor otworzy się w lewo, spróbuj połączyć podświetlone kafelki w ciągłą trasę.</p>}
      {won && <div className="win-box" role="status"><span><Check size={22} /></span><div><strong>Świetnie! Trasa jest połączona.</strong><p>{levelIndex < levels.length - 1 ? "Następny układ jest już dostępny." : "Ukończyłeś wszystkie trzy układy. Możesz wrócić do dowolnego poziomu."}</p></div>{levelIndex < levels.length - 1 && <button onClick={() => selectLevel(levelIndex + 1)}>Dalej <ArrowRight size={16} /></button>}</div>}
    </div><aside className="game-side-panel"><div className="side-index"><Sparkles size={24} /><span>01 — ZASADA GRY</span></div><h3>Poprowadź światło od początku do końca.</h3><p>Kliknij dowolny kafelek, aby obrócić go o ćwierć obrotu. Sąsiednie tory muszą się ze sobą stykać. Gdy droga od STARTU dotrze do METY, poziom zostanie ukończony.</p><div className="side-divider" /><div className="side-step"><span>01</span><p>Obracaj kafelki <RotateCw size={16} /></p></div><div className="side-step"><span>02</span><p>Obserwuj rozświetloną trasę</p></div><div className="side-step"><span>03</span><p>Dotrzyj do mety</p></div><p className="side-note">Bez limitu czasu. Eksperymentuj swobodnie.</p></aside></div>
  </div>;
}

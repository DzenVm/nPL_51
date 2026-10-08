export const SIZE = 5;
export const NORTH = 1;
export const EAST = 2;
export const SOUTH = 4;
export const WEST = 8;
export type Direction = 1 | 2 | 4 | 8;
export type Cell = { mask: number; rotation: number; path: boolean };

export const levels = [
  { title: "Pierwszy promień", subtitle: "Poznaj rytm kafelków", path: [[2,0],[2,1],[1,1],[1,2],[1,3],[2,3],[2,4]] },
  { title: "Cichy zakręt", subtitle: "Spójrz o krok dalej", path: [[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,3],[3,3],[3,4],[2,4]] },
  { title: "Długa droga", subtitle: "Znajdź własne tempo", path: [[2,0],[3,0],[3,1],[4,1],[4,2],[3,2],[2,2],[1,2],[1,3],[0,3],[0,4],[1,4],[2,4]] },
] as const;

function direction(from: readonly number[], to: readonly number[]): Direction {
  if (to[0] < from[0]) return NORTH;
  if (to[1] > from[1]) return EAST;
  if (to[0] > from[0]) return SOUTH;
  return WEST;
}

export function rotateMask(mask: number, turns: number): number {
  let result = mask;
  for (let i = 0; i < turns % 4; i++) result = ((result << 1) & 15) | (result >> 3);
  return result;
}

export function createBoard(levelIndex: number): Cell[] {
  const level = levels[levelIndex];
  const board: Cell[] = Array.from({ length: SIZE * SIZE }, (_, index) => {
    const seed = (index * 7 + levelIndex * 11) % 4;
    const decoys = [NORTH | SOUTH, NORTH | EAST, NORTH | EAST | SOUTH, NORTH | EAST | SOUTH | WEST];
    return { mask: decoys[(index + levelIndex) % decoys.length], rotation: seed, path: false };
  });
  level.path.forEach((point, i) => {
    const prev = i === 0 ? [2,-1] : level.path[i - 1];
    const next = i === level.path.length - 1 ? [2,5] : level.path[i + 1];
    board[point[0] * SIZE + point[1]] = {
      mask: direction(point, prev) | direction(point, next),
      rotation: (i * 3 + levelIndex + 1) % 4,
      path: true,
    };
  });
  return board;
}

export function traceLight(board: Cell[]): Set<number> {
  const start = 2 * SIZE;
  const end = 2 * SIZE + SIZE - 1;
  const lit = new Set<number>();
  if (!(rotateMask(board[start].mask, board[start].rotation) & WEST)) return lit;
  const queue = [start];
  lit.add(start);
  const neighbors = [
    { bit: NORTH, opposite: SOUTH, offset: -SIZE, allowed: (i: number) => i >= SIZE },
    { bit: EAST, opposite: WEST, offset: 1, allowed: (i: number) => i % SIZE < SIZE - 1 },
    { bit: SOUTH, opposite: NORTH, offset: SIZE, allowed: (i: number) => i < SIZE * (SIZE - 1) },
    { bit: WEST, opposite: EAST, offset: -1, allowed: (i: number) => i % SIZE > 0 },
  ];
  while (queue.length) {
    const current = queue.shift()!;
    const mask = rotateMask(board[current].mask, board[current].rotation);
    for (const edge of neighbors) {
      if (!(mask & edge.bit) || !edge.allowed(current)) continue;
      const next = current + edge.offset;
      if (!lit.has(next) && (rotateMask(board[next].mask, board[next].rotation) & edge.opposite)) {
        lit.add(next);
        queue.push(next);
      }
    }
  }
  if (!(rotateMask(board[end].mask, board[end].rotation) & EAST)) lit.delete(end);
  return lit;
}

export function hasWon(board: Cell[]) {
  return traceLight(board).has(2 * SIZE + SIZE - 1);
}

/**
 * OSSO - Sistema de Tipos Globales
 * Definiciones TypeScript para el juego de Sudoku
 */

// ═══════════════════════════════════════════════════════════
// DIFICULTAD
// ═══════════════════════════════════════════════════════════

export type Difficulty = 'principiante' | 'medio' | 'experto';

export interface DifficultyConfig {
  level: Difficulty;
  cellsToRemove: number; // Cantidad de celdas vacías
  displayName: string;
}

// ═══════════════════════════════════════════════════════════
// CELDA
// ═══════════════════════════════════════════════════════════

export interface Cell {
  value: number | null; // 1-9 o null si está vacía
  isInitial: boolean; // true si es parte del tablero inicial (no editable)
  isValid: boolean; // false si hay conflicto con reglas
  notes: number[]; // Notas del usuario (1-9)
  row: number; // 0-8
  col: number; // 0-8
}

// ═══════════════════════════════════════════════════════════
// TABLERO
// ═══════════════════════════════════════════════════════════

export type Board = Cell[][]; // Matriz 9x9

export interface BoardValidation {
  isValid: boolean;
  conflicts: Conflict[];
}

export interface Conflict {
  type: 'row' | 'column' | 'box';
  cells: { row: number; col: number }[];
  value: number;
}

// ═══════════════════════════════════════════════════════════
// ESTADO DEL JUEGO
// ═══════════════════════════════════════════════════════════

export interface GameState {
  board: Board;
  difficulty: Difficulty;
  isComplete: boolean;
  isValid: boolean;
  startTime: number; // timestamp
  elapsedTime: number; // segundos
  moves: number; // cantidad de movimientos
  hintsUsed: number; // pistas utilizadas
  selectedCell: { row: number; col: number } | null;
  notesMode: boolean; // modo de notas activado
}

// ═══════════════════════════════════════════════════════════
// HISTORIAL (para deshacer/rehacer)
// ═══════════════════════════════════════════════════════════

export interface Move {
  row: number;
  col: number;
  previousValue: number | null;
  newValue: number | null;
  timestamp: number;
}

export interface GameHistory {
  moves: Move[];
  currentIndex: number;
}

// ═══════════════════════════════════════════════════════════
// PISTAS
// ═══════════════════════════════════════════════════════════

export interface Hint {
  row: number;
  col: number;
  value: number;
  reason: string; // Explicación de la pista
}

// ═══════════════════════════════════════════════════════════
// ESTADÍSTICAS
// ═══════════════════════════════════════════════════════════

export interface GameStats {
  gamesPlayed: number;
  gamesCompleted: number;
  bestTime: { [key in Difficulty]: number }; // segundos
  averageTime: { [key in Difficulty]: number };
  totalHintsUsed: number;
}

// ═══════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════

export const DIFFICULTY_CONFIGS: Record<Difficulty, DifficultyConfig> = {
  principiante: {
    level: 'principiante',
    cellsToRemove: 35,
    displayName: 'Principiante',
  },
  medio: {
    level: 'medio',
    cellsToRemove: 45,
    displayName: 'Medio',
  },
  experto: {
    level: 'experto',
    cellsToRemove: 55,
    displayName: 'Experto',
  },
};

export const BOARD_SIZE = 9;
export const BOX_SIZE = 3;
export const EMPTY_CELL = null;

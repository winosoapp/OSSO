// Tipos globales de la aplicación OSSO (Sudoku)

export type Difficulty = 'principiante' | 'medio' | 'experto';

export type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;

export interface Cell {
  value: CellValue;
  isFixed: boolean; // Si es parte del tablero inicial
  isError: boolean; // Si hay error en validación
  notes: number[]; // Notas del usuario
}

export type Board = Cell[][];

export interface GameState {
  board: Board;
  solution: number[][]; // Solución completa
  difficulty: Difficulty;
  startTime: number;
  elapsedTime: number;
  isPaused: boolean;
  isCompleted: boolean;
  hintsUsed: number;
}

export interface Statistics {
  gamesPlayed: number;
  gamesWon: number;
  bestTime: {
    principiante: number | null;
    medio: number | null;
    experto: number | null;
  };
  currentStreak: number;
  totalHintsUsed: number;
}

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  cellFixed: string;
  cellSelected: string;
  cellHighlight: string;
}

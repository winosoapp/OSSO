/**
 * OSSO - Sistema de tipos globales
 * Interfaces principales para la app de Sudoku
 */

// ═══════════════════════════════════════════════════════════════
// TIPOS DE DIFICULTAD
// ═══════════════════════════════════════════════════════════════

export type Difficulty = 'beginner' | 'medium' | 'expert';

export interface DifficultyConfig {
  level: Difficulty;
  label: string;
  cellsToRemove: number; // Cantidad de celdas vacías
  description: string;
}

// ═══════════════════════════════════════════════════════════════
// CELDA DEL TABLERO
// ═══════════════════════════════════════════════════════════════

export interface Cell {
  value: number | null; // 1-9 o null si está vacía
  isInitial: boolean; // true si es parte del tablero inicial (no editable)
  isValid: boolean; // true si el valor actual es correcto
  notes: number[]; // Notas del usuario (1-9)
  row: number; // 0-8
  col: number; // 0-8
  box: number; // 0-8 (indica el cuadrado 3x3)
}

// ═══════════════════════════════════════════════════════════════
// TABLERO COMPLETO
// ═══════════════════════════════════════════════════════════════

export interface Board {
  cells: Cell[][]; // Matriz 9x9 de celdas
  solution: number[][]; // Solución completa (para validación)
  difficulty: Difficulty;
  createdAt: Date;
}

// ═══════════════════════════════════════════════════════════════
// ESTADO DEL JUEGO
// ═══════════════════════════════════════════════════════════════

export interface GameState {
  board: Board;
  selectedCell: CellPosition | null; // Celda seleccionada actualmente
  hintsRemaining: number; // Pistas disponibles
  timer: number; // Tiempo en segundos
  isGameCompleted: boolean;
  isGamePaused: boolean;
  mistakes: number; // Errores cometidos
  score: number; // Puntuación actual
}

// ═══════════════════════════════════════════════════════════════
// POSICIÓN DE CELDA
// ═══════════════════════════════════════════════════════════════

export interface CellPosition {
  row: number; // 0-8
  col: number; // 0-8
}

// ═══════════════════════════════════════════════════════════════
// ACCIÓN DEL USUARIO
// ═══════════════════════════════════════════════════════════════

export type GameAction = 
  | { type: 'SELECT_CELL'; position: CellPosition }
  | { type: 'SET_VALUE'; position: CellPosition; value: number }
  | { type: 'CLEAR_CELL'; position: CellPosition }
  | { type: 'TOGGLE_NOTE'; position: CellPosition; note: number }
  | { type: 'USE_HINT' }
  | { type: 'VALIDATE_BOARD' }
  | { type: 'NEW_GAME'; difficulty: Difficulty }
  | { type: 'PAUSE_GAME' }
  | { type: 'RESUME_GAME' }
  | { type: 'RESET_GAME' };

// ═══════════════════════════════════════════════════════════════
// ESTADÍSTICAS DEL USUARIO
// ═══════════════════════════════════════════════════════════════

export interface UserStats {
  gamesPlayed: number;
  gamesCompleted: number;
  bestTime: number; // en segundos
  averageTime: number;
  totalScore: number;
  statsByDifficulty: {
    beginner: DifficultyStats;
    medium: DifficultyStats;
    expert: DifficultyStats;
  };
}

export interface DifficultyStats {
  played: number;
  completed: number;
  bestTime: number;
  averageTime: number;
}

// ═══════════════════════════════════════════════════════════════
// VALIDACIÓN
// ═══════════════════════════════════════════════════════════════

export interface ValidationResult {
  isValid: boolean;
  errors: CellPosition[]; // Celdas con errores
  message: string;
}

// ═══════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════

export const BOARD_SIZE = 9;
export const BOX_SIZE = 3;
export const MIN_VALUE = 1;
export const MAX_VALUE = 9;

export const DIFFICULTY_CONFIGS: Record<Difficulty, DifficultyConfig> = {
  beginner: {
    level: 'beginner',
    label: 'Principiante',
    cellsToRemove: 40,
    description: 'Perfecto para empezar'
  },
  medium: {
    level: 'medium',
    label: 'Medio',
    cellsToRemove: 50,
    description: 'Un desafío moderado'
  },
  expert: {
    level: 'expert',
    label: 'Experto',
    cellsToRemove: 60,
    description: 'Solo para maestros'
  }
};

// ═══════════════════════════════════════════════════════════════
// UTILIDADES DE TIPO
// ═══════════════════════════════════════════════════════════════

export type CellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type RowIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type ColIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type BoxIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
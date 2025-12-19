/**
 * OSSO - Sistema de tipos globales para Sudoku
 * Definición de interfaces y tipos para la lógica del juego
 */

/**
 * Niveles de dificultad del Sudoku
 */
export enum Difficulty {
  PRINCIPIANTE = 'principiante',
  MEDIO = 'medio',
  EXPERTO = 'experto'
}

/**
 * Configuración de celdas a remover según dificultad
 */
export const DIFFICULTY_CONFIG = {
  [Difficulty.PRINCIPIANTE]: {
    cellsToRemove: 30, // Aprox. 40% del tablero
    label: 'Principiante',
    color: '#4CAF50'
  },
  [Difficulty.MEDIO]: {
    cellsToRemove: 45, // Aprox. 55% del tablero
    label: 'Medio',
    color: '#FF9800'
  },
  [Difficulty.EXPERTO]: {
    cellsToRemove: 55, // Aprox. 68% del tablero
    label: 'Experto',
    color: '#F44336'
  }
};

/**
 * Representa una celda individual del tablero
 */
export interface Cell {
  /** Valor actual de la celda (1-9) o null si está vacía */
  value: number | null;
  
  /** Valor correcto de la solución */
  solution: number;
  
  /** Si la celda es parte del tablero inicial (no editable) */
  isInitial: boolean;
  
  /** Si el valor ingresado es incorrecto */
  isError: boolean;
  
  /** Notas/candidatos que el usuario puede marcar (1-9) */
  notes: number[];
  
  /** Coordenadas de la celda */
  row: number;
  col: number;
  
  /** Si la celda está seleccionada actualmente */
  isSelected: boolean;
  
  /** Si la celda está resaltada (mismo valor que celda seleccionada) */
  isHighlighted: boolean;
}

/**
 * Representa el tablero completo (9x9)
 */
export type Board = Cell[][];

/**
 * Estados posibles del juego
 */
export enum GameStatus {
  PLAYING = 'playing',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  ABANDONED = 'abandoned'
}

/**
 * Tipo de acción del usuario
 */
export enum ActionType {
  SET_VALUE = 'set_value',
  CLEAR_VALUE = 'clear_value',
  SET_NOTE = 'set_note',
  CLEAR_NOTE = 'clear_note',
  USE_HINT = 'use_hint'
}

/**
 * Representa una acción del usuario (para sistema de deshacer)
 */
export interface GameAction {
  type: ActionType;
  row: number;
  col: number;
  previousValue: number | null;
  newValue: number | null;
  previousNotes?: number[];
  newNotes?: number[];
  timestamp: number;
}

/**
 * Estadísticas del juego actual
 */
export interface GameStats {
  /** Tiempo transcurrido en segundos */
  timeElapsed: number;
  
  /** Número de errores cometidos */
  errors: number;
  
  /** Número de pistas usadas */
  hintsUsed: number;
  
  /** Celdas completadas correctamente */
  cellsCompleted: number;
  
  /** Total de celdas a completar */
  totalCells: number;
  
  /** Porcentaje de progreso */
  progress: number;
}

/**
 * Estado completo del juego
 */
export interface GameState {
  /** Identificador único del juego */
  id: string;
  
  /** Tablero actual */
  board: Board;
  
  /** Dificultad del juego */
  difficulty: Difficulty;
  
  /** Estado del juego */
  status: GameStatus;
  
  /** Estadísticas */
  stats: GameStats;
  
  /** Historial de acciones (para deshacer/rehacer) */
  history: GameAction[];
  
  /** Índice actual en el historial */
  historyIndex: number;
  
  /** Celda seleccionada actualmente */
  selectedCell: { row: number; col: number } | null;
  
  /** Si el modo notas está activo */
  notesMode: boolean;
  
  /** Número de pistas disponibles */
  hintsRemaining: number;
  
  /** Fecha de inicio del juego */
  startedAt: Date;
  
  /** Fecha de finalización (si está completado) */
  completedAt?: Date;
}

/**
 * Configuración del juego
 */
export interface GameConfig {
  /** Número máximo de errores permitidos (0 = sin límite) */
  maxErrors: number;
  
  /** Número de pistas disponibles */
  hintsAvailable: number;
  
  /** Si se debe validar automáticamente los valores */
  autoValidation: boolean;
  
  /** Si se debe resaltar valores duplicados */
  highlightDuplicates: boolean;
  
  /** Si se debe mostrar el temporizador */
  showTimer: boolean;
}

/**
 * Resultado de validación de una celda
 */
export interface ValidationResult {
  isValid: boolean;
  conflicts: { row: number; col: number }[];
}

/**
 * Coordenadas de una celda
 */
export interface CellPosition {
  row: number;
  col: number;
}

/**
 * Región del Sudoku (fila, columna o subcuadrícula)
 */
export type Region = Cell[];

/**
 * Índices de subcuadrícula 3x3
 */
export interface BoxIndices {
  startRow: number;
  endRow: number;
  startCol: number;
  endCol: number;
}
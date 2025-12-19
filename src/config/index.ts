/**
 * OSSO - Configuración de la Aplicación
 * Centraliza todas las variables de entorno y configuración
 */

import { AppConfig } from '../types';

// Variables de entorno (deberían venir de process.env en producción)
const ENV = {
  SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '',
  API_URL: process.env.EXPO_PUBLIC_API_URL || 'https://api.osso.app',
  GITHUB_REPO: 'winosoapp/OSSO',
  ENVIRONMENT: (process.env.EXPO_PUBLIC_ENVIRONMENT || 'development') as 'development' | 'staging' | 'production',
};

export const config: AppConfig = {
  apiUrl: ENV.API_URL,
  supabaseUrl: ENV.SUPABASE_URL,
  supabaseAnonKey: ENV.SUPABASE_ANON_KEY,
  githubRepo: ENV.GITHUB_REPO,
  environment: ENV.ENVIRONMENT,
};

// Constantes de la aplicación
export const APP_CONSTANTS = {
  APP_NAME: 'OSSO',
  APP_VERSION: '1.0.0',
  EXPO_SDK_VERSION: '54',
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  PAGINATION_PAGE_SIZE: 20,
  DEBOUNCE_DELAY: 300,
};

// Configuración de timeouts
export const TIMEOUTS = {
  API_REQUEST: 30000, // 30 segundos
  COMPILATION: 300000, // 5 minutos
  RETRY_DELAY: 2000, // 2 segundos
};

// URLs y endpoints
export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  PROJECTS: {
    LIST: '/projects',
    DETAIL: '/projects/:id',
    CREATE: '/projects',
    UPDATE: '/projects/:id',
    DELETE: '/projects/:id',
  },
  ROADMAP: {
    GET: '/projects/:id/roadmap',
    UPDATE_FASE: '/roadmap/fases/:id',
    UPDATE_SUBFASE: '/roadmap/subfases/:id',
  },
};

export default config;
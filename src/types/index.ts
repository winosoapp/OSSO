// Tipos globales de la aplicación
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AppConfig {
  apiUrl: string;
  supabaseUrl: string;
  supabaseKey: string;
}
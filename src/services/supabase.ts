import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Obtener las variables de entorno
const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl || '';
const supabaseAnonKey = Constants.expoConfig?.extra?.supabaseAnonKey || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase URL o Anon Key no configuradas en app.config.ts');
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: undefined, // Por ahora sin persistencia de auth
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false,
  },
});

// Helper para verificar conexión
export const testSupabaseConnection = async (): Promise<boolean> => {
  try {
    const { error } = await supabase.from('_test').select('*').limit(1);
    if (error && error.message !== 'relation "public._test" does not exist') {
      console.error('❌ Error de conexión a Supabase:', error);
      return false;
    }
    console.log('✅ Supabase conectado correctamente');
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con Supabase:', error);
    return false;
  }
};

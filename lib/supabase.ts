import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://kdjoxhqytyhtkppjimkb.supabase.co';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkam94aHF5dHlodGtwcGppbWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MzgxNDYsImV4cCI6MjA1MzMxNDE0Nn0.W9QXO6h7q1HKXt0YzQXECc4rg8uwC_4hvzSmHR2XJI4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

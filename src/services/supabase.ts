/**
 * OSSO - Cliente de Supabase
 * Configuración y cliente centralizado de Supabase
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { config } from '../config';
import { logger } from '../utils';

class SupabaseService {
  private static instance: SupabaseService;
  private client: SupabaseClient | null = null;

  private constructor() {
    this.initializeClient();
  }

  public static getInstance(): SupabaseService {
    if (!SupabaseService.instance) {
      SupabaseService.instance = new SupabaseService();
    }
    return SupabaseService.instance;
  }

  private initializeClient() {
    try {
      if (!config.supabaseUrl || !config.supabaseAnonKey) {
        logger.warn('Supabase credentials not configured');
        return;
      }

      this.client = createClient(config.supabaseUrl, config.supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      });

      logger.info('Supabase client initialized');
    } catch (error) {
      logger.error('Failed to initialize Supabase client', error);
    }
  }

  public getClient(): SupabaseClient {
    if (!this.client) {
      throw new Error('Supabase client not initialized');
    }
    return this.client;
  }

  public isConfigured(): boolean {
    return this.client !== null;
  }
}

export const supabaseService = SupabaseService.getInstance();
export const supabase = supabaseService.getClient();
export default supabaseService;
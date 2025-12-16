import { supabase } from '../lib/supabase';
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'supabase_token';
const REFRESH_TOKEN_KEY = 'supabase_refresh_token';

export const AuthService = {
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.session) {
      await this.saveTokens(data.session.access_token, data.session.refresh_token);
    }

    return { session: data.session, user: data.user };
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.session) {
      await this.saveTokens(data.session.access_token, data.session.refresh_token);
    }

    return { session: data.session, user: data.user };
  },

  async signOut() {
    await supabase.auth.signOut();
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },

  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
  },

  async isAuthenticated() {
    const session = await this.getSession();
    return !!session;
  },

  async saveTokens(accessToken: string, refreshToken: string) {
    await SecureStore.setItemAsync(TOKEN_KEY, accessToken);
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
  },
};

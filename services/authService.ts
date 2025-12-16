import { supabase } from '../lib/supabase';
import * as SecureStore from 'expo-secure-store';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

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

  async signInWithGoogle() {
    const redirectUrl = AuthSession.makeRedirectUri();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: false,
      },
    });

    if (error) throw error;

    // Abrir navegador para OAuth
    if (data.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl
      );

      if (result.type === 'success') {
        const { url } = result;
        const params = new URLSearchParams(url.split('#')[1]);
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (accessToken && refreshToken) {
          await this.saveTokens(accessToken, refreshToken);
          const { data: sessionData } = await supabase.auth.getSession();
          return { session: sessionData.session, user: sessionData.session?.user };
        }
      }
    }

    throw new Error('OAuth cancelado o fallido');
  },

  async signInWithApple() {
    const redirectUrl = AuthSession.makeRedirectUri();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: false,
      },
    });

    if (error) throw error;

    // Abrir navegador para OAuth
    if (data.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl
      );

      if (result.type === 'success') {
        const { url } = result;
        const params = new URLSearchParams(url.split('#')[1]);
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (accessToken && refreshToken) {
          await this.saveTokens(accessToken, refreshToken);
          const { data: sessionData } = await supabase.auth.getSession();
          return { session: sessionData.session, user: sessionData.session?.user };
        }
      }
    }

    throw new Error('OAuth cancelado o fallido');
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
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthService } from '@/services/authService';
import * as SecureStore from 'expo-secure-store';

interface AuthContextType {
  user: any;
  session: any;
  isLoading: boolean;
  isAuthenticated: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar sesión al iniciar
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const currentSession = await AuthService.getSession();
      if (currentSession) {
        setSession(currentSession);
        setUser(currentSession.user);
      }
    } catch (error) {
      console.error('Error verificando sesión:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { session: newSession } = await AuthService.signUp(email, password);
      if (newSession) {
        setSession(newSession);
        setUser(newSession.user);
        await SecureStore.setItemAsync('userToken', newSession.access_token);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { session: newSession } = await AuthService.signIn(email, password);
      if (newSession) {
        setSession(newSession);
        setUser(newSession.user);
        await SecureStore.setItemAsync('userToken', newSession.access_token);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await AuthService.signOut();
      await SecureStore.deleteItemAsync('userToken');
      setSession(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    await AuthService.resetPassword(email);
  };

  const value = {
    user,
    session,
    isLoading,
    isAuthenticated: !!session,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
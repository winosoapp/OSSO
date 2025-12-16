// Mock temporal del servicio de autenticación para probar el UI

export const AuthService = {
  async signUp(email: string, password: string) {
    // Mock - siempre exitoso
    return {
      session: { access_token: 'mock-token', refresh_token: 'mock-refresh' },
      user: { email, id: '1' }
    };
  },

  async signIn(email: string, password: string) {
    // Mock - siempre exitoso
    return {
      session: { access_token: 'mock-token', refresh_token: 'mock-refresh' },
      user: { email, id: '1' }
    };
  },

  async signOut() {
    // Mock - no hace nada
    return;
  },

  async getSession() {
    // Mock - siempre retorna null (no autenticado)
    return null;
  },

  async resetPassword(email: string) {
    // Mock - siempre exitoso
    return;
  },

  async isAuthenticated() {
    return false;
  },

  async saveTokens(accessToken: string, refreshToken: string) {
    // Mock - no hace nada
    return;
  },
};

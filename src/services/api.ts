/**
 * OSSO - Cliente de API
 * Manejo centralizado de llamadas HTTP
 */

import { config, TIMEOUTS } from '../config';
import { logger } from '../utils';
import { ApiResponse } from '../types';

class ApiService {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = config.apiUrl;
    this.timeout = TIMEOUTS.API_REQUEST;
  }

  private async fetchWithTimeout(url: string, options: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    try {
      const data = await response.json();

      if (!response.ok) {
        logger.error(`API Error: ${response.status}`, data);
        return {
          success: false,
          error: data.message || 'Error en la solicitud',
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      logger.error('Error parsing response', error);
      return {
        success: false,
        error: 'Error procesando la respuesta',
      };
    }
  }

  async get<T>(endpoint: string, headers?: HeadersInit): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      logger.debug(`GET ${url}`);

      const response = await this.fetchWithTimeout(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      logger.error(`GET ${endpoint} failed`, error);
      return {
        success: false,
        error: 'Error de conexión',
      };
    }
  }

  async post<T>(endpoint: string, data?: any, headers?: HeadersInit): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      logger.debug(`POST ${url}`, data);

      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      logger.error(`POST ${endpoint} failed`, error);
      return {
        success: false,
        error: 'Error de conexión',
      };
    }
  }

  async put<T>(endpoint: string, data?: any, headers?: HeadersInit): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      logger.debug(`PUT ${url}`, data);

      const response = await this.fetchWithTimeout(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      logger.error(`PUT ${endpoint} failed`, error);
      return {
        success: false,
        error: 'Error de conexión',
      };
    }
  }

  async delete<T>(endpoint: string, headers?: HeadersInit): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      logger.debug(`DELETE ${url}`);

      const response = await this.fetchWithTimeout(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      logger.error(`DELETE ${endpoint} failed`, error);
      return {
        success: false,
        error: 'Error de conexión',
      };
    }
  }
}

export const api = new ApiService();
export default api;
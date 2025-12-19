/**
 * OSSO - Sistema de Logging
 * Manejo centralizado de logs con niveles
 */

import { APP_CONSTANTS } from '../config';

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

class Logger {
  private isDevelopment = __DEV__;

  private formatMessage(level: LogLevel, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const prefix = `[${APP_CONSTANTS.APP_NAME}] [${timestamp}] [${level}]`;
    return data ? `${prefix} ${message}` : `${prefix} ${message}`;
  }

  debug(message: string, data?: any) {
    if (this.isDevelopment) {
      console.log(this.formatMessage(LogLevel.DEBUG, message), data || '');
    }
  }

  info(message: string, data?: any) {
    console.log(this.formatMessage(LogLevel.INFO, message), data || '');
  }

  warn(message: string, data?: any) {
    console.warn(this.formatMessage(LogLevel.WARN, message), data || '');
  }

  error(message: string, error?: any) {
    console.error(this.formatMessage(LogLevel.ERROR, message), error || '');
    
    // En producción, aquí se podría enviar a un servicio de tracking
    if (!this.isDevelopment) {
      // TODO: Integrar con Sentry o similar
    }
  }
}

export const logger = new Logger();
export default logger;
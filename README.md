# 🚀 OSSO - Plataforma de Desarrollo Automatizado

## 📋 Descripción

OSSO es una plataforma de desarrollo automatizado que utiliza React Native y Expo SDK 54 para crear aplicaciones móviles de forma eficiente.

## 🛠️ Stack Tecnológico

- **Framework**: React Native 0.76.5
- **Platform**: Expo SDK 54
- **Language**: TypeScript 5.3.3
- **Backend**: Supabase
- **Navigation**: React Navigation 6.x

## 📁 Estructura del Proyecto

```
OSSO/
├── src/
│   ├── types/           # Tipos TypeScript globales
│   ├── config/          # Configuración de la app
│   ├── constants/       # Constantes (colores, spacing, etc.)
│   ├── utils/           # Utilidades (logger, validators, formatters)
│   ├── services/        # Servicios (API, Supabase)
│   ├── components/      # Componentes reutilizables
│   ├── screens/         # Pantallas de la app
│   └── hooks/           # Custom hooks
├── App.tsx              # Componente principal
├── package.json         # Dependencias
└── tsconfig.json        # Configuración TypeScript
```

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/winosoapp/OSSO.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales de Supabase

# Iniciar el proyecto
npm start
```

## 📱 Desarrollo

```bash
# Iniciar en modo desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en Web
npm run web

# Verificar tipos TypeScript
npm run type-check
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```env
EXPO_PUBLIC_SUPABASE_URL=tu_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
EXPO_PUBLIC_API_URL=https://api.osso.app
EXPO_PUBLIC_ENVIRONMENT=development
```

## 📚 Características

- ✅ TypeScript strict mode
- ✅ Sistema de tipos completo
- ✅ Configuración centralizada
- ✅ Sistema de logging
- ✅ Validadores y formatters
- ✅ Cliente de API con timeout
- ✅ Integración con Supabase
- ✅ Sistema de diseño consistente
- ✅ Navegación configurada

## 🎨 Sistema de Diseño

El proyecto incluye un sistema de diseño consistente con:

- **Colores**: Paleta definida en `src/constants/colors.ts`
- **Espaciado**: Sistema de spacing en `src/constants/spacing.ts`
- **Tipografía**: Font sizes y weights definidos

## 🔐 Seguridad

- No commitear el archivo `.env`
- Usar variables de entorno para credenciales
- Validar todas las entradas de usuario

## 📄 Licencia

Private - © 2024 OSSO

## 👥 Equipo

- **CEO**: Estrategia y dirección
- **CTO**: Desarrollo y arquitectura técnica

---

**Versión**: 1.0.0  
**Expo SDK**: 54  
**React Native**: 0.76.5

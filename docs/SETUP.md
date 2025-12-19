# 🚀 Guía de Setup de OSSO

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: v18 o superior
- **npm**: v9 o superior (o yarn/pnpm)
- **Git**: Para clonar el repositorio
- **Expo CLI**: `npm install -g expo-cli`
- **Cuenta de Supabase**: [supabase.com](https://supabase.com)

### Para desarrollo móvil:
- **iOS**: Xcode (solo macOS)
- **Android**: Android Studio
- **Expo Go**: Instalar desde App Store / Play Store

## Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/winosoapp/OSSO.git
cd OSSO
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Copia el archivo de ejemplo y completa con tus credenciales:

```bash
cp .env.example .env
```

Edita `.env` y completa:

```env
EXPO_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
EXPO_PUBLIC_API_URL=https://api.osso.app
EXPO_PUBLIC_ENVIRONMENT=development
```

### 4. Configurar Supabase

#### Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Copia la URL y la Anon Key
4. Pégalas en tu archivo `.env`

#### Ejecutar Migraciones (Opcional)

Si tienes scripts SQL para la base de datos:

```sql
-- Crear tablas necesarias
-- Ver scripts en /docs/database/
```

### 5. Iniciar la Aplicación

```bash
npm start
```

Esto abrirá Expo DevTools en tu navegador.

## Ejecutar en Dispositivos

### Opción 1: Expo Go (Recomendado para desarrollo)

1. Instala Expo Go en tu dispositivo móvil
2. Escanea el código QR que aparece en la terminal
3. La app se cargará automáticamente

### Opción 2: Simulador iOS (macOS)

```bash
npm run ios
```

### Opción 3: Emulador Android

```bash
npm run android
```

### Opción 4: Web

```bash
npm run web
```

## Verificar la Instalación

Si todo está correcto, deberías ver:

1. ✅ La app se compila sin errores
2. ✅ La pantalla Home se muestra correctamente
3. ✅ Los logs aparecen en la consola

## Solución de Problemas

### Error: "Supabase client not initialized"

**Solución**: Verifica que las variables de entorno en `.env` estén configuradas correctamente.

### Error: "Module not found"

**Solución**: 
```bash
rm -rf node_modules
npm install
```

### Error de TypeScript

**Solución**:
```bash
npm run type-check
```

Esto mostrará los errores de tipos específicos.

### La app no se actualiza en Expo Go

**Solución**: 
1. Cierra la app completamente
2. Vuelve a escanear el código QR
3. Si persiste, ejecuta: `expo start -c` (limpia caché)

### Puerto 8081 en uso

**Solución**:
```bash
lsof -ti:8081 | xargs kill -9
npm start
```

## Scripts Disponibles

```json
{
  "start": "expo start",           // Inicia Expo DevTools
  "android": "expo start --android", // Ejecuta en Android
  "ios": "expo start --ios",         // Ejecuta en iOS
  "web": "expo start --web",         // Ejecuta en Web
  "type-check": "tsc --noEmit"       // Verifica tipos TypeScript
}
```

## Estructura de Desarrollo

### Hot Reload

Los cambios se reflejan automáticamente:
- **Fast Refresh**: Cambios en componentes
- **Full Reload**: Cambios en configuración

### Debugging

1. **Consola del navegador**: Para logs web
2. **React Native Debugger**: Herramienta completa
3. **Flipper**: Debugging avanzado

## Siguientes Pasos

1. ✅ Familiarízate con la estructura del proyecto
2. ✅ Lee la documentación de arquitectura (`docs/ARCHITECTURE.md`)
3. ✅ Revisa los componentes en `src/components/`
4. ✅ Explora los servicios en `src/services/`
5. ✅ Comienza a desarrollar nuevas funcionalidades

## Recursos Útiles

- [Documentación de Expo](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**¿Problemas?** Contacta al equipo de desarrollo.

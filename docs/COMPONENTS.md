# 📦 Guía de Componentes de OSSO

## Componentes Disponibles

### 1. Button

Botón reutilizable con múltiples variantes y tamaños.

#### Props

```typescript
interface ButtonProps {
  title: string;              // Texto del botón
  onPress: () => void;        // Función al presionar
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;         // Deshabilitar botón
  loading?: boolean;          // Mostrar indicador de carga
  fullWidth?: boolean;        // Ocupa todo el ancho
  style?: ViewStyle;          // Estilos personalizados
}
```

#### Ejemplo de Uso

```typescript
import { Button } from '../components';

<Button 
  title="Guardar" 
  onPress={handleSave}
  variant="primary"
  size="medium"
/>

<Button 
  title="Cancelar" 
  onPress={handleCancel}
  variant="outline"
/>

<Button 
  title="Procesando..." 
  onPress={() => {}}
  loading={true}
  disabled={true}
/>
```

---

### 2. Card

Tarjeta contenedora para agrupar contenido.

#### Props

```typescript
interface CardProps {
  children: React.ReactNode;  // Contenido de la tarjeta
  style?: ViewStyle;          // Estilos personalizados
  padding?: number;           // Padding interno
  elevation?: number;         // Elevación/sombra
}
```

#### Ejemplo de Uso

```typescript
import { Card } from '../components';

<Card>
  <Text>Contenido de la tarjeta</Text>
</Card>

<Card padding={20} elevation={4}>
  <Text style={styles.title}>Título</Text>
  <Text>Descripción</Text>
</Card>
```

---

### 3. Input

Campo de texto con label y manejo de errores.

#### Props

```typescript
interface InputProps extends TextInputProps {
  label?: string;             // Etiqueta del input
  error?: string;             // Mensaje de error
  containerStyle?: ViewStyle; // Estilos del contenedor
}
```

#### Ejemplo de Uso

```typescript
import { Input } from '../components';

const [email, setEmail] = useState('');
const [error, setError] = useState('');

<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="Ingresa tu email"
  keyboardType="email-address"
  error={error}
/>

<Input
  label="Contraseña"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  placeholder="••••••••"
/>
```

---

### 4. Loading

Indicador de carga centralizado.

#### Props

```typescript
interface LoadingProps {
  message?: string;           // Mensaje opcional
  fullScreen?: boolean;       // Pantalla completa
}
```

#### Ejemplo de Uso

```typescript
import { Loading } from '../components';

// Loading inline
<Loading message="Cargando datos..." />

// Loading fullscreen
<Loading message="Iniciando..." fullScreen />

// Loading simple
{isLoading && <Loading />}
```

---

## Crear Nuevos Componentes

### Template de Componente

```typescript
/**
 * OSSO - Componente [Nombre]
 * [Descripción breve]
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, FontSize } from '../constants';

interface [Nombre]Props {
  // Props aquí
}

export const [Nombre]: React.FC<[Nombre]Props> = ({
  // Destructure props
}) => {
  return (
    <View style={styles.container}>
      {/* JSX aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos aquí
  },
});

export default [Nombre];
```

### Mejores Prácticas

1. **TypeScript**: Siempre define interfaces para props
2. **Documentación**: Incluye comentarios JSDoc
3. **Estilos**: Usa constantes de diseño (`Colors`, `Spacing`, etc.)
4. **Exportaciones**: Exporta en `components/index.ts`
5. **Reutilización**: Haz componentes genéricos y configurables

### Checklist de Componente

- [ ] Interfaces TypeScript definidas
- [ ] Props documentadas
- [ ] Estilos usando sistema de diseño
- [ ] Responsive (funciona en diferentes tamaños)
- [ ] Accesible (labels, hints)
- [ ] Exportado en `index.ts`
- [ ] Ejemplo de uso en documentación

---

## Sistema de Diseño

### Colores

```typescript
import { Colors } from '../constants';

// Uso
color: Colors.primary
color: Colors.text
backgroundColor: Colors.background
```

### Espaciado

```typescript
import { Spacing } from '../constants';

// Uso
margin: Spacing.md
padding: Spacing.lg
```

### Tipografía

```typescript
import { FontSize, FontWeight } from '../constants';

// Uso
fontSize: FontSize.lg
fontWeight: FontWeight.bold
```

---

## Componentes Futuros

### Planificados

- [ ] **Modal**: Ventana modal reutilizable
- [ ] **Dropdown**: Selector desplegable
- [ ] **Badge**: Etiqueta de estado
- [ ] **Avatar**: Imagen de perfil
- [ ] **ProgressBar**: Barra de progreso
- [ ] **Tabs**: Navegación por pestañas
- [ ] **Toast**: Notificaciones temporales
- [ ] **Switch**: Interruptor on/off
- [ ] **Checkbox**: Casilla de verificación
- [ ] **RadioButton**: Botones de opción

---

**Última actualización**: Fase 1 completada

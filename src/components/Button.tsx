/**
 * OSSO - Componente Button
 * Botón reutilizable con variantes
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize, FontWeight } from '../constants';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const base: ViewStyle = {
      ...styles.button,
      ...styles[`button_${size}`],
      ...(fullWidth && { width: '100%' }),
    };

    switch (variant) {
      case 'primary':
        return { ...base, backgroundColor: Colors.primary };
      case 'secondary':
        return { ...base, backgroundColor: Colors.secondary };
      case 'outline':
        return { ...base, backgroundColor: 'transparent', borderWidth: 1, borderColor: Colors.primary };
      case 'danger':
        return { ...base, backgroundColor: Colors.error };
      default:
        return base;
    }
  };

  const getTextStyle = (): TextStyle => {
    const base: TextStyle = {
      ...styles.text,
      ...styles[`text_${size}`],
    };

    if (variant === 'outline') {
      return { ...base, color: Colors.primary };
    }

    return base;
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        (disabled || loading) && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? Colors.primary : Colors.background} />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
  },
  button_small: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    minHeight: 32,
  },
  button_medium: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    minHeight: 44,
  },
  button_large: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    minHeight: 56,
  },
  text: {
    color: Colors.background,
    fontWeight: FontWeight.semibold,
  },
  text_small: {
    fontSize: FontSize.sm,
  },
  text_medium: {
    fontSize: FontSize.md,
  },
  text_large: {
    fontSize: FontSize.lg,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
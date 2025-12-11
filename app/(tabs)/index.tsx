import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Bienvenido a OSSO
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Tu aplicación móvil lista para usar
          </ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            🚀 Estructura Base
          </ThemedText>
          <ThemedText style={styles.cardText}>
            La aplicación está lista con:
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>• React Native 0.74.0</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Expo SDK 54</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Expo Router (navegación)</ThemedText>
          <ThemedText style={styles.bulletPoint}>• TypeScript</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Tema claro/oscuro</ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            📁 Estructura de Carpetas
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>• app/ - Rutas y pantallas</ThemedText>
          <ThemedText style={styles.bulletPoint}>• components/ - Componentes reutilizables</ThemedText>
          <ThemedText style={styles.bulletPoint}>• constants/ - Constantes y colores</ThemedText>
          <ThemedText style={styles.bulletPoint}>• hooks/ - Custom hooks</ThemedText>
          <ThemedText style={styles.bulletPoint}>• utils/ - Funciones auxiliares</ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            ⚙️ Próximos Pasos
          </ThemedText>
          <ThemedText style={styles.cardText}>
            Define qué tipo de aplicación quieres construir y comenzaremos a desarrollar las funcionalidades específicas.
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
    paddingVertical: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 8,
    marginBottom: 4,
  },
});
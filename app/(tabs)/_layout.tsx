import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderBottomColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          borderBottomWidth: 1,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerTitleStyle: {
          fontWeight: '600',
        },
        tabBarStyle: {
          borderTopColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerTitle: 'OSSO App',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
          tabBarLabel: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          headerTitle: 'Explorar',
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={28} color={color} />,
          tabBarLabel: 'Explorar',
        }}
      />
    </Tabs>
  );
}
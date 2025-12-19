/**
 * OSSO - Aplicación Principal
 * Plataforma de desarrollo automatizado con IA
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
}
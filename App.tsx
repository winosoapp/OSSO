/**
 * SUDO - Aplicación de Sudoku
 * Juego de Sudoku interactivo con React Native
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
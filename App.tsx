import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'

// IMPORTAÇÃO DAS HOOKS
import { AuthProvider } from './src/hooks/auth'

// IMPORTAÇÃO DAS TELAS
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  }) 

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <StatusBar
        style='light'
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </AuthProvider>
  );
}

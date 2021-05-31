import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './screens/Home';

const getFonts = () => Font.loadAsync({
  'nunitoSans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
  'nunitoSans-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
});


export default function App() {

  const [loadedFonts, setLoadedFonts] = useState(false);
  if (loadedFonts) {
    return (
      <Home />
    )
  } else {
    return (
      <AppLoading 
      startAsync={getFonts}
      onFinish={() => setLoadedFonts(true)}
      onError={console.warn}
      />
    )
  }
  
  
}

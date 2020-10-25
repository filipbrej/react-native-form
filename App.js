import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

// Import Routes
import { AppNavigator } from './routes/drawer'

// Load custom fonts
const getFonts = () => {
  return Font.loadAsync({
    'montserrat-regular': require('./assets/fonts/Montserrat-Light.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  })
}

// Screens
import Home from './screens/home'

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)


  if (fontsLoaded) {
    return (
      <AppNavigator />
    );
  } else {
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}
    />
    )
  }
}

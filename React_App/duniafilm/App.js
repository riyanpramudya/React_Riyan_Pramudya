import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import StackNavigator from './navigation/stackNavigator';
import DrawerNavigator from './navigation/drawerNavigator';
import ReviewDetails from './screens/reviewDetails';

const getFont = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
});


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }

}


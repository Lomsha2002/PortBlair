import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet} from 'react-native';
import Navigator from './src/screens/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

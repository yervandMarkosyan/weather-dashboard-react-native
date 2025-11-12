/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Weather from './Weather';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


function App() {
  return (

    <SafeAreaProvider>
      <View>
        <Weather />
      </View>

    </SafeAreaProvider >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

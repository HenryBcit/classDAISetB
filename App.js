/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './comps/Main';
import styles from './styles/AppStyles';
import Dora from './comps/Dora';

function App(){
  return (
    <View style={styles.app}>
      <Text>Hi App</Text>
      <Main />
      <Dora />
    </View>
  )
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Ash from './ash/Ash';
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

function App(){
  return (
    <View style={styles.app}>
      <Text>Hi App</Text>
      <Main />
      <Ash />
    </View>
  )
}

export default App;

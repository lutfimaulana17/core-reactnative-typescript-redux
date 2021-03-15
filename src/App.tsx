import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import { Provider } from 'react-redux';
import Router from './router';
import store from './redux/store';
import { colors } from './utils';

const App = () => {
  return (
    <Provider store={store}> 
      <View style={styles.statusBar}>
          <StatusBar translucent backgroundColor={colors.mainDark} barStyle="light-content" />
      </View>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;


let StatusBarHeightIos = 20;
switch (DeviceInfo.getModel()) {
  case 'iPhone X':
      StatusBarHeightIos = 30
    break;
  case 'iPhone XR':
      StatusBarHeightIos = 30
    break;  
  case 'iPhone XS Max':
      StatusBarHeightIos = 30
    break;    
  case 'iPhone Xs':
      StatusBarHeightIos = 30
    break;  
  case 'iPhone 11':
      StatusBarHeightIos = 44
    break;
  case 'iPhone 11 Pro':
      StatusBarHeightIos = 44
    break;
  case 'iPhone 11 Pro Max':
      StatusBarHeightIos = 44
    break;   
  default:
       StatusBarHeightIos = 20;
    break;
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? StatusBarHeightIos : StatusBar.currentHeight

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: colors.mainDark
  }
})

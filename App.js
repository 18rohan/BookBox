import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import BooksNavigator from './navigators/BooksNavigation';
import  { enableScreens } from 'react-native-screens';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import BooksReducer from './store/reducer/BooksReducer';

enableScreens();

const RootReducer = combineReducers({
  books: BooksReducer,
});

const store = createStore(RootReducer);



const fetchFonts = async () => {
  await Font.loadAsync({
    'OpenSansLight': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
    
  });
};

export default function App() {
  const [fontLoaded , setfontLoaded] = useState(false);
  
  
  if (!fontLoaded){
    <AppLoading 
    startAsync = {fetchFonts} 
    onFinish = {() => setfontLoaded(true)}

    />
  }
  return (
    <Provider store = {store}>
    <BooksNavigator />
    </Provider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

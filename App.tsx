/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View as SafeAreaView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button';
import MyKeyboard from './src/components/MyKeyboard';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/colors';



const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>

      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000000'}]}>

        <StatusBar
       barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme === 'light' ? Colors.lighter : Colors.darker}
        />
        <Switch 
          value={theme === 'light'}
          onValueChange={ () => setTheme( theme === 'light' ? 'dark' : 'light' )}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center', //eje X-X
    justifyContent: 'flex-start', //eje Y-Y
  },
});

export default App;

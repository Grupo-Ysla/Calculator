import {useState} from 'react';
import React, {type PropsWithChildren} from 'react';
import {ThemeContext} from './src/context/ThemeContext';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Switch,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {myColors} from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

const initialContextValues = {
  mode: 'light',
  calculationHistory: [
    {
      firtNumber: '',
      secondNumber: '',
      operationes: '',
      result: 'null',
    },
  ],
};

const App = () => {
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState(initialContextValues);

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme.mode === initialContextValues.mode
            ? styles.container
            : [styles.container, {backgroundColor: 'black'}]
        }>
        <StatusBar
          barStyle={
            theme.mode === initialContextValues.mode
              ? 'light-content'
              : 'dark-content'
          }
          backgroundColor={
            theme.mode === initialContextValues.mode
              ? Colors.lighter
              : Colors.darker
          }
        />
        <Switch
          value={theme.mode === initialContextValues.mode}
          onValueChange={() =>
            setTheme({
              ...initialContextValues,
              mode: theme.mode === initialContextValues.mode ? 'dark' : 'light',
            })
          }
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center', //horizontal(x)
    justifyContent: 'flex-start',
    // flexDirection: 'row',
    // borderWidth: 1,
    height: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

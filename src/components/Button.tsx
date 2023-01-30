import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../context/ThemeContext'; //para saber el valor del tema
import {Styles} from '../styles/GlobalStyles';

interface ButtomProps {
  //contiene las propiedades de cada boton
  onPress: () => void; //Prop. al presionar que es una funcion
  title: string;
  isBlue?: boolean; // son variables opcionales por eso llevan el signo de interrogacion
  isGray?: boolean;
}

const Button = ({onPress, title, isBlue, isGray}: ButtomProps) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue //
          : isGray
          ? Styles.btnGray
          : theme.mode === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}>
      <Text
        style={
          isBlue || isGray
            ? Styles.snallTextLight
            : theme.mode === 'dark'
            ? Styles.snallTextLight
            : Styles.snallTextDark
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

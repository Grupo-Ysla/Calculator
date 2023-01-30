import React, {useContext, useState} from 'react';
import Button from './Button';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {Styles} from '../styles/GlobalStyles';
import {myColors} from '../styles/Colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThemeContext} from '../context/ThemeContext';
import HistoryModal from './HistoryModal';

const MyKeyboard = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState<Number | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const theme = useContext(ThemeContext);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };
  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };
  const firstNumberDispaly = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, {color: myColors.result}]
              : [
                  Styles.screenFirstNumber,
                  {fontSize: 50, color: myColors.result},
                ]
          }>
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}> {firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 5) {
      return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 70}]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>
          {firstNumber}
        </Text>
      );
    }
  };
  return (
    <View style={Styles.viewBotton_}>
      <View style={{alignItems: 'flex-end', height: 100}}>
        <TouchableOpacity
          style={{
            backgroundColor:
              theme.mode === 'light' ? myColors.btnDark : myColors.light,
            borderRadius: 15,
            height: 30,
            justifyContent: 'center',
            width: 50,
          }}
          onPress={() => setShowHistory(true)}>
          <Text
            style={{
              color: theme.mode === 'light' ? myColors.light : myColors.dark,
              fontSize: 13,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            History
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        <Text style={Styles.screentSecondNumber}>
          {secondNumber}
          <Text style={{color: 'purple', fontSize: 50, fontWeight: '500'}}>
            {operation}
          </Text>
        </Text>
        {firstNumberDispaly()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationPress('+/-')}
        />
        <Button title="%" isGray onPress={() => handleOperationPress('%')} />
        <Button title="÷" isBlue onPress={() => handleOperationPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress('7')} />
        <Button title="8" onPress={() => handleNumberPress('8')} />
        <Button title="9" onPress={() => handleNumberPress('9')} />
        <Button title="x" isBlue onPress={() => handleOperationPress('*')} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress('4')} />
        <Button title="5" onPress={() => handleNumberPress('5')} />
        <Button title="6" onPress={() => handleNumberPress('6')} />
        <Button title="-" isBlue onPress={() => handleOperationPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress('1')} />
        <Button title="2" onPress={() => handleNumberPress('2')} />
        <Button title="3" onPress={() => handleNumberPress('3')} />
        <Button title="+" isBlue onPress={() => handleOperationPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress('.')} />
        <Button title="0" onPress={() => handleNumberPress('0')} />
        <Button
          title="<="
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
      <HistoryModal visible={showHistory} setShowHistory={setShowHistory} />
    </View>
  );
};
export default MyKeyboard;

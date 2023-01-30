import React, {useContext} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {myColors} from '../styles/Colors';

type Props = {
  visible: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
};

const HistoryModal = ({visible, setShowHistory}: Props) => {
  const theme = useContext(ThemeContext);
  const isLight = theme.mode === 'light' ? myColors.dark : myColors.dark;

  return (
    <Modal visible={visible}>
      <View>
        <TouchableOpacity onPress={() => setShowHistory(false)}>
          <Text>Cerrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableCalculus}>
          <Text style={[styles.textCalculus, {color: isLight}]}>1</Text>
          <Text style={[styles.textCalculus, {color: isLight}]}>+</Text>
          <Text style={[styles.textCalculus, {color: isLight}]}>3</Text>
          <Text style={[styles.textCalculus, {color: isLight}]}>=</Text>
          <Text style={[styles.textCalculus, {color: isLight}]}>4</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default HistoryModal;

const styles = StyleSheet.create({
  textCalculus: {
    fontSize: 20,
    fontWeight: '600',
  },
  TouchableCalculus: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
});

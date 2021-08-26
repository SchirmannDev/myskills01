import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F0E521',
    padding: 15,
    alignItems: 'center',
    borderRadius: 45,
    marginTop: 10,
  },
  buttonText: {
    color: '#f5f4f5',
    fontSize: 20,
  },
});

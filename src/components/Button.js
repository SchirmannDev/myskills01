import React from 'react';

import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export function Button() {
  return (
    <TouchableOpacity
      style={styles.button}
      //onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f7e900',
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

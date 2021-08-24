import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacity key="1" style={styles.buttonSkill}>
      <Text style={styles.textSkill}>skill</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonSkill: {
    backgroundColor: '#EE346293',
    paddingb: 20,
    borderRadius: 45,
    marginTop: 15,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

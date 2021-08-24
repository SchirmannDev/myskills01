import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hellow World Bitches</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#444"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      {mySkills.map(skill => (
        <TouchableOpacity style={styles.buttonSkill}>
          <Text style={styles.textSkill}>Teste</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#995566',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textDecorationColor: '#ccc',
  },
  input: {
    backgroundColor: '#EE346293',
    borderRadius: 75,
    marginTop: 15,
    color: '#fff',
  },
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
  buttonSkill: {
    backgroundColor: '#EE346293',
    padding: 20,
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

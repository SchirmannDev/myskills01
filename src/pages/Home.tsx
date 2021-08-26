import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getUTCHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vinda, Cíntia!</Text>
      <Text style={styles.greetings}> {greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#444"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.titleSkill]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
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
    borderRadius: 15,
    marginTop: 15,
    color: '#fff',
    padding: 15,
  },
  greetings: {},
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSkill: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
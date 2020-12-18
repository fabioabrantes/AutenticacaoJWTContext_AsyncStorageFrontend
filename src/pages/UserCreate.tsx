import React,{useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

const UserCreate: React.FC = () => {
  const navigation = useNavigation();
  
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  async function createUser(){
    const usuario = {
      name,
      email,
      password 
    }

    const user = await api.post('users',usuario);
    console.log(user);

    navigation.navigate('SignIn');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}> Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}> Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}> Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <RectButton style={styles.cadastrarButton} onPress={createUser}>
        <Text style={styles.cadastrarText}> Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  label:{
    color:'#3d16ca',
    marginTop:15,
    fontWeight:'bold',
    fontSize:20
  },
  input:{
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 30,
    marginVertical: 18,
    marginHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  cadastrarButton:{
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },
  cadastrarText:{
    fontSize:18,
  }
})
export default UserCreate;
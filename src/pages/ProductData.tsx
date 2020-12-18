import React,{useState} from 'react';
import { ScrollView, View,StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import api from '../services/api';
// import { Container } from './styles';

const ProductData: React.FC = () => {
  const navigation = useNavigation();
  
  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [price, setPrice]= useState('');

  async function criarProduto(){
    const produto ={
      name,
      description,
      price: parseFloat(price)
    }
    await api.post('products',produto);
    navigation.navigate('ListProducts');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}> Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}> Descrição</Text>
      <TextInput
        style={[styles.input, {height:110}]}
        value={description}
        multiline
        onChangeText={setDescription}
      />

      <Text style={styles.label}> Preço</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />
      <RectButton style={styles.cadastrarButton} onPress={criarProduto}>
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
export default ProductData;
import React,{useState} from 'react';
import { View,StyleSheet, Text, TextInput, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../context/AuthenticateContext';


const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const {login} = useAuth();

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  
  function handleCreateUser(){
    navigation.navigate('UserCreate');
  }
  function handlerLogin(email:string, password:string){
    login(email,password);
    /* navigation.navigate('ListProducts'); */
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}> Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="digite seu email"
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry={true}
        placeholder="digite sua senha"
        onChangeText={setPassword}
      />
      <RectButton style={styles.sigInButton} onPress={()=>{handlerLogin(email, password)}}>
        <Text style={styles.sigInText}> Logar</Text>
      </RectButton>
      <RectButton style={styles.sigInButton} onPress={handleCreateUser}>
        <Text style={styles.sigInText}> cadastro</Text>
      </RectButton>
    </View>
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
  sigInButton:{
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },
  sigInText:{
    fontSize:18,
  }
})
export default SignIn;
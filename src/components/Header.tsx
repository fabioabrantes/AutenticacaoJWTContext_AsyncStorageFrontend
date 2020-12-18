import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'
// import { Container } from './styles';
interface propHeader{
  titulo:string;
}
const Header: React.FC<propHeader> = ({titulo}) => {
  const navigation = useNavigation()
 
  function goBackToListProducts(){
    navigation.navigate('ListProducts');
  }
  
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBackToListProducts}>
        <Feather name="arrow-left" size={24} color="blue" />
      </BorderlessButton>
      <Text style={styles.title}> {titulo} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    padding:24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    marginRight:100,
    color: 'blue'
    

  }
})
export default Header;
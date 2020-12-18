import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';

import api from '../services/api';

// import { Container } from './styles';
interface Product{
  id:number;
  name:string;
  price:number;
  description:string;
}
interface propsId{
  id:number;
}
const ProductDetails: React.FC = () => {
  const route = useRoute();

  const [product,setProduct]= useState<Product>();
  const {id} = route.params as propsId;

  useEffect(()=>{
    api.get(`products/${id}`).then(response=>{
      setProduct(response.data);
    })
  },[id]);

  if(!product){
    return (
      <View style={styles.container}>
        <Text style={styles.CarregandoText}> Carregando ...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
      <Text style={styles.nameProduct}>{product.name}</Text>
      <Text style={styles.descriptionProduct}>Descrição: {product.description}</Text>
      <Text style={styles.priceProduct}>Preço: {product.price} R$</Text>
      </View>
    </View>
  )
    
  };

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  CarregandoText:{
    padding:24,
    fontSize:30,
    fontWeight:'bold',
    color:'#b62d2d'
  },
  detailContainer:{
    marginHorizontal:20,
    marginVertical:20
  },
  nameProduct:{
    color:'#2e20af',
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  descriptionProduct:{
    fontWeight:'400',
    color: '#30810a',
    lineHeight: 24,
    marginTop: 16,
    fontSize:20
  },
  priceProduct:{
    color:'#30810a',
    fontSize:20,
    marginTop:16
  }
})
export default ProductDetails;
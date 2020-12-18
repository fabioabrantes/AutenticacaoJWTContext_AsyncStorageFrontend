import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'

import ListProducts from '../pages/ListProducts';
import ProductData from '../pages/ProductData';
import ProductDetails from '../pages/ProductDetails';

import Header from  '../components/Header';



const {Navigator,Screen} = createStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    
      <Navigator screenOptions={{headerShown:false}}>
        <Screen 
          name='ListProducts' 
          component={ListProducts}
        />
        <Screen 
          name='ProductData' 
          component={ProductData}
          options={{
            headerShown:true, 
            header:()=><Header titulo='Tela de Cadastro'/>}}
        />
        <Screen 
          name='ProductDetails' 
          component={ProductDetails}
          options={{
            headerShown:true, 
            header:()=><Header titulo='Detalhes do produto'/>}}
        />
      </Navigator>
    

  );
}

export default AppRoutes;
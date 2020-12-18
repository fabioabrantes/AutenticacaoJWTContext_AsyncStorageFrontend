import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  itemProductContainer:{
    height:30,
    paddingBottom:8,
    marginTop:30,
    padding:24,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  itemProductTitle:{
    color:'#393c9e',
    fontSize:24,
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    marginTop:30,
    textAlign:'center'
  },
  itemProductName:{
    color:'#8889a5',
    fontSize:30,
    fontWeight:'400',
    width:100,
    marginLeft:30
    
  },
  goToProductDetailButton:{
    width:100,
    height:30,
    backgroundColor: "#15d686",
    borderRadius:24,
    marginRight:60,

    justifyContent:'center',
    alignItems:'center'
  },
  createProductContainer:{  
    backgroundColor:"#8889a5",
    borderRadius:28,
    height:60,
    paddingLeft:24,
    marginTop:80,
    marginHorizontal:20,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:3
  },
  createProductText:{
    color:'#fff',
    fontSize:28,
    fontWeight:'bold',
    marginLeft:10
  },
  createProductButton:{
    width:80,
    height:50,
    backgroundColor: "#15ced6",
    borderRadius:28,
    marginRight:10,

    justifyContent:'center',
    alignItems:'center'
  }

});
export default styles;
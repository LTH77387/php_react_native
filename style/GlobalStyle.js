import { StyleSheet } from "react-native";
const GlobalStyle = StyleSheet.create({
    container: {
      flex: 1,   
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    logo: {
        width: 150,
        height: 150        
      },
      loginBtn : {
        marginTop:'7%',
        width:'80%'
    },
    textInput:{
      height: 50, 
      width: 280,
      marginTop:'5%',
      backgroundColor:'#fff'
    }
  });
  export default GlobalStyle;
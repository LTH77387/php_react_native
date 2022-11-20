import { TextInput } from "react-native-paper";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../theme/theme";
import { Button } from 'react-native-paper';
import FooterComponent from "../component/FooterComponent";
import { BackHandler,AppRegistry,Alert } from "react-native";
import { useState } from "react";
import axios from "axios";
export default function LoginScreen({history}) {
    BackHandler.addEventListener('hardwareBackPress', function () {
        history.push('/');
        return true;
    });
     //hook
     const [userName, setName] = useState();
     const [userEmail, setEmail] = useState();
     const[userPhone,setPhone]=useState();
     const[userPassword,setPassword]=useState();
     const LoginAuth=async()=>{
        // if(userName.length ===0){
        //     alert("Need to fill name")
        // }else if(userEmail.length === 0){
        //     alert("Need to fill email");
        // }else if(userPhone.length===0){
        //     alert("Need to fill phone")
        // }else if(userPassword.length===0){
        //     alert("Nedd to fill password");
        // }else{
            // const url="https://http://localhost/php%20data%20recieve/insert_info.php";
            // const url="http://localhost/php_data_recieve/index.php";
            const postData ={
                name:userName,
                email:userEmail,
                phone:userPhone,
                password:userPassword,
            }
            await axios.post("http://192.168.99.25/php_data_recieve/index.php",postData).then((res)=>{
                alert("Register Successfully!!");
            }).catch((res)=>{
                alert(res.postData);
            });
           
            // let data = new FormData();
            // data.append('name',userName);
            // data.append('email',userEmail);
            // data.append('phone',userPhone);
            // data.append('password',userPassword);
            // axios.post(url,data).then((res)=>{
            //     alert(res.data)
            // }).catch(error=>alert(error));
        // }
       
// fetch('https://github.com/LTH77387/php-data-recieve-/blob/master/insert_info.php', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
   
//       name: userName,
   
//       email: userEmail,
   
//      phone: userPhone,

//     password : userPassword
   
//     })
   
//   }).then((response) => response.json())
//         .then((responseJson) => {
   
//   // Showing response message coming from server after inserting records.
//           Alert.alert(responseJson);
   
//         }).catch((error) => {
//           console.error(error);
//         });
     }
    
    return (
        <>
    
        <TextInput
            label="Name : "
            keyboardType="default"
            style={GlobalStyle.textInput}
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            onChangeText={name => setName(name)}
        />
        <TextInput
            label="Email : "
            keyboardType="email-address"
            style={GlobalStyle.textInput}
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            onChangeText={email => setEmail(email)}
         
        />
        <TextInput
        label="Phone :"
        keyboardType="number-pad"
        style={GlobalStyle.textInput}
        mode="outlined"
        theme={{ colors: { primary: theme.colors.secondary } }}
        onChangeText={phone => setPhone(phone)}
        />
        <TextInput 
        label="Password :"
        keyboardType="default"
        style={GlobalStyle.textInput}
        mode="outlined"
        theme={{colors : {primary: theme.colors.secondary}}}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        />
        <Button icon="login" style={GlobalStyle.loginBtn} mode="contained-tonal" buttonColor={theme.colors.primary} labelStyle={{ color: '#fff' }} onPress={() =>LoginAuth()}>
            Login
        </Button>
        <FooterComponent />
    </>
    )
}


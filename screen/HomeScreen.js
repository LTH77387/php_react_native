import { View,Text } from "react-native";
import FooterComponent from "../component/FooterComponent";
import { Button } from 'react-native-paper';
import GlobalStyle from "../style/GlobalStyle";
import theme from "../theme/theme";
export default function HomeScreen({history}){
    return (
        <>
        <View>
        <Button icon="login" style={GlobalStyle.loginBtn} mode="contained-tonal" buttonColor={theme.colors.primary} labelStyle={{ color: '#fff' }} onPress={() => history.push("/login")}>
                Login
            </Button>
                 
        </View>
        <FooterComponent />   
        </>
    )
}
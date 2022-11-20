import { Linking,View } from "react-native";
import { Text } from "react-native-paper";
export default function FooterComponent(){
    return(
        <View style={{position:'absolute',bottom:10}}>
        <Text variant="labelLarge">Powered By : <Text style={{color:'#0B0B45',fontWeight:'bold'}}  onPress={() => Linking.openURL('fb://profile/100021938644686')}>Linn Thit </Text></Text>
        </View>
    )
}
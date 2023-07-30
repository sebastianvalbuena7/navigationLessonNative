import { View, Text, Button } from "react-native"
import { globalStyle } from "../styles/global"

const Contacts = ({navigation}: any) => {
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Contacts</Text>
            <Button title="Go to Home" onPress={() => navigation.jumpTo('Home')}/>
        </View>
    )
}

export default Contacts
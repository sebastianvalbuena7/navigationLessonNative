import { View, Text } from "react-native"
import { globalStyle } from "../styles/global"

const Settings = () => {
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Settings</Text>
        </View>
    )
}

export default Settings
import { View, Text } from "react-native"
import { globalStyle } from "../styles/global"

const Profile = () => {
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Profile</Text>
        </View>
    )
}

export default Profile
import { View, Text, Button } from "react-native"
import { globalStyle } from '../styles/global'
import { useNavigation } from "@react-navigation/native"
import { ScreenNavigationProp } from "../constants/type"

const Home = () => {
    const navigation = useNavigation<ScreenNavigationProp>()
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Home</Text>
            <Button
                onPress={() => navigation.navigate('Settings')}
                title="Go to settings" />
        </View>
    )
}

export default Home
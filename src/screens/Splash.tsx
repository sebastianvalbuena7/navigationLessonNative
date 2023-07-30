import { View, Text, ActivityIndicator } from 'react-native'
import { globalStyle } from '../styles/global'

const Splash = () => {
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Welcome</Text>
            <ActivityIndicator size='large'/>
        </View>
    )
}

export default Splash
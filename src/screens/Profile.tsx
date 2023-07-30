import { View, Text, Button } from "react-native"
import { globalStyle } from "../styles/global"
import { useDispatch } from 'react-redux'
import { signOut } from "../features/auth/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const dispatch = useDispatch()
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Profile</Text>
            <Button title="Sign Out" onPress={async () => {
                dispatch(signOut())
                await AsyncStorage.removeItem('@token')
            }} />
        </View>
    )
}

export default Profile
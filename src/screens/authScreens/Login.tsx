import { useState } from 'react'
import { View, Text } from "react-native"
import { globalStyle } from "../../styles/global"
import MyInput from "../../components/MyInput"
import MyButton from "../../components/MyButton"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { signIn } from '../../features/auth/auth'

const Login = ({ navigation }: any) => {
    const [token, setToken] = useState('')
    const dispatch = useDispatch()

    const save = async (value: string) => {
        try {
            await AsyncStorage.setItem('@token', value)
            dispatch(signIn(value))
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Login</Text>
            <MyInput label={'Email'} value={token} onChangeText={setToken} />
            <MyInput label={'Password'} secureTextEntry={true} />
            <MyButton title={'Sign In'} onPress={() => save(token)} />
            <MyButton title={'Sign Up'} onPress={() => navigation.navigate('SignUp')} />
        </View>
    )
}

export default Login
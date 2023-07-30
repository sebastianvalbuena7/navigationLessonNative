import { View, Text } from "react-native"
import { globalStyle } from "../../styles/global"
import MyInput from "../../components/MyInput"
import MyButton from "../../components/MyButton"

const SignUp = ({navigation}: any) => {
    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>SignUp</Text>
            <MyInput label={'Email'}/>
            <MyInput label={'Password'} secureTextEntry={true}/>
            <MyButton title={'Sign Up'}/>
            <MyButton title={'Login'} onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}

export default SignUp
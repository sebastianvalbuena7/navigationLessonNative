import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import MyStack from "./MyStack"
import MyBottomTab from "./myBottomTab"
import MyDrawer from "./MyDrawer"
import AuthStack from "./AuthStack"
import { useSelector, useDispatch } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { restoreToken } from "../features/auth/auth"
import Splash from "../screens/Splash"

export default function RootNavigator() {
    const { userToken, isLoading } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()

    const getValue = async () => {
        try {
            const value = await AsyncStorage.getItem('@token')
            if (value !== null) {
                dispatch(restoreToken(value))
            } else {
                dispatch(restoreToken(null))
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getValue()
    }, [])

    if(isLoading) return <Splash/>
    return (
        <NavigationContainer>
            {/* <MyStack />  */}
            {userToken ? <MyDrawer /> : <AuthStack />}
            {/* <MyDrawer /> */}
            {/* <MyBottomTab /> */}
        </NavigationContainer>
    )
}
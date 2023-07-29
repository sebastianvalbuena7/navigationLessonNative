import { NavigationContainer } from "@react-navigation/native"
import MyStack from "./MyStack"
import MyBottomTab from "./myBottomTab"

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
            {/* <MyBottomTab /> */}
        </NavigationContainer>
    )
}
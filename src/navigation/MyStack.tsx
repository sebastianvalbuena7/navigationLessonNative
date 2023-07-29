import { View, Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import Settings from "../screens/Settings"
import { Color } from "../constants/colors"
import MyBottomTab from "./myBottomTab"

const HomeStack = createStackNavigator()

function CustomHeader({ title }: any) {
    return (
        <View
            style={{
                height: 80,
                width: '100%',
                backgroundColor: Color.secondary,
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.light, marginBottom: 10 }}>
                {title}
            </Text>
        </View>
    )
}

export default function MyStack() {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                presentation: 'modal',
                gestureEnabled: true,
                // title: 'Something',
                // header: ({route, navigation, options, back}) => <CustomHeader title={route.name} />,
            }}
        >
            <HomeStack.Screen name="Root" component={MyBottomTab} />
            <HomeStack.Group screenOptions={{ headerShown: true }}>
                <HomeStack.Screen name="Settings" component={Settings} options={{
                    headerBackTitle: 'Home',
                    headerBackTitleStyle: { color: 'red' }
                }}
                // options={{
                //     title: 'nothing',
                //     headerTitleAlign: 'center',
                //     presentation: 'modal', // Animacion presentation
                //     gestureEnabled: false, // Gestures
                //     keyboardHandlingEnabled: true // Teclado 
                // }}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Settings from "../screens/Settings"
import MyStack from "./MyStack"
import { Entypo } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Color } from "../constants/colors"

const MyTab = createBottomTabNavigator()

export default function MyBottomTab() {
    
    return (
        <MyTab.Navigator screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: Color.secondary
        }}>
            <MyTab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({color}) => <Entypo name="home" size={30} color={color} />
            }}  />
            <MyTab.Screen name="Profile" component={Profile} options={{
                tabBarBadge: 1,
                tabBarBadgeStyle: {backgroundColor: 'tomato', color: Color.light},
                tabBarIcon: ({color}) => <FontAwesome name="user" size={28} color={color} />
            }}/>
            {/* <MyTab.Screen name="Settings" component={Settings} /> */}
        </MyTab.Navigator>
    )
}
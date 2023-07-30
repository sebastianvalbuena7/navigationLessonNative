import { createDrawerNavigator } from "@react-navigation/drawer"
import Notifications from "../screens/Notifications"
import MyStack from "./MyStack"
import { Color } from "../constants/colors"

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: Color.secondary,
            drawerType: 'slide'
        }}>
            <Drawer.Screen name="Stack" component={MyStack} options={{
                headerShown: false
            }} />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    )
}

export default MyDrawer
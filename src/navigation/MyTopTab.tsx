import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Contacts from "../screens/Contacts"
import Home from "../screens/Home"

const Tab = createMaterialTopTabNavigator()

import React from 'react'
import { Color } from '../constants/colors';
import { TabBarItem } from "react-native-tab-view"

const MyTopTab = () => {
    return (
        <Tab.Navigator
            // initialRouteName="Contacts"
            // tabBarPosition= 'bottom'
            screenOptions={{
                tabBarLabelStyle: {
                    color: Color.light
                },
                tabBarIndicatorStyle: {
                    borderColor: Color.secondary
                },
                tabBarStyle : {
                    backgroundColor: Color.secondary
                }
            }}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contacts" component={Contacts} />
        </Tab.Navigator>
    )
}

export default MyTopTab
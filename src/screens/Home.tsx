import { View, Text, Button } from "react-native"
import { globalStyle } from '../styles/global'
import { useDrawerStatus } from '@react-navigation/drawer'

const Home = ({ navigation }: any) => {
    const isDrawerOpen = useDrawerStatus()

    return (
        <View style={globalStyle.screenContainer}>
            <Text style={globalStyle.title}>Home</Text>
            {isDrawerOpen === 'open' ? (
                <Text style={globalStyle.title}>Open</Text>
            ) : (
                <Text style={globalStyle.title}>Close</Text>
            )}
            <Button
                onPress={() => navigation.navigate('Settings')}
                title="Go to settings" />

            <Button
                onPress={() => navigation.openDrawer()}
                title="Go to drawer" />

            <Button
                onPress={() => navigation.closeDrawer()}
                title="Close drawer" />
        </View>
    )
}

export default Home
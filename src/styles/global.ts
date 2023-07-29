import { StyleSheet } from 'react-native'
import { Color } from '../constants/colors'

export const globalStyle = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.light
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Color.secondary
    }
})
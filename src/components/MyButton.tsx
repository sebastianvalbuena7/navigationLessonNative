import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Color } from '../constants/colors';

interface Props {
    title: string,
    onPress?: () => void
}

const MyButton = ({title, onPress}: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 45,
        backgroundColor: Color.primary,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: Color.light,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default MyButton
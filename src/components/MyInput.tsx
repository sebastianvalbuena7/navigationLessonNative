import { TextInput, Text, View, StyleSheet } from "react-native"
import { Color } from "../constants/colors"
import { Dispatch, SetStateAction } from "react"

interface Props {
    label: string, 
    value?: string,
    onChangeText?: Dispatch<SetStateAction<string>>,
    secureTextEntry?: boolean
}

const MyInput = ({label, value, onChangeText, secureTextEntry}: Props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={label}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 45,
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: Color.light,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.primary
    },
    input: {
        
    }
})

export default MyInput

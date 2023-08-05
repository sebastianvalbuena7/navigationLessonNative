import { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import MyInput from "./MyInput"
import { Color } from "../constants/colors"

interface Props {
    handleAddContact: (name: string) => void
}

export const AddContact = ({handleAddContact}: Props) => {
    const [name, setName] = useState('')

    const handleAdd = () => {
        setName('')
        handleAddContact(name)
    }

    return (
        <View style={styles.container}>
            <View style={{width: '80%'}}>
                <MyInput label='Add Contact' value={name} onChangeText={setName} />
            </View>
            <Button title="Add" color={Color.primary} onPress={handleAdd} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '5%',
        width: '100%'
    }
})
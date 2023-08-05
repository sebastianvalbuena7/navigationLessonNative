import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import MyInput from './MyInput';

interface Props {
    contact: any
    handleChangeContact: (contact: any) => void
    handleIdContact: (id: number) => void
}

export const Contact = ({ contact, handleChangeContact, handleIdContact }: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    let contactContainer
    if (isEditing) {
        contactContainer = (
            <View>
                <MyInput label='' value={contact.name} onChangeText={(text: any) => onchange({
                    ...contact,
                    name: text
                })} />
            </View>
        )
    } else {
        contactContainer = (
            <View>
                <Text>{contactContainer}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>{contact.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        width: '100%',
        flexDirection: 'row'
    }
})
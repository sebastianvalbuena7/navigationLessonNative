import { useState, useReducer } from 'react'
import { View } from "react-native"
import { globalStyle } from "../styles/global"
import { AddContact } from "../components/AddContact"
import { ContactList } from '../components/ContactList'
import { contactReducer } from '../reducers/contactReducer'

const Contacts = () => {
    // const [contacts, setContacts] = useState<{}[]>(initialContacts)
    const [contacts, dispatch] = useReducer(contactReducer, initialContacts)

    const handleAddContact = (name: string) => dispatch({type: "ADD", id: nextId++, name})

    const handleIdContact = (id: number) => dispatch({type: "DELETE", id})

    const handleChangeContact = (contact: any) => dispatch({type: "CHANGE", contact})

    // useState 
    // const handleAddContact = (name: string) => {
    //     setContacts([...contacts, {
    //         id: nextId + 1,
    //         name
    //     }])
    // }

    // const handleIdContact = (id: number) => setContacts(contacts.filter((contact: any) => contact.id !== id))

    // const handleChangeContact = (contact: any) => {
    //     setContacts(contacts.map((c: any) => c.id === contact.id ? contact : c))
    // }

    return (
        <View style={globalStyle.simpleContainer}>
            <AddContact handleAddContact={handleAddContact} />
            <ContactList contacts={contacts} handleChangeContact={handleChangeContact} handleIdContact={handleIdContact} />
        </View>
    )
}

let nextId = 3

const initialContacts = [
    {
        id: 0,
        name: 'Sara Lee'
    },
    {
        id: 1,
        name: 'Jon Dow'
    },
    {
        id: 2,
        name: 'Jack Lee'
    }
]

export default Contacts
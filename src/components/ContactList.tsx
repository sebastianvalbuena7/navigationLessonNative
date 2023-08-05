import { useState } from "react"
import { Button, ScrollView, StyleSheet, View, Text, Image, Pressable } from "react-native"
import { Contact } from "./Contact"

interface Props {
    contacts: any[],
    handleChangeContact: (contact: any) => void,
    handleIdContact: (id: number) => void
}

export const ContactList = ({contacts, handleChangeContact, handleIdContact}: Props) => {
    return (
        <ScrollView>
            {contacts.map((contact:any, index: number) => <Contact key={index} handleChangeContact={handleChangeContact} handleIdContact={handleIdContact} contact={contact}/>)}
        </ScrollView>
    )
}
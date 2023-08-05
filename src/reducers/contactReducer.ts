export function contactReducer(contacts: any, action: any) {
    switch(action.type) {
        case 'ADD': {
            return [...contacts, { id: action.id, name: action.name }]
        }
        case 'DELETE': {
            return contacts.filter((contact: any) => contact.id !== action.id)
        }
        case 'CHANGE': {
            return contacts.map((c: any) => c.id === action.contact.id ? action.contact : c)
        }
        default: {
            throw new Error('Unknown action type')
        }
    }
}
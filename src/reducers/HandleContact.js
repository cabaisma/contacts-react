const initialState = []

const HandleContact = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload]
        case 'DELETE_CONTACT':
            return state.filter((contact) => contact.id !== action.payload)
        case 'DELETE_ALL':
            return []
        default:
            return state
    }
}

export default HandleContact

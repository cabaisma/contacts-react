const initialState = []

const EditContact = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_CONTACT':
            return [...state, action.payload]
        case 'CLEAR_EDIT_CONTACT':
            return []
        default:
            return state
    }
}

export default EditContact

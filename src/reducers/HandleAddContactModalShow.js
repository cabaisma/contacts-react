const HandleAddContactModalShow = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_HIDE_ADD_CONTACT_MODAL':
            return !state
        default:
            return state
    }
}

export default HandleAddContactModalShow

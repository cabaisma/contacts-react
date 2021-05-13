const HandleEditContactModalShow = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_HIDE_EDIT_CONTACT_MODAL':
            return !state
        default:
            return state
    }
}

export default HandleEditContactModalShow

import HandleAddContactModalShow from './HandleAddContactModalShow'
import HandleEditContactModalShow from './HandleEditContactModalShow'
import HandleContact from './HandleContact'
import EditContact from './EditContact'
import { combineReducers } from 'redux'

const GlobalReducers = combineReducers({
    HandleAddContactModalShow,
    HandleEditContactModalShow,
    HandleContact,
    EditContact,
})

export default GlobalReducers

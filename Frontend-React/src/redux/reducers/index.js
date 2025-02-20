import { combineReducers } from "redux"
import loginReducer from '../slices/loginSlice'
import getUserReducer from '../slices/getUserSlice'
import changeUsernameReducer from '../slices/newUsernameSlice'


export default combineReducers({
    login: loginReducer,
    getUser: getUserReducer,
    username: changeUsernameReducer,
})
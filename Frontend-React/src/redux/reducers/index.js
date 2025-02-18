import { combineReducers } from "redux";
import loginReducer from '../slices/loginSlice'

export default combineReducers({
    login: loginReducer,
})
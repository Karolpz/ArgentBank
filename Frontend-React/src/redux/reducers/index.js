import { combineReducers } from "redux";
import loginReducer from '../slices/loginSlice'
import getUserReducer from '../slices/getUserSlice';

export default combineReducers({
    login: loginReducer,
    getUser: getUserReducer
})
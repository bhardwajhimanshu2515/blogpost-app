import { combineReducers } from "redux"
import authReducer from "./user.reducer";

const rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;

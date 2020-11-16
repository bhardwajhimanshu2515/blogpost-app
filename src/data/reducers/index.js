import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import todoReducer from "./blog.reducer";

const rootReducer = combineReducers({
    userReducer,
    todoReducer
})

export default rootReducer;

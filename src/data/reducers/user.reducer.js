import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI,loginAPI } from "../services/user.service";

export const loginItem = createAsyncThunk(
    'user/loginItem',
    async (payload, thunkAPI) => {
        let response = await loginAPI(payload);
        console.log("responseeee=",response);
        if (response.isSuccessful===true){
            localStorage.setItem('userdata',response.data);
            localStorage.setItem('userId',response.data.userId);
            localStorage.setItem('token',response.data.token);
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)
export const signupItem = createAsyncThunk(
    'user/loginItem',
    async (payload, thunkAPI) => {
        let response = await signupAPI(payload);
        console.log("responseeee=",response);
        if (response.isSuccessful===true){
            localStorage.setItem('userdata',response.data);
            localStorage.setItem('userId',response.data.userId);
            localStorage.setItem('token',response.data.token);
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: [
        ],
        loggedIn:false
    },
    reducers: {
        
    },
    extraReducers: {
        [loginItem.fulfilled]: (state, action) => {
            state.userInfo.push(action.payload);
            let updateConnector=!state.loggedIn;
            state.loggedIn=updateConnector;
        },
        [signupItem.fulfilled]: (state, action) => {
            state.userInfo.push(action.payload);
            let updateConnector=!state.loggedIn;
            state.loggedIn=updateConnector;
        }
    }
});

export default userSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI,loginAPI } from "../services/user.service";

export const loginItem = createAsyncThunk(
    'user/loginItem',
    async (payload, thunkAPI) => {
        let response = await loginAPI(payload);
        console.log("res=",response)
        console.log("responseeee=",response);
        if (response.isSuccessful===true){
            localStorage.setItem('userId',response.data.userId);
            localStorage.setItem('userName',response.data.name);
            localStorage.setItem('userImage',response.data.img);
            localStorage.setItem('userEmail',response.data.email);
            localStorage.setItem('userNumber',response.data.phoneNumber);
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
        console.log("img=",response.data.img);
        if (response.isSuccessful===true){
            localStorage.setItem('userdata',response.data);
            localStorage.setItem('userId',response.data.userId);
            localStorage.setItem('userImage',response.data.img);
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
            let updateConnector=true;
            state.loggedIn=updateConnector;
            localStorage.setItem('loggedIn',state.loggedIn);
        },
        [signupItem.fulfilled]: (state, action) => {
            state.userInfo.push(action.payload);
            let updateConnector=true;
            state.loggedIn=updateConnector;
            localStorage.setItem('loggedIn',state.loggedIn);
        }
    }
});

export default userSlice.reducer;
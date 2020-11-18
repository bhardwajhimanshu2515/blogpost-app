import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createAPI,getAPI,getOneAPI } from "../services/blog.service";

export const createBlogItem = createAsyncThunk(
    'blog/blogItem',
    async (payload, thunkAPI) => {
        let response = await createAPI(payload);
        if (response.isSuccessful===true){
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)
export const getBlogItem = createAsyncThunk(
    'blog/blogItem',
    async (payload, thunkAPI) => {
        let response = await getAPI(payload);
        console.log("thunkuser=",payload);
        if (response.isSuccessful===true){
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)
export const getOneBlogItem = createAsyncThunk(
    'blog/blogItem',
    async (payload, thunkAPI) => {
        let response = await getOneAPI(payload);
        if (response.isSuccessful===true){
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogList: [
        ],
        oneBlog:[]
    },
    reducers: {
        addBlogItem: (state, action) => {
            state.blogList=action.payload
            console.log("bloglists=",state.blogList);
        },
        
    },
    extraReducers: {
        [createBlogItem.fulfilled]: (state, action) => {
            
        },
        [getBlogItem.fulfilled]: (state, action) => {
            state.blogList.push(action.payload);
        },
        [getOneBlogItem.fulfilled]:(state,action)=>{
            state.oneBlog=action.payload
        }
    }
});

export const { addBlogItem } = blogSlice.actions;
export default blogSlice.reducer;
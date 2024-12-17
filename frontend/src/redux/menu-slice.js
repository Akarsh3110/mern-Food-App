import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";
const initialState={
    isLoading:false,
    menus:[]
}

export const addNewMenu=createAsyncThunk(
    '/menus/addNewMenu',
    async(menuValues)=>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/menu/add`,menuValues)
        return response.data
    }
)

export const getMenu=createAsyncThunk(
    '/menus/getMenu',
    async()=>{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/menu/get`)
        return response.data
    }
)

const menuSlice=createSlice({
    name:'menuSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addNewMenu.pending,(state)=>{
            state.isLoading=true;
        }).addCase(addNewMenu.fulfilled,(state,action)=>{
            console.log(action.payload.data,'co');
            state.isLoading=false;
            state.menus=action.payload.data
        }).addCase(addNewMenu.rejected,(state)=>{
            state.isLoading=false;
            state.menus=[];
        }).addCase(getMenu.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getMenu.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.menus=action.payload.data
        }).addCase(getMenu.rejected,(state)=>{
            state.isLoading=false;
            state.menus=[];
        })
    }
})

export default menuSlice.reducer;
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";

const initialState={
    isLoading:false,
    menuItems:[]
}

export const addMenuItems=createAsyncThunk(
    '/menus/addMenuItems',
    async({itemValues,menuId})=>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/menuItems/add/${menuId}`,itemValues)
        return response.data
    }
)

export const getMenuItems=createAsyncThunk(
    '/menus/getMenuItems',
    async()=>{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/menuItems/get`)
        return response.data
    }
)



const menuItemSlice=createSlice({
    name:'menuItemSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addMenuItems.pending,(state)=>{
            state.isLoading=true;
        }).addCase(addMenuItems.fulfilled,(state,action)=>{
            console.log(action.payload.data,'itemss');
            
            state.isLoading=false;
            state.menuItems=action.payload.data
        }).addCase(addMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.menuItems=[];
        }).addCase(getMenuItems.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getMenuItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.menuItems=action.payload.data
        }).addCase(getMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.menuItems=[];
        })
    }
})

export default menuItemSlice.reducer;
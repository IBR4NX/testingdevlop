import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}
export const mobileMenu=createSlice({
    name: "mobileMenu",
    initialState,
    reducers: {
        menu:(state,action:PayloadAction<boolean>)=>{
            // console.log("calling the reducer for active plus",action);
            state.value=action.payload;
        }
    }
})
export const {menu}=mobileMenu.actions
export default mobileMenu.reducer
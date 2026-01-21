import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
type Theme = "light" | "dark" | "system";

export interface CounterState {
  value: Theme
}
const initialState: CounterState = {
  value: localStorage.getItem("theme") as Theme  ,
}
export const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
      dark:(state)=>{
          document.documentElement.classList.remove("dark","light");
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          state.value="dark";
      },
      light:(state)=>{
          document.documentElement.classList.remove("dark","light");
          document.documentElement.classList.add("light");
          localStorage.setItem("theme", "light");
          state.value="light";
      },
      system:(state)=>{
          const systemTheme= window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
          document.documentElement.classList.remove("dark","light");
          document.documentElement.classList.add(systemTheme);
          localStorage.setItem("theme", systemTheme);
          state.value="system";
        
      },
      // changeTheme:(state,action:{payload:Theme})=>{
      //     const newTheme=action.payload;

    }
})

export const {dark, light, system }=themeSlice.actions

export default themeSlice.reducer
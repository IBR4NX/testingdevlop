import { createSlice } from "@reduxjs/toolkit";
type Theme = "light" | "dark" | "OS default";
export interface CounterState {
  value: Theme,
  mode: "light" | "dark" ,
  next: Theme,
}
const initialState: CounterState = {
  value: localStorage.getItem("theme") as Theme,
  mode: window.matchMedia("(prefers-color-scheme: dark)").matches? "dark": "light",
  next: localStorage.getItem("theme") as Theme , 
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // dark: (state) => {
    //   console.log("dark");
    //   document.documentElement.classList.remove("dark", "light");
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    //   state.value = "dark";
    // },
    // light: (state) => {
    //   document.documentElement.classList.remove("dark", "light");
    //   document.documentElement.classList.add("light");
    //   localStorage.setItem("theme", "light");
    //   state.value = "light";
    // },
    // system: (state) => {
    //   const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches? "dark": "light";
    //   console.log("system", "---", osTheme);
    //   document.documentElement.classList.remove("dark", "light");
    //   document.documentElement.classList.add(osTheme);
    // },
    setTheme:(state)=>{
      document.documentElement.classList.remove("dark", "light");
      if (state.next==="OS default" || !state.next ) {
        document.documentElement.classList.add(state.mode);
        state.value="OS default";
        if ( state.mode==="dark") {
          state.next="light"
        }else{
          state.next="dark"
        }
      }else {
        state.value=state.next;
        document.documentElement.classList.add(state.next);
        if ( state.mode==="light") {
          state.next="light"
        }else {
          if (state.mode===state.next) {
            state.next="OS default";
          }else{
            state.next="dark"
          } 
        }
      } 
      localStorage.setItem("theme",state.value );
      }
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;


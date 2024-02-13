import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",
    initialState: {
        isDarkTheme:true,
    },
    reducers:{
        setTheme:(state, action) => {
            state.isDarkTheme=action.payload;
        },
    }
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
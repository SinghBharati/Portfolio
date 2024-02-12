import {createSlice} from "@reduxjs/toolkit";
import gmail from "../assets/contact/gmail.png";
import github from "../assets/contact/github.png";
import leetcode from "../assets/contact/LeetCode.png";
import linkedin from "../assets/contact/LinkedIn.png";



const contactSlice = createSlice({
    name:"contact",
    initialState:[
        {
        name:"Gmail",
        image:gmail
        },
        {
            name:"Github",
            image:github
        },
        {
            name:"Leetcode",
            image:leetcode
        },
        {
            name:"LinkedIn",
            image:linkedin
        },
    ],
    reducers:{}

})

export const {} = contactSlice.actions;
export default contactSlice.reducer;
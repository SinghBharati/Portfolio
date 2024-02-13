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
            image:gmail,
            link:"https://gmail.com",
        },
        {
            name:"Github",
            image:github,
            link:"https://github.com/SinghBharati/",
        },
        {
            name:"Leetcode",
            image:leetcode,
            link:"https://leetcode.com/sbharati244/",

        },
        {
            name:"LinkedIn",
            image:linkedin,
            link:"https://www.linkedin.com/in/bharati-singh",

        },
    ],
    reducers:{}

})

export const {} = contactSlice.actions;
export default contactSlice.reducer;
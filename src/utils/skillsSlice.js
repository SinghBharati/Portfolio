import {createSlice} from "@reduxjs/toolkit";
import tailwindlogo from  "../assets/skills/tailwindlogo.png"
import javalogo from "../assets/skills/java.png"
import pythonlogo from "../assets/skills/python.png"
import javascriptlogo from "../assets/skills/javascript.png"
import htmlcsslogo from "../assets/skills/htmlcss.png"
import bootstraplogo from "../assets/skills/bootstrap.png"
import laravellogo  from "../assets/skills/laravel.png"
import reactlogo  from "../assets/skills/react.png"
import reactrouterlogo  from "../assets/skills/reactrouter.png"
import reduxlogo  from "../assets/skills/redux.png"


const skillsSlice = createSlice({
    name:"skills",
    initialState:[
        {
            name:"React.js",
            image:reactlogo
        },
        {
            name:"React Router",
            image:reactrouterlogo,
        },
        {
            name:"Redux Toolkit",
            image:reduxlogo,
        },
        {
            name:"Laravel",
            image:laravellogo
        },
        {
            name:"Tailwind",
            image:tailwindlogo,
        },
        {
            name:"Java",
            image:javalogo,
        },
        {
            name:"Python",
            image:pythonlogo,
        },
        {
            name:"HTML && CSS",
            image:htmlcsslogo,
        },
        {
            name:"Bootstrap",
            image:bootstraplogo,
        },
        {
            name:"JavaScript",
            image:javascriptlogo,
        },



    ],
    reducers:{
        // updateSkills(state, action) {
        //     // Assuming action.payload is an array of updated skills
        //     state.skills = action.payload;
        // }
    }
})

export const {} = skillsSlice.actions;
export default skillsSlice.reducer;
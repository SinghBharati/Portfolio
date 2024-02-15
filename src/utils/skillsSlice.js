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
            image:reactlogo,
            link:"https://react.dev/",
        },
        {
            name:"React Router",
            image:reactrouterlogo,
            link:"https://reactrouter.com/en/main",
        },
        {
            name:"Redux Toolkit",
            image:reduxlogo,
            link:"https://redux-toolkit.js.org/",
        },
        {
            name:"Laravel",
            image:laravellogo,
            link:"https://laravel.com/",
        },
        {
            name:"Tailwind",
            image:tailwindlogo,
            link:"https://tailwindcss.com/",
        },
        {
            name:"Java",
            image:javalogo,
            link:"https://www.java.com/en/",
        },
        {
            name:"Python",
            image:pythonlogo,
            link:"https://www.python.org/",
        },
        {
            name:"HTML && CSS",
            image:htmlcsslogo,
            link:"https://developer.mozilla.org/en-US/docs/Web/HTML",

        },
        {
            name:"Bootstrap",
            image:bootstraplogo,
            link:"https://getbootstrap.com/",

        },
        {
            name:"JavaScript",
            image:javascriptlogo,
            link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
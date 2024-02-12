import {createSlice} from "@reduxjs/toolkit";
import netflixgpt from "../assets/projects/netflixGpt.PNG"
import foodiez from "../assets/projects/foodiez.PNG"
import lecturescheduler from "../assets/projects/lecturescheduler.png"
import portfolio from "../assets/projects/portfolio.PNG"
import blog from "../assets/projects/blog.PNG"


const projectsSlice = createSlice({
    name:"projects",
    initialState:[
        {
            name:"Netflix GPT",
            image:netflixgpt,
            link:"https://github.com/SinghBharati/Netflix-GPT/tree/main",
            techstack:"Javascript, React.js, React Router, Redux-toolkit, Tailwind",
            description:"React-based Netflix like web application with added functionality of Al-powered search and movie recommendations to\n" +
                "enhance user experience.\n"
        },
        {
            name:"Foodiez",
            image:foodiez,
            link:"https://github.com/SinghBharati/Foodiez",
            techstack:"Javascript, React.js, React Router, Redux-toolkit, Tailwind",
            description:"Foodiez is a React-based web application to browse nearby restaurants and order food.\n"
                +"Fetches the list of restaurants with the public API of Swiggy."
        },
        {
            name:"Lecture Scheduler",
            image:lecturescheduler,
            link:"https://github.com/SinghBharati/Lecture_Scheduler",
            techstack:"Laravel, MySQL Database",
            description:"Laravel app, where admin have ability to add courses & multiple batches of that course along with the date of lectures & Instructor."
        },
        {
            name:"Portfolio",
            image:portfolio,
            link:"https://github.com/SinghBharati/Netflix-GPT/tree/main",
            techstack:"Javascript, React.js, React Router, Redux-toolkit, Tailwind",
            description: "Portfolio built using JS, React.js, React Router, Redux Toolkit, and Tailwind CSS. It showcases my latest projects, skills in visually appealing manner."
        },
        {
            name:"Blog",
            image:blog,
            link:"https://github.com/SinghBharati/Netflix-GPT/tree/main",
            techstack:"Javascript, React.js, React Router, Redux-toolkit, Tailwind",
            description: "Blog is a React-based web application in which one can read or write blog.  It showcases my latest skills like Javascript, React.js, React Router, RTK, Tailwind."
        },

    ],
    reducers:{}

})


export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
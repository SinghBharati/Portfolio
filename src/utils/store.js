import {configureStore} from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import projectsSlice from "./projectsSlice";
import contactSlice from "./contactSlice";

const store = configureStore({
    reducer : {
        skills:skillsSlice,
        projects:projectsSlice,
        contact:contactSlice,

    }
})

export default store;
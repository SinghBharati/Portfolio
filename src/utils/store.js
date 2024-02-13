import {configureStore} from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";
import projectsSlice from "./projectsSlice";
import contactSlice from "./contactSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer : {
        skills:skillsSlice,
        projects:projectsSlice,
        contact:contactSlice,
        theme:themeSlice,

    }
})

export default store;
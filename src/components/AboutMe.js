import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import {useSelector} from "react-redux";
function AboutMe() {
    const theme = useSelector((store) => store.theme.isDarkTheme);

    return (
        <div className={`${theme ? "bg-gray-900 text-gray-200" : "bg-gray-200 text-gray-900"} p-5 pt-24`}>
            <h1 className="text-3xl font-bold py-3">About Me</h1>
            <SkillSection/>
            <ProjectSection/>
        </div>
    );
}

export default AboutMe;
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
function AboutMe() {
    return (
        <div className="p-5 bg-gray-900 text-gray-200">
            <h1 className="text-3xl font-bold py-3">About Me</h1>
            <SkillSection/>
            <ProjectSection/>
        </div>
    );
}

export default AboutMe;
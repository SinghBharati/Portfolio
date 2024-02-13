import {useSelector} from "react-redux";
import Card from "./Card";
import React from "react";

const ProjectSection = () => {
    const projects = useSelector((store) => store.projects);

    return (
        <div>
            <h1 className="text-2xl font-bold py-3 px-5">Projects</h1>
            <div className="flex flex-wrap items-center">
                {projects.map((project) => {
                    return <Card
                            key={project.name}
                           width={52}
                            height={32}
                            to={project.link}
                            title={project.name}
                            image={project.image}
                            description={project.description}
                        />
                })}
            </div>

        </div>
    );

}
export default ProjectSection;
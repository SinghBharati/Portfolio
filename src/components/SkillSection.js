import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";

const SkillSection = () => {
    const skills = useSelector((store) => store.skills);

    return (
        <div >
            <h1 className="text-2xl font-bold py-3 px-5">Skills</h1>
            <div className="flex flex-wrap items-center">
                {skills.map((skill) => {
                    return <Card key={skill.name} height={36} width={52} title={skill.name} image={skill.image}/>
                })}
            </div>

        </div>
    );
}

export default SkillSection;
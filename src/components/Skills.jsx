import React from "react";
import { skills } from "../constants/skills.constants";

const Skills = ()=>{
  return (
    <div className="py-12 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight" style={{marginBottom:"1em"}}>Habilidades</p>
          <div className="skills-container flex flex-wrap">
            {skills && skills.map((skill,index)=>(
              <div className="max-w-sm w-1/6 bg-white rounded-lg border mr-10 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-5" key={index}>
                <figure  style={{minHeight:"201px",height:"201px", display:"flex",alignItems:"center",justifyContent:"center", padding:"1em"}}>
                  <img className="rounded-t-lg w-full" src={skill.image} alt={skill.name}/>
                </figure>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{skill.name}</h5>
                  </a>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
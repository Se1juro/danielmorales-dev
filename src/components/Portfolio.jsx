import React from "react";
import { projects } from "../constants/projects.constants";

const Portfolio = ()=>{
  return (
    <div className="py-12 bg-white" id="portfolio">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth:"90rem"}}>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight" style={{marginBottom:"1em"}}>Portafolio</p>
          <div className="projects-container flex flex-wrap">
            {projects && projects.map((project,index)=>(
              <div className="card-project max-w-sm w-1/3 bg-white rounded-lg border mr-10 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-5 p-3" key={index}>
                {project.image && <figure  style={{minHeight:"201px",height:"201px", display:"flex",alignItems:"center",justifyContent:"center", padding:"1em"}}>
                  <img className="rounded-t-lg w-full h-full" src={project.image} alt={project.name}/>
                </figure> }

                <div className="p-5 container-description" style={{maxHeight:"10em",height:"10em"}}>
                  <div className="container-description-project">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                  </div>
                </div>
                {project.githubLink && <a href={project.githubLink} className="link-repository inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Visitar repositorio
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>}
              </div>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
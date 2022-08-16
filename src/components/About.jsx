import React from "react";

const About = ()=>{
  return (
    <div className="py-12 bg-white" id="about-me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">Acerca de mi</p>
          <div className="lg:text-left">
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Soy desarrollador web hace más de 2 años, he trabajado con Java, PHP y actualmente mi fuerte es Typescript, desarrollando aplicaciones web en Node - Express y React. </p>

            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Me encuentro en los últimos semestres de ingeniería de sistemas. Tengo experiencia en Linux, administración de servidores CentOS y Ubuntu, AWS EC2, Lambda, RDS y Docker y tengo conceptos de CI/CD, construyendo pipelines en Github Actions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
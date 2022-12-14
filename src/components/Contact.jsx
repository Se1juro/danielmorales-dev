import React from "react";

const Contact = ()=>{
  return (    
    <div className="py-12 bg-white" id="contact">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth:"90rem"}}>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight" style={{marginBottom:"1em"}}>Contacto</p>
          <div className="contact-container flex flex-wrap justify-center">
            <div className="card-contact max-w-sm bg-white rounded-lg border border-gray-200 shadow-md " style={{width:"18em", marginRight:"2em"}}>
              <figure style={{minHeight:"201px",height:"201px", display:"flex",alignItems:"center",justifyContent:"center", padding:"1em"}}>
                <img className="rounded-t-lg" src="https://cdn.svgporn.com/logos/linkedin-icon.svg" alt=""  style={{height:"100%"}}/>
              </figure>
              <div className="p-5">
                <div className="p-5" style={{maxHeight:"5em",height:"5em"}}>
                  <div className="container-description-project">
                    <a href="https://www.linkedin.com/in/daniel-morales-sevillano/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Linkedin</h5>
                    </a>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/daniel-morales-sevillano/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Ir al perfil
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            <div className="card-contact max-w-sm bg-white rounded-lg border border-gray-200 shadow-md " style={{width:"18em", marginRight:"2em"}}>
              <figure style={{minHeight:"201px",height:"201px", display:"flex",alignItems:"center",justifyContent:"center", padding:"1em"}}>
                <img className="rounded-t-lg" src="https://cdn.svgporn.com/logos/google-gmail.svg" alt="" style={{height:"100%"}}/>
              </figure>
              <div className="p-5">
                <div className="p-5" style={{maxHeight:"5em",height:"5em"}}>
                  <div className="container-description-project">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Email</h5>
                  </div>
                </div>

                <a href="mailto:mralejo99@gmail.com" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Enviar email
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            <div className="card-contact max-w-sm bg-white rounded-lg border border-gray-200 shadow-md" style={{width:"18em", marginRight:"2em"}}>
              <figure style={{minHeight:"201px",height:"201px", display:"flex",alignItems:"center",justifyContent:"center", padding:"1em"}}>
                <img className="rounded-t-lg" src="https://cdn.svgporn.com/logos/github-icon.svg" alt=""  style={{height:"100%"}}/>
              </figure>
              <div className="p-5">
                <div className="p-5" style={{maxHeight:"5em",height:"5em"}}>
                  <div className="container-description-project">
                    <a href="https://www.linkedin.com/in/daniel-morales-sevillano/">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">GitHub</h5>
                    </a>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/daniel-morales-sevillano/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Ir al perfil
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Contact
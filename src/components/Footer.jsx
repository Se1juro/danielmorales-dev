import React from "react";

const Footer = ()=>{
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-500 sm:text-center ">© 2022 <a href="https://flowbite.com/" className="hover:underline">Daniel Morales</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
        <li>
          <a href="#about-me" className="mr-4 hover:underline md:mr-6 ">Acerca de</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
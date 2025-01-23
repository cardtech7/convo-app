"use client"

import { useState } from "react"
import Side from "./sideBar"
import { Sidebar } from "lucide-react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Header Component for menu and search
    <main>
    <nav className = {`fixed top-0 left-0 h-full  transition-transform ease-in-out duration-1000 shadow-lg ${isOpen? " translate-x-0 hidden  " : "w-72 bg-white "}  `}>
      <Side/>
    </nav>
    <nav className = " w-screen h-16 flex justify-start items-end pb-4 pl-1 pr-1  bg-background_main ">
        {/* menu button */}

        
        <button 
        className = "  "
        onClick={toggleSidebar}
        >
        <Sidebar
          className = {` ${isOpen? "" : "translate-x-60" } transition-transform duration-500 ease-in-out text-Text_Primary `}  
        />

 
        
        </button>


        <h1 className = " w-72 flex justify-center font-bold text-xl text-Text_Primary ">
          Convo App
        </h1>
        

    </nav>
    </main>
    )
}

export default Header
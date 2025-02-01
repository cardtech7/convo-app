"use client"

import { useState } from "react"
import Side from "./sideBar"
import { Sidebar } from "lucide-react"
import ThemeToggle from "./manageAccount/ThemeToggle"

const Header = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    // Header Component for menu and search
    <main className = " bg ">
    <nav className = {`${isOpen? " translate-x-0 hidden  " : "w-72 bg-background_sub dark:bg-background_sub_dark "}   fixed top-0 left-0 h-full  transition-transform ease-in-out duration-1000 shadow-lg  `}>
      <Side/>
    </nav>
    <nav className = " w-screen h-16 flex justify-start items-end pb-4 pl-1 pr-1  bg-background_chat dark:bg-background_chat_dark ">
        {/* menu button */}

        
        <button 
        className = "  "
        onClick={toggleSidebar}
        >
        <Sidebar
          className = {` ${isOpen? "" : "translate-x-60" } transition-transform duration-500 ease-in-out text-Text_Primary dark:text-Text_Primary_dark `}  
        />
        </button>


        <h1 className = " w-72 flex justify-center font-bold text-xl text-Text_Primary dark:text-Text_Primary_dark">
          Convo App
        </h1>
    </nav>

    <div className = " hidden ">
      <ThemeToggle/>
    </div>
    </main>
    )
}

export default Header
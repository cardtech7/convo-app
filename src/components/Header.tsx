"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Header Component for menu and search
    <main>
    <nav className = {`fixed top-0 left-0 h-full  transition-transform ease-in-out duration-1000 shadow-lg ${isOpen? " translate-x-0 hidden  " : "w-72 bg-white "}  `}>
      nav
    </nav>
    <nav className = " w-screen h-20 flex justify-center items-end pb-4 gap-3 pl-1 pr-1  bg-background_main ">
        {/* menu button */}

        
        <button 
        className = "  "
        onClick={toggleSidebar}
        >
        <Image 
        src={"/image/button/menu.png"} 
        alt="menu" 
        width={35} 
        height={35}
        className = {` ${isOpen? "" : "translate-x-52" } relative -left-32 transition-transform duration-300 `}  
        />
        
        </button>


        {/* search input */}
        <input 
        type = " text " 
        name = " Searchbar " 
        id = " searchBar " 
        placeholder = " Search " 
        className = {` ${isOpen? "" : "hidden "} w-52 text-Text_Secondary rounded-full pl-2 fixed top-9 `} 
        />
        
        {/* Add chat button */}
        <button className = " fixed right-4  ">
        <Image
        src = {"/image/button/Addbutton.png"}
        alt = " addButton "
        width = {30}
        height = {25}
        />
        </button>
    </nav>
    </main>
    )
}

export default Header
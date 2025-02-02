"use client"


import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "light") setDarkMode(false)

    }, [])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
  return (
    <div className = " flex justify-between items-center w-full h-12 p-1 pl-3 pr-3 rounded-full  bg-background_button dark:bg-background_button_dark ">
        <h1 className = " text-Text_Primary dark:text-Text_Primary_dark font-semibold ">
        Night Mode
        </h1>
        
        <div
            className = " relative w-14 h-18 flex items-center dark:bg-gray-900 bg-background_main cursor-pointer rounded-full p-1  "
            onClick = {() => setDarkMode(!darkMode)}
        >
            <Moon className = " text-white" size={18}/>
            <div
            className = " absolute bg-white dark:bg-slate-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 " 
            style={darkMode ? {left:"2px"}:{right:"2px"}}
            >
                <Sun  className  = "mt-1 ml-1 text-yellow-400 " size={16} />
            </div>
        </div>
   
   </div>
  )
}

export default ThemeToggle
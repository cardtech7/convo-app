"use client"
import { ArrowLeft, ChevronDown, Sun, Moon, X } from "lucide-react"
import { useState } from "react";
import  ChangeProfile  from "@/components/manageAccount/changeProfile"
import ChangeName from "@/components/manageAccount/changeName";
import ChangeEmail from "@/components/manageAccount/changeEmail";
import { useEffect } from "react";
 
const manageAccount = () => {

  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    document.body.className = isNightMode ? "night-mode" : "light-mode";
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  
  };
  
 
  return (
    <main className = " min-h-screen flex flex-col  ">
        <header className = " w-screen h-16 p-3 flex justify-center items-center  ">
          <a href="/pages/main">
            <ArrowLeft className = "  "/>
          </a>

          <h1 className = " flex justify-center w-screen text-lg font-semibold ">
            Manage Account
          </h1>
        </header>

        <section className = " flex flex-1 flex-col gap-5 pt-32 bg-background_chat p-5 ">

          {/* <ChangeProfile/> */}
          <ChangeName/>
          <ChangeEmail/>
          {/*
          <div className = " flex justify-between w-full h-full p-1 pl-3 pr-3 rounded-full  bg-yellow-300 ">
            <h1 className = " font-medium ">
              Night Mode
            </h1>
            <button
            onClick={toggleNightMode}
            > 
            {isNightMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
            */}
        </section> 


            

    </main>
  )
}

export default manageAccount
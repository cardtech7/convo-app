"use client"

import { ChevronDown, X } from "lucide-react"
import { useState } from "react";


const changeEmail = () => {
    const [changeProfile, setChangeProfile] = useState(false);

    const toggleChangeProfile = () => {
        setChangeProfile(!changeProfile);
      };

  return (
    <main>
    <button
      onClick = {toggleChangeProfile}
      className = " flex justify-between items-center w-full h-12 p-1 pl-3 pr-3 rounded-full  bg-yellow-400 "
    > 
    <h1 className = " text-Text_Primary font-semibold ">
      Change Email
    </h1>
      <ChevronDown className=" text-Text_Primary "/>
    </button>
    {changeProfile && (
        <div className = {`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 `} > 
            <form action = "  " method = "  " className = " max-w-full max-h-full flex flex-col items-center gap-5 p-4 bg-white rounded-xl ">
            <div className = " flex justify-between items-center "> 
                <h1 className = " flex justify-center w-72 font-semibold ">
                    Change Name
                </h1>
                <button
                onClick={toggleChangeProfile!}
                className = " fixed "
                > 
                <X/>
                </button>
            </div>
            
           <input 
           type = "text" 
           name = "changeName " 
           id="" 
           placeholder = " Enter New Name "
           className = " border border-Text_Primary text-Text_Secondary rounded-full p-2 w-72 "
           />

            <button
            className = " bg-green-400 w-24 h-8 rounded-full "
            >
                Change
            </button>

        </form>
        </div>
    )}
    </main>
  )
}

export default changeEmail
"use client"

import { ChevronDown, X } from "lucide-react"
import { useState } from "react";

const ChangeName = () => {
    const [changeProfile, setChangeProfile] = useState(false);

    const toggleChangeProfile = () => {
        setChangeProfile(!changeProfile);
      };

  return (
    <main>
    <button
      onClick = {toggleChangeProfile}
      className = " flex justify-between items-center w-full h-12 p-1 pl-3 pr-3 rounded-full  bg-background_button dark:bg-background_button_dark "
    > 
    <h1 className = " text-Text_Primary dark:text-Text_Primary_dark font-semibold">
      Change Name
    </h1>
      <ChevronDown className=" text-Text_Primary dark:text-Text_Primary_dark "/>
    </button>
    {changeProfile && (
        <div className = {`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 `} > 
        <form action = "  " method = "  " className = " max-w-full max-h-full flex flex-col items-center gap-5 p-4 bg-background_sub dark:bg-background_sub_dark rounded-xl ">
            <div className = " flex justify-between items-center "> 
                <h1 className = " text-Text_Primary dark:text-Text_Primary_dark flex justify-center w-72 font-semibold ">
                    Change Name
                </h1>
                <button
                onClick={toggleChangeProfile!}
                className = " fixed text-Text_Primary dark:text-Text_Primary_dark "
                > 
                <X/>
                </button>
            </div>
            
           <input 
           type = "text" 
           name = "changeName " 
           id="" 
           placeholder = " Enter New Name "
           className = " dark:bg-background_main_dark border border-Text_Primary dark:border-Text_Primary_dark text-Text_Secondary dark:text-Text_Secondary_dark rounded-full p-2 w-72 "
           />

            <button
            className = " bg-success_color dark:bg-success_color_dark w-24 h-8 rounded-full "
            >
                Change
            </button>

        </form>
    </div>
    )}
    </main>
  )
}

export default ChangeName
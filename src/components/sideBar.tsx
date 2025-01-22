/* eslint-disable react/react-in-jsx-scope */

import { ActivityIcon, ActivitySquareIcon } from "lucide-react"
import Image from "next/image"

const sideBar = () => {
  return (
    <main className = " flex  justify-center items-center h-screen  ">
      <nav className = " flex flex-col p-2 h-4/5  w-72 ">
        <div className = " flex ">
          <Image 
            src = {"/"}
            alt = ""
            width = {50}
            height = {50}
            className = " h-12 w-12 rounded-full border border-black "
          />

          <div className = " ml-2 ">

            <h1 className = " text-Text_Primary font-bold  ">
              Carl Andre Diomon
            </h1>

            <div className = " flex items-center  ">

              <div className = " h-2 w-2 mr-2 bg-green-500 rounded-full "></div>

              <h6 className = " text-xs text-Text_Primary font-semibold ">
                Active
              </h6>

            </div>
          </div>
        </div>
        
        <section>
          
        </section>

      </nav>
    </main>
  )
}

export default sideBar
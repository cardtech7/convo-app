
//import Image from "next/image"
import ThemeToggle from "./manageAccount/ThemeToggle"

const sideBar = () => {
  return (
    <main className = " flex text-Text_Primary dark:text-Text_Primary_dark  justify-center items-center h-screen font-sans ">
      <nav className = " flex flex-col  h-4/5  w-80 ">
        <div className = " flex pl-2 ">
          {/* 
          <Image 
            src = {"/"}
            alt = ""
            width = {50}
            height = {50}
            className = " h-12 w-12 rounded-full border border-black "
          />
             */}
          <div className = " ml-2 ">

            <h1 className = " font-bold  ">
              Carl Andre Diomon
            </h1>

            <div className = " flex items-center  ">

              <div className = " h-2 w-2 mr-2 bg-green-500 rounded-full "></div>

              <h6 className = " text-xs font-semibold ">
                Active
              </h6>

            </div>
          </div>
        </div>
        
        <section className = "  border-b pb-7 border-Text_Primary mt-10 flex flex-col items-start gap-5 font-medium  ">

          <button className = "w-72 p-2 flex items-start active:bg-background_chat">
            <a href = "/pages/manageAccount">
              Manage Account
            </a>
          </button>
          {/*  
          <button className = "w-72 p-2 flex items-start active:bg-background_chat">
            <a href = "/pages/createGroup">
              Create Group
            </a>
          </button>

          <button className = "w-72 p-2 flex items-start active:bg-background_chat">
            <a href = "/pages/blockList">
              Block List
            </a>
          </button>

          <button className = "w-72 p-2 flex items-start active:bg-background_chat">
            <a href = " switchAccount ">
              Switch Account
            </a>
          </button>
            */}
          <button className = "w-72 p-2 flex items-start active:bg-background_chat   ">
            <a href = " /pages/login  ">
              Logout
            </a>
          </button>

        </section>

        <section>
          <h1 className = " flex justify-center items-center h-72 font-medium ">
            More features available soon!
          </h1>
        </section>
      </nav>
      <div className="hidden">
        <ThemeToggle/>
      </div>
    </main>
  )
}

export default sideBar
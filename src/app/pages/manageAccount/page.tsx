"use client"
import { ArrowLeft} from "lucide-react"
// import  ChangeProfile  from "@/components/manageAccount/changeProfile"
import ChangeName from "@/components/manageAccount/changeName";
import ChangeEmail from "@/components/manageAccount/changeEmail";
import ThemeToggle from "@/components/manageAccount/ThemeToggle";

 
const ManageAccount = () => {

  
 
  return (
    <main className = " text-Text_Primary dark:text-Text_Primary_dark min-h-screen flex flex-col bg-background_sub dark:bg-background_sub_dark  ">
        <header className = " w-screen h-16 p-3 flex justify-center items-center  ">
          <a href="/pages/main/chat">
            <ArrowLeft/>
          </a>

          <h1 className = "  flex justify-center w-screen text-lg font-semibold ">
            Manage Account
          </h1>
        </header>

        <section className = " flex flex-1 flex-col gap-5 pt-32 bg-background_chat dark:bg-background_sub_dark p-5 ">

          {/* <ChangeProfile/> */}
          <ChangeName/>
          <ChangeEmail/>
          <div>
          <ThemeToggle/>
          </div>

         

        </section> 


            

    </main>
  )
}

export default ManageAccount
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Conversation",
    description: "Convo a simple, Reliable messaging app",
  };

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className = " flex flex-col min-h-screen font-sans ">
        <nav className = " w-screen h-20 flex justify-center items-end pb-4 gap-3 pl-1 pr-1  bg-background_main ">
          <button className = "  ">
            <Image 
              src={"/image/button/menu.png"} 
              alt="menu" 
              width={35} 
              height={35}
            />
          </button>


            <input 
              type = " text " 
              name = " Searchbar " 
              id = " searchBar " 
              placeholder = " Search " 
              className = " w-72 text-Text_Secondary rounded-full pl-2 relative left-2 "
            />
            <Image
              src = {"/image/button/searchbtn.png"}
              alt = " Search "
              width = {20}
              height = {10}
              className = " h-5 relative right-12 "
            />
        

          <button className = " relative right-5  ">
            <Image
              src = {"/image/button/Addbutton.png"}
              alt = " addButton "
              width = {35}
              height = {35}
            />
          </button>
        </nav>
        <main className = " bg-background_chat flex-grow p-4 ">
          {children}
        </main>
        <footer className = " w-screen h-14 flex gap-32 justify-center bg-background_main ">
          <Link href = " /Chats " className = " flex flex-col justify-center items-center ">
            <Image
              src = {"/image/button/chatbtn.png"}
              alt = " chatbtn "
              width = {30}
              height = {30}
            />
            <h1 className = " text-sm text-Text_Primary font-semibold ">
              Chats
            </h1>
          </Link>

          <Link href = " Chats/globalchat " className = " flex flex-col justify-center items-center ">
            <Image
              src = {"/image/button/globalbtn.png"}
              alt = " /globalbtn "
              width = {30}
              height = {30}
            />
            <h1 className = " text-Text_Primary text-sm font-semibold ">
              Group
            </h1>
          </Link>
        </footer>
      </div>
    );
  }

export default MainLayout;
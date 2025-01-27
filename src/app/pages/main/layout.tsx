
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: "Conversation",
    description: "Convo a simple, Reliable messaging app",
  };
// Layout of main pages
const mainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <main>
      {children}
      </main>
    );
  }
  {/*
       <div className = " flex flex-col min-h-screen font-sans ">
         
        <Header/>
         className = " bg-white flex-grow p-4 "  
        <Footer/>
        
      </div>
      */}

export default mainLayout;
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: "Conversation",
    description: "Convo a simple, Reliable messaging app",
  };

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className = " flex flex-col min-h-screen font-sans ">
        <Header/>
        <main className = " bg-background_chat flex-grow p-4 ">
          {children}
        </main>
        <Footer/>
      </div>
    );
  }

export default MainLayout;
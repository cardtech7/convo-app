import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Conversation",
    description: "Convo a simple, Reliable messaging app",
  };

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="">
        <nav className="">
          {/* Sidebar or Main Navigation */}
          
        </nav>
        <main>
          {children}
        </main>
      </div>
    );
  }

export default MainLayout;
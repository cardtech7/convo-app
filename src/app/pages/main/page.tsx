import Header from "@/components/Header";

const ChatPage = () => {
    return(
        <main className = " flex flex-col min-h-screen font-sans text-Text_Primary ">
         
        <Header/>

        {/* Conversation */}
        <div className="flex-1 bg-white flex-grow overflow-y-auto p-4 space-y-4">
        {/* Message from another user */}
            <div className="flex flex-col items-start">
                <h1 className = " text-xs font-medium text-Text_Primary  ">
                    Carl Andre
                </h1>
            <div className="bg-white p-2 rounded-lg shadow-md max-w-xs">
                <p className="text-sm text-Text_Primary">Hi there! How are you?</p>
                <p className="text-xs text-Text_Secondary text-right mt-1">10:30 AM</p>
            </div>
            </div>

            {/* Message from current user */}
            <div className="flex items-end justify-end">
            <div className="bg-background_chat text-black p-2 rounded-lg shadow-md max-w-xs">
                <p className="text-sm text-Text_Primary">I'm good, thanks! How about you?</p>
                <p className="  text-xs text-Text_Secondary text-right mt-1">10:31 AM</p>
            </div>
            </div>
        </div>
        
        {/* Input Chats */}
        <footer className = "flex justify-between items-center p-5 bg-background_chat h-16 w-screen ">
            <input 
            type="text" 
            placeholder = " Enter Message "
            className = " rounded-full h-8 p-2 bg-white shadow-md "
            />
            <button 
            type="submit"
            className = " bg-background_main h-8 pl-3 pr-3 rounded-full shadow "
            >
                Send
            </button>
        </footer>

        </main>
        
    )
} 

export default ChatPage;
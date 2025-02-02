"use client";

import Header from "@/components/Header";
import { useState } from "react";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (!message.trim()) return; // Prevent empty messages
    setMessages([...messages, message]); // Add new message to array
    setMessage(""); // Clear input field after sending
  };

  return (
    <main className="flex flex-col min-h-screen font-sans text-Text_Primary">
      <Header />

      {/* Conversation */}
      <div className="flex-1 bg-background_sub dark:bg-background_sub_dark flex-grow overflow-y-auto p-4 space-y-4">
        {/* Static message from another user */}
        <div className="flex flex-col items-start">
          <h1 className="text-xs font-medium text-Text_Primary dark:text-Text_Primary_dark">Carl Andre</h1>
          <div className="bg-background_sub dark:bg-background_sub_dark p-2 rounded-lg dark:shadow-background_main_dark shadow-md max-w-xs">
            <p className="text-sm text-Text_Primary dark:text-Text_Primary_dark">Hi there! How are you?</p>
            <p className="text-xs text-Text_Secondary dark:text-Text_Secondary_dark text-right mt-1">
              10:30 AM
            </p>
          </div>
        </div>

        {/* Dynamic messages from the current user */}
        {messages.map((msg, index) => (
          <div key={index} className="flex items-end justify-end">
            <div className="bg-background_chat dark:bg-background_chat_dark dark:text-Text_Primary_dark text-Text_Primary p-2 rounded-lg dark:shadow-background_main_dark shadow-md max-w-xs">
              <p className="text-sm text-Text_Primary dark:text-Text_Primary_dark ">{msg}</p>
              <p className="text-xs text-Text_Secondary dark:text-Text_Secondary_dark text-right mt-1">
                10:31 AM
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Chats */}
      <footer className="flex justify-between items-center p-5 bg-background_chat dark:bg-background_chat_dark  h-16 w-screen">
        <input
          type="text"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-full h-8 p-2 bg-white dark:bg-background_sub_dark dark:text-Text_Secondary_dark shadow-md flex-grow mr-2"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="bg-background_main dark:bg-background_main_dark dark:text-Text_Primary_dark h-8 px-4 rounded-full shadow dark:shadow-background_sub_dark"
        >
          Send
        </button>
      </footer>
    </main>
  );
};

export default ChatPage;

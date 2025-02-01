"use client";

import Header from "@/components/Header";
import { useState } from "react";

const GlobalChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (!message.trim()) return; // Prevent empty messages
    setMessages([...messages, message]); // Add new message to array
    setMessage(""); // Clear input field after sending
  };

  return (
    <main className=" dark:bg-background_sub_dark flex flex-col min-h-screen font-sans text-Text_Primary">
      <Header />

      {/* Conversation */}
      <div className="flex-1 bg-white flex-grow overflow-y-auto p-4 space-y-4">
        {/* Static message from another user */}
        <div className="flex flex-col items-start">
          <h1 className="text-xs font-medium text-Text_Primary">Carl Andre</h1>
          <div className="bg-white p-2 rounded-lg shadow-md max-w-xs">
            <p className="text-sm text-Text_Primary">Hi there! How are you?</p>
            <p className="text-xs text-Text_Secondary text-right mt-1">
              10:30 AM
            </p>
          </div>
        </div>

        {/* Dynamic messages from the current user */}
        {messages.map((msg, index) => (
          <div key={index} className="flex items-end justify-end">
            <div className="bg-background_chat text-black p-2 rounded-lg shadow-md max-w-xs">
              <p className="text-sm text-Text_Primary">{msg}</p>
              <p className="text-xs text-Text_Secondary text-right mt-1">
                10:31 AM
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Chats */}
      <footer className="flex justify-between items-center p-5 bg-background_chat h-16 w-screen">
        <input
          type="text"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-full h-8 p-2 bg-white shadow-md flex-grow mr-2"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="bg-background_main h-8 px-4 rounded-full shadow"
        >
          Send
        </button>
      </footer>
    </main>
  );
};

export default GlobalChat;

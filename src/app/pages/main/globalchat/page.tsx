// GlobalChat.tsx
"use client";

import Header from "@/components/Header";
import { useState } from "react";
import ChatFooter from "@/components/ChatFooter";
import { useSearchParams } from 'next/navigation';

const GlobalChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string, time: string }[]>([]);

  // Get the username from the URL query params
  const searchParams = useSearchParams();
  const username = searchParams.get('username'); // Use 'username' as the query parameter

  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle sending messages
  const handleSend = () => {
    if (!message.trim()) return; // Prevent empty messages
    const time = getCurrentTime(); // Get the current time
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, time }, // Append the new message with the time
    ]);
    setMessage(""); // Clear the input field
  };

  return (
    <main className="dark:bg-background_sub_dark flex flex-col min-h-screen font-sans text-Text_Primary overflow-hidden">
      {/* Header */}
      <Header />

      {/* Conversation Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-white">
        {/* Static message from Admin */}
        <div className="flex flex-col items-start">
          <h1 className="text-xs font-medium text-Text_Primary">Admin</h1>
          <div className="bg-background_chat p-2 rounded-lg shadow-md max-w-xs">
            <p className="text-sm text-Text_Primary">Hi! {username}, This is the Frontend of Convo and the first version will available soon!</p> {/* Displaying username here */}
            <p className="text-xs text-Text_Secondary text-right mt-1">
              10:30 AM
            </p>
          </div>
        </div>

        {/* Displaying dynamic messages from the current user */}
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col items-end justify-end">
            <h1 className="text-xs font-medium text-Text_Primary">{username}</h1>
            <div className="bg-background_main text-black p-2 rounded-lg shadow-md max-w-xs">
              <p className="text-sm text-Text_Primary whitespace-normal break-words">
                {msg.text}
              </p>
              <p className="text-xs text-Text_Secondary text-right mt-1">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Component */}
      <ChatFooter
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </main>
  );
};

export default GlobalChat;

// Footer.tsx
import React, { useRef, useEffect } from "react";

type FooterProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
};

const Footer: React.FC<FooterProps> = ({ message, setMessage, handleSend }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Function to handle dynamic height adjustment
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    
    // Reset the height to auto before recalculating the height
    textarea.style.height = "auto";
    // Set the height based on the scrollHeight (content height)
    textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`; // Max height: 160px
    setMessage(e.target.value); // Update the message
  };

  useEffect(() => {
    // Ensure that the textarea is correctly sized when the component mounts or updates
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [message]);

  return (
    <footer className="flex justify-center items-center p-4 bg-background_chat w-full">
      <textarea
        ref={textareaRef}
        placeholder="Enter Message"
        value={message}
        onChange={handleInputChange}
        className="flex items-center justify-center rounded-lg p-1 bg-white text-sm shadow-md mr-2 flex-grow  focus:outline-none whitespace-normal break-words resize-none overflow-auto max-h-40 min-h-8"
        rows={1} // Start with 1 row
      />
      <button
        type="submit"
        onClick={handleSend}
        className="bg-background_main h-10 px-6 rounded-full shadow text-white hover:bg-opacity-90 transition-all"
      >
        Send
      </button>
    </footer>
  );
};

export default Footer;

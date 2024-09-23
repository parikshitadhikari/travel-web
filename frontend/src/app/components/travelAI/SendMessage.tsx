import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

interface Props {
  handleSendMessage: (message: string) => Promise<void>;
  message: string;
  setMessage: (message: string) => void;
}

const SendMessage: React.FC<Props> = ({
  handleSendMessage,
  message,
  setMessage,
}) => {
  const onSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      await handleSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={onSend} className="flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-2 border"
      />
      <button type="submit" className="p-2">
        <IoSend />
      </button>
    </form>
  );
};

export default SendMessage;

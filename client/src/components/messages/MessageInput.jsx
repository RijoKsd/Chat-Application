import { MdSend } from "react-icons/md";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const { loading, sentMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sentMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className=" border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder=" Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <MdSend className="text-secondary" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

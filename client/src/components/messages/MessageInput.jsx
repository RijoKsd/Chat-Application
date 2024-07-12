import { MdSend } from "react-icons/md";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className=" border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder=" Type your message here..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <MdSend className="text-secondary" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

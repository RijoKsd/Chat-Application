import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef =  useRef();
   useListenMessages();

// scroll to bottom
useEffect(()=>{
  setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);
},[messages])


  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={index}
            ref={lastMessageRef}
          >
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;

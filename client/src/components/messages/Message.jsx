import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const isSender = message.senderId === authUser?._id;
  const chatClassName = isSender ? "chat chat-end" : "chat chat-start";
  const profilePic = isSender
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = isSender ? "bg-secondary" : "bg-primary";
  return (
    <div className={chatClassName}>
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          <img src={profilePic} alt="Avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center pb-2`}>
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

const Message = () => {
  return (
    <div className="chat chat-end ">
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=rijoksd"
            alt="Avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-secondary`}>How are you?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        12:24
      </div>
    </div>
  );
};

export default Message;

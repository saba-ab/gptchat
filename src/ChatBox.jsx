import React from "react";
import Message from "./Message";
function ChatBox({ messageArr }) {
  return (
    <>
      {messageArr.map((msg) => {
        return <Message text={msg.text} key={msg} user={msg.user} />;
      })}
    </>
  );
}

export default ChatBox;

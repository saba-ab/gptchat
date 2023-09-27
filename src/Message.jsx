import React from "react";
import avatar from "./avatar.svg";
function Message({ text, user }) {
  console.log(user);
  return (
    <div className={user}>
      <img src={avatar} alt="avatar" />
      <p>{text}</p>
    </div>
  );
}

export default Message;

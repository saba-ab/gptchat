import React from "react";
import sendButton from "./send.svg";
function Input({ send, inputChange, current }) {
  return (
    <div className="input-field">
      <input type="text" onChange={inputChange} value={current} />
      <div onClick={send}>
        <img src={sendButton} alt="send" />
      </div>
    </div>
  );
}

export default Input;

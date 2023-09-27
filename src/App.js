import { useState } from "react";
import "./App.css";
import ChatBox from "./ChatBox";
import Input from "./Input";

function App() {
  const [messages, setMessages] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [currentValue2, setCurrentValue2] = useState("");
  const [userId1] = useState("user1");
  const [userId2] = useState("user2");
  const onSend = () => {
    setMessages([...messages, { text: currentValue, user: userId1 }]);
    setCurrentValue("");
  };
  const onSend2 = () => {
    setMessages([...messages, { text: currentValue2, user: userId2 }]);
    setCurrentValue2("");
  };
  const getValue = (e) => {
    return setCurrentValue(e.target.value);
  };
  const getValue2 = (e) => {
    setCurrentValue2(e.target.value);
  };
  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="main-chat">
        <div className="container">
          <div className="chat-box">
            <ChatBox messageArr={messages} />
          </div>
          <div className="inputs">
            <Input
              userId={userId1}
              inputChange={getValue}
              send={onSend}
              current={currentValue}
            />
            <Input
              userId={userId2}
              inputChange={getValue2}
              send={onSend2}
              current={currentValue2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

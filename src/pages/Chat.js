import React from "react";
import "../styles/chat.scss";
import Navigation from "../components/Navigation";
import Nav from "../components/chat/nav/Nav";
import ChatBody from "../components/chat/chatBody/ChatBody";

function Chat() {
  return (
    <div>
      <Navigation />
      <div className="__main">
          <Nav />
          <ChatBody />
      </div>
    </div>
  );
}

export default Chat;
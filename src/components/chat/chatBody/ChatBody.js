import React from "react";
import "./chatBody.scss";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

function ChatBody() {  
  return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    );
  }
  export default  ChatBody;

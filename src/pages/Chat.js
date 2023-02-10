import React from "react";
import {Outlet} from "react-router-dom";
import ChatAi from "../components/ChatAi";
const Chat = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <ChatAi />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Chat;

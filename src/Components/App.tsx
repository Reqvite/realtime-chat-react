import { Global } from "@emotion/react";

import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyle/GlobalStyle";

import { AppBar } from "./AppBar/AppBar";
import { ChatRoom } from "./ChatRoom/ChatRoom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/chat-room" element={<ChatRoom />} />
        </Route>
      </Routes>
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;

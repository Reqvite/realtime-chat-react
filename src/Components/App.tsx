import { Global } from "@emotion/react";

import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyle/GlobalStyle";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ChatRoom } from "pages/ChatRoom/ChatRoom";
import Home from "pages/Home/Home";
import { PrivateRoute } from "./PrivatRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/chat-room"
            element={<PrivateRoute component={<ChatRoom />} redirecTo="/" />}
          />
        </Route>
      </Routes>
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;

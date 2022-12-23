import { Global } from "@emotion/react";

import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyle/GlobalStyle";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ChatRoom } from "pages/ChatRoom/ChatRoom";
import Home from "pages/Home/Home";
import { PrivateRoute } from "./PrivatRoute/PrivateRoute";
import { Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "Service/firebaseAuth";

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);

  return loading ? (
    <Text>Loading</Text>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/chat-room"
            element={<PrivateRoute component={<ChatRoom />} />}
          />
        </Route>
      </Routes>
      <Global styles={GlobalStyles} />
    </>
  );
};

export default App;

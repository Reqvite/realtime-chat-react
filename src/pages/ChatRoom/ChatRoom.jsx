import { useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { SendForm } from "Components/SendForm/SendForm";

import ChatList from "Components/ChatList/ChatList";

export const ChatRoom = () => {
  const bottom = useRef();

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        py={5}
        pb="100px"
        as="main"
      >
        <ChatList bottomRef={bottom} />
        <SendForm bottomRef={bottom} />
        <div ref={bottom}></div>
      </Flex>
    </>
  );
};

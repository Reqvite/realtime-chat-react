import { ChatMessage } from "Components/ChatMessage/ChatMessage";
import { useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "Service/firebaseAuth";
import { Flex, List, ListItem } from "@chakra-ui/react";
import { SendForm } from "Components/SendForm/SendForm";

export const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(1000);

  const [messages] = useCollectionData(query, { idField: "id" });

  const bottom = useRef();

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        py={5}
        pb="100px"
        as="main"
      >
        <List spacing={3} w="95vw">
          {messages &&
            messages.map((msg) => (
              <ListItem key={msg.id}>
                <ChatMessage message={msg} />
              </ListItem>
            ))}
        </List>
        <div ref={bottom}></div>
        <SendForm bottomRef={bottom} />
      </Flex>
    </>
  );
};

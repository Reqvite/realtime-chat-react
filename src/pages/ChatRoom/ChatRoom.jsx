import firebase from "firebase/compat/app";
import { ChatMessage } from "Components/ChatMessage/ChatMessage";
import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "Service/firebaseAuth";
import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  List,
  ListItem,
} from "@chakra-ui/react";

export const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(1000);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const bottom = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    if (formValue === "") return;
    await messagesRef.add({
      id: firebase.firestore.FieldValue.serverTimestamp(),
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    bottom.current.scrollIntoView({ behavior: "smooth" });
    e.target.reset();
    setFormValue("");
  };

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
      </Flex>
      <FormControl
        as="form"
        padding={5}
        background="gray.700"
        position="fixed"
        bottom="0"
        left="0"
        onSubmit={sendMessage}
      >
        <InputGroup>
          <Input
            placeholder="Type your message"
            type="text"
            color="black"
            onChange={(e) => setFormValue(e.target.value)}
          />
          <InputRightAddon background="gray.700">
            <Button
              type="submit"
              background="transparent"
              _hover={{ bg: "transparent" }}
            >
              Send
            </Button>
          </InputRightAddon>
        </InputGroup>
      </FormControl>
    </>
  );
};

import firebase from "firebase/compat/app";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import { auth, firestore } from "Service/firebaseAuth";

interface SendFormProps {
  bottomRef: React.MutableRefObject<HTMLDivElement>;
}

export const SendForm: React.FC<SendFormProps> = ({ bottomRef }) => {
  const messagesRef = firestore.collection("messages");
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (
    e: React.FormEvent<HTMLDivElement>
  ): Promise<void> => {
    e.preventDefault();

    const date = new Date().getTime();
    const { uid, photoURL } = auth.currentUser;
    if (formValue === "") return;
    await messagesRef.add({
      id: date + Math.random(),
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    bottomRef.current.scrollIntoView({ behavior: "smooth" });

    const target = e.target as HTMLFormElement;

    target.reset();
    setFormValue("");
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValue(e.target.value.trim());
  };

  return (
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
          color="white"
          onChange={handleFilter}
        />
        <InputRightAddon background="gray.700" p={0}>
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
  );
};

import { Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { auth } from "Service/firebaseAuth";

interface ChatMessageProps {
  text: string;
  uid: string;
  photoURL: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, uid, photoURL }) => {
  const messageStatus = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <Flex alignItems="center">
      {messageStatus === "sent" && <Spacer />}
      {messageStatus !== "received" ? (
        <>
          <Text maxW="75vw" p={5} background="#1663cf" borderRadius={10}>
            {text}
          </Text>
          <Image
            referrerPolicy="no-referrer"
            ml={2}
            src={photoURL}
            alt={text}
            w="50px"
            h="50px"
            borderRadius="50%"
          />
        </>
      ) : (
        <>
          <Image
            mr={2}
            src={photoURL}
            alt={text}
            w="50px"
            h="50px"
            borderRadius="50%"
            referrerPolicy="no-referrer"
          />
          <Text maxW="50vw" p={5} background="#30d667" borderRadius={10}>
            {text}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default ChatMessage;

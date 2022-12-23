import { List, ListItem } from "@chakra-ui/react";
import ChatMessage from "Components/ChatMessage/ChatMessage";
import { useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "Service/firebaseAuth";

const ChatList = ({ bottomRef }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(1000);
  const [messages] = useCollectionData(query, {
    idField: "id",
  });

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [bottomRef, messages]);

  return (
    <List spacing={3} w="95vw">
      {messages &&
        messages.map(({ id, ...otherprops }) => (
          <ListItem key={id}>
            <ChatMessage {...otherprops} />
          </ListItem>
        ))}
    </List>
  );
};

export default ChatList;

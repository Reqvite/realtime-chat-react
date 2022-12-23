import { List, ListItem } from "@chakra-ui/react";
import ChatMessage from "Components/ChatMessage/ChatMessage";
import { useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "Service/firebaseAuth";

interface ChatListProps {
  bottomRef: React.MutableRefObject<HTMLDivElement>;
}

type Id = {
  id: string;
};

type Message = {
  text: string;
  uid: string;
  photoURL: string;
};

type MessageProps = Id & Message;

const ChatList: React.FC<ChatListProps> = ({ bottomRef }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(1000);

  const options = {
    idField: "id",
    initialValue: [],
  };

  const [messages] = useCollectionData(query, options);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [bottomRef, messages]);

  return (
    <List spacing={3} w="95vw">
      {messages &&
        messages.map(({ id, ...otherprops }: MessageProps) => (
          <ListItem key={id}>
            <ChatMessage {...otherprops} />
          </ListItem>
        ))}
    </List>
  );
};

export default ChatList;

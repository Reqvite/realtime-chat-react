import { auth } from "Service/firebaseAuth";

export const ChatMessage: React.FC<{ message: any }> = ({ message }) => {
  const { text, uid, photoURL } = message;
  const messageStatus = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div>
      <img src={photoURL} alt={text} />
      <p>{text}</p>
    </div>
  );
};

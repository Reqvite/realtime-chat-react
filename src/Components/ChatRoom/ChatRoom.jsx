import firebase from "firebase/compat/app";
import { ChatMessage } from "Components/ChatMessage/ChatMessage";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "Service/firebaseAuth";

export const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };
  return (
    <div>
      <h1>Chat</h1>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>
      {messages &&
        messages.map((msg) => (
          <ChatMessage key={msg.createdAt?.seconds} message={msg} />
        ))}
    </div>
  );
};

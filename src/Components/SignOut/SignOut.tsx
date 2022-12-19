import { auth } from "Service/firebaseAuth";

export const SignOut: React.FC = () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
};

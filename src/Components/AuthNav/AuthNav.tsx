import { SignOut } from "Components/SignOut/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "Service/firebaseAuth";

export const AuthNav: React.FC = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      {!user ? (
        <button onClick={signInWithGoogle}>Sign up with Google</button>
      ) : (
        <SignOut />
      )}
    </>
  );
};

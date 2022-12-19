import { Button } from "@chakra-ui/react";
import { SignOut } from "Components/SignOut/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "Service/firebaseAuth";

export const AuthNav: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user ? (
        <Button
          _hover={{ bg: "blue.500", color: " white" }}
          variant="ghost"
          fontSize="lg"
          color="white"
          onClick={signInWithGoogle}
        >
          Sign up with Google
        </Button>
      ) : (
        <SignOut />
      )}
    </>
  );
};

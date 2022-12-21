import { Button } from "@chakra-ui/react";
import { SignOut } from "Components/SignOut/SignOut";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "Service/firebaseAuth";

export const AuthNav: React.FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/chat-room", { replace: true });
    }
  }, [navigate, user]);

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

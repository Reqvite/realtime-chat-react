import { Button } from "@chakra-ui/react";
import { auth } from "Service/firebaseAuth";

export const SignOut: React.FC = () => {
  return (
    auth.currentUser && (
      <Button
        _hover={{ bg: "blue.500", color: " white" }}
        variant="ghost"
        fontSize="lg"
        color="white"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    )
  );
};

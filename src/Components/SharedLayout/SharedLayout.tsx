import { Box, Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthNav } from "Components/AuthNav/AuthNav";
import { Footer } from "Components/Footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "Service/firebaseAuth";

export const SharedLayout: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Box minH="calc(100vh - 51px)" color="white">
        <Box as="header" bg="gray.700" w="100%" p={5}>
          <Flex justifyContent="right" alignItems="baseline">
            <AuthNav />
          </Flex>
        </Box>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>
      {!user && <Footer />}
    </>
  );
};

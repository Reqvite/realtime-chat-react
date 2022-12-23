import { Box, Heading } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box
      as="main"
      maxW="1200px"
      mx="auto"
      py={3}
      minH="calc(100vh - 131px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        as="h1"
        size="4xl"
        bgGradient="linear(to-l, #7928CA, #0078FF)"
        bgClip="text"
        textAlign="center"
      >
        Real Time Chat
      </Heading>
    </Box>
  );
};

export default Home;

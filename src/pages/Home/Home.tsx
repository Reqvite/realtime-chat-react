import { Box, Flex, Heading, Image, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box as="main" maxW="1200px" mx="auto" py={3}>
      <Flex justifyContent="center" alignItems="center" h="100%">
        <Heading
          as="h1"
          size="4xl"
          bgGradient="linear(to-l, #7928CA, #0078FF)"
          bgClip="text"
        >
          Real Time Chat
        </Heading>
      </Flex>
    </Box>
  );
};

export default Home;

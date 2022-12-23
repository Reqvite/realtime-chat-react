import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.700" w="100%" p={3} color="white">
      <Flex justifyContent="center">
        <Text
          fontSize="lg"
          fontWeight="medium"
          textAlign="center"
          display="flex"
        >
          © 2022 Developed by
          <Link
            href="https://github.com/Reqvite"
            isExternal
            ml={1}
            display="flex"
            alignItems="center"
          >
            Reqvite <ExternalLinkIcon ml={2} />
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

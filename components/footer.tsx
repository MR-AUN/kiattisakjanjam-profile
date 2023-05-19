import { Box, Text, VStack, useColorModeValue, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      py={4}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      textAlign="center"
      color={useColorModeValue("gray.600", "whiteAlpha.600")}
      position="fixed"
      bottom={0}
      left={0}
      w="100%"
    >
      <VStack spacing={2}>
        <Text fontSize="sm">
          This website is built based on the &nbsp;
          <Link href="https://www.craftz.dog/" target="_blank">
            Takuya Matsuyama's website
          </Link>
          .
        </Text>
      </VStack>
    </Box>
  );
}

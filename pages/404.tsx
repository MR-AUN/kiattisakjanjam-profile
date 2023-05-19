import NextLink from "next/link";
import {
  Container,
  Box,
  Text,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";
import Layout from "@/components/Layout/article";

export default function NotFound() {
  return (
    <>
      <Layout title="Not Found">
        <Container>
          <Heading as="h1">Not Found</Heading>
          <Text>The page you&apos;re looking for was not found.</Text>
          <Divider my={6} />
          <Box my={6} textAlign="center">
            <NextLink href="/">
              <Button>Return to Home</Button>
            </NextLink>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

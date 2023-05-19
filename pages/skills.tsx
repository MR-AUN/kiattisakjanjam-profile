import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Layout from "@/components/Layout/article";

export default function Skills() {
  return (
    <Layout title="Skills">
      <Container>
        <Heading as="h1" textAlign="center" fontSize={30} mb={4}>
          My Skills
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <Box mt={3}>
            <Text as="p" fontSize={18} fontWeight="semibold">
              Programing Language
            </Text>
            <UnorderedList p={4}>
              <ListItem>C</ListItem>
              <ListItem>Java</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>PHP</ListItem>
              <ListItem>Node.js</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>TypeScript</ListItem>
            </UnorderedList>
          </Box>
          <Box mt={3}>
            <Text as="p" fontSize={18} fontWeight="semibold">
              Tools
            </Text>
            <UnorderedList p={4}>
              <ListItem>Git</ListItem>
              <ListItem>Github</ListItem>
              <ListItem>Postman</ListItem>
              <ListItem>FileZilla</ListItem>
              <ListItem>Docker</ListItem>
            </UnorderedList>
          </Box>
          <Box mt={3}>
            <Text as="p" fontSize={18} fontWeight="semibold">
              Framework
            </Text>
            <UnorderedList p={4}>
              <ListItem>Nest.js</ListItem>
              <ListItem>Next.js</ListItem>
              <ListItem>React.js</ListItem>
              <ListItem>Express.js</ListItem>
            </UnorderedList>
          </Box>
          <Box mt={3}>
            <Text as="p" fontSize={18} fontWeight="semibold">
              Database
            </Text>
            <UnorderedList p={4}>
              <ListItem>MySQL</ListItem>
              <ListItem>Oracle</ListItem>
              <ListItem>MongoDB</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

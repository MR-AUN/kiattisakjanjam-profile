import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/work";
import P from "@/components/paragraph";
import Layout from "@/components/Layout/article";

export default function Servlet() {
  return (
    <>
      <Layout title="Web Servlet OTOP">
        <Container>
          <Title>
            Web Servlet OTOP <Badge>2021 - 2022</Badge>
          </Title>
          <P>
            This is a mini project that focuses on OTOP products from various
            local communities. It is developed as an e-commerce website for
            buying and selling goods.
          </P>
          <List ml={4} my={10} >
            <ListItem>
              <Meta>SOURCE</Meta>
              <Link href="https://www.google.com">
              https://github.com/MR-AUN/Web-Servlet-Ruay-OTOP.git <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>

          <WorkImage src="/images/works/WebServletRuay/servlet1.jpeg" alt="Servlet"/>
          <WorkImage src="/images/works/WebServletRuay/servlet2.jpeg" alt="Servlet"/>
          <WorkImage src="/images/works/WebServletRuay/servlet4.jpeg" alt="Servlet"/>
          <WorkImage src="/images/works/WebServletRuay/servlet5.jpeg" alt="Servlet"/>
        </Container>
      </Layout>
    </>
  );
}

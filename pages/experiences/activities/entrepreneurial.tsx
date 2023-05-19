import { Container, Box } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "@/components/work";
import P from "@/components/paragraph";
import Layout from "@/components/Layout/article";

export default function Entrepreneurial() {
  return (
    <>
      <Layout title="Entrepreneurial Ecosystem Development">
        <Container>
          <Title>The project for Entrepreneurial Ecosystem Development</Title>
          <P>
            As part of the project, there was a business planning training
            conducted prior to pitching to the committee.
          </P>
          <Box mb={10}></Box>

          <WorkImage
            src="/images/activities/entrepreneurial/E1.jpg"
            alt="startup"
          />
          <WorkImage
            src="/images/activities/entrepreneurial/E2.jpg"
            alt="startup"
          />
        </Container>
      </Layout>
    </>
  );
}

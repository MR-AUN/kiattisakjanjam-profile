import { Container, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/work";
import P from "@/components/paragraph";
import Layout from "@/components/Layout/article";

export default function Startup() {
  return (
    <>
      <Layout title="The project for developing entrepreneurship skills in STARTUP">
        <Container>
          <Title>
            The project for developing entrepreneurship skills in STARTUP
          </Title>
          <P>
            I dedicated two days to participate in this program, which aimed to
            train participants in initiating ideas and turning them into actual
            startups through the process of ideation and analysis. We worked as
            a team, and each member contributed effectively to our collective
            success.
          </P>
          <Box mb={10}></Box>

          <WorkImage
            src="/images/activities/startup/startup2.jpg"
            alt="startup"
          />
          <WorkImage
            src="/images/activities/startup/startup3.jpg"
            alt="startup"
          />
          <WorkImage
            src="/images/activities/startup/startup1.jpg"
            alt="startup"
          />
        </Container>
      </Layout>
    </>
  );
}

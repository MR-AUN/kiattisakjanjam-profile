import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import thumbnailServlet from "@/public/images/works/WebServletRuay/servlet3.jpeg";
import thumbnailGUI from "@/public/images/works/GUIRuay/manage2.png";
import thumbnailSenior from "@/public/images/works/senior_project/project_01.png"
import thumbnailStartup from "@/public/images/activities/startup/startup1.jpg"
import thumbnailEntrepreneurial from "@/public/images/activities/entrepreneurial/E1.jpg"
import Layout from "@/components/Layout/article";
import { useContext, useEffect } from "react";
import { TabContext } from "./_app";

export default function Experiences() {
  // Context Tab
  const data = useContext(TabContext);

  return (
    <Layout title="Experience">
      <Container>
        <Heading as="h3" fontSize={30} mb={5}>
          Experiences
        </Heading>
        <Tabs
          variant="solid-rounded"
          colorScheme={useColorModeValue("teal", "gray")}
          index={data?.selectedTab}
          onChange={data?.selectTab}
        >
          <TabList>
            <Tab>Works</Tab>
            <Tab>Activities</Tab>
          </TabList>
          <TabPanels>
            {/* Tab Works */}
            <TabPanel>
              <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                  <WorkGridItem
                    id="servlet"
                    title="Web Servlet OTOP"
                    thumbnail={thumbnailServlet.src}
                  >
                    The e-commerce website offers a wide range of OTOP products
                    or local goods.
                  </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                  <WorkGridItem
                    id="gui"
                    title="GUI Manage OTOP"
                    thumbnail={thumbnailGUI.src}
                  >
                    The Graphical User Interface handles supplier and stock management for OTOP products.
                  </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                  <WorkGridItem
                    id="senior_project"
                    title="Senior Project Crypto Fashion Market"
                    thumbnail={thumbnailSenior.src}
                  >
                    Implemented the microservice architecture concept and incorporated digital tokens as a core component.
                  </WorkGridItem>
                </Section>
              </SimpleGrid>
            </TabPanel>
            {/* Tab Activities */}
            <TabPanel>
              <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                  <WorkGridItem
                    id="startup"
                    title="Eeveloping Entrepreneurship Skills STARTUP"
                    thumbnail={thumbnailStartup.src}
                  >
                    A training program aimed at stimulating and transforming the mindset of participants to help them develop into startups.
                  </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                  <WorkGridItem
                    id="entrepreneurial"
                    title="Entrepreneurial Ecosystem Development"
                    thumbnail={thumbnailEntrepreneurial.src}
                  >
                    A competition and contest to generate and present ideas and works related to startups.
                  </WorkGridItem>
                </Section>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
}

import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Button,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  Text,
  LinkOverlay,
  Badge,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import { ChevronRightIcon, PhoneIcon, EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio";
import Layout from "@/components/Layout/article";
import { IoLogoGithub, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { Line } from "three";

export default function Home() {
  const color = useColorModeValue("teal", "twitter")

  return (
    <Layout title="Homepage">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={1}
          fontWeight="semibold"
          textAlign="center"
        >
          I&apos;m a full-stack developer. Let&apos;s bring your ideas to life!
        </Box>
        <Text
          mb={6}
          fontWeight="semibold"
          fontSize={12}
          color={useColorModeValue("gray.600", "whiteAlpha.600")}
          as="p"
          textAlign="right"
        >
          Last Updated: Apr. 3, 2024
        </Text>

        <Box display={{ md: "flex" }}>
          {/* Tag Fullname */}
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kiattisak Janjam
            </Heading>

            <p>FULLSTACK DEVELOPER </p>
            <Box my={2}>
              <NextLink href="/skills">
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme={color}
                  variant="outline"
                >
                  My Skills
                </Button>
              </NextLink>
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/kiattisak.JPG"
              alt="Profile Image"
            />
          </Box>
        </Box>
        {/* About Me */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I am currently pursuing a bachelor's degree in Information
            Technology with a focus on Information Systems at Mahasarakham
            University. This educational background has provided me with a solid
            foundation in programming, web development, and data analysis. With
            my passion for technology and desire to become a full stack
            developer, I am equipped with the necessary skills to excel in this
            field. I am eager to contribute my expertise in creating efficient
            and user-friendly web applications, as well as leveraging data
            analysis techniques to drive informed decision-making. With a strong
            commitment to continuous learning and staying updated with industry
            trends, I am poised to contribute to the success of any development
            team.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/experiences">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue("teal", undefined)}
              >
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        {/* Works */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <Heading size='sm' mt={4}>
            ZYNTELLIGENT COMPANY LIMITED. (Not an internship)
          </Heading>
          <BioSection>
            <BioYear>MAR. 2021 - NOV. 2021</BioYear>I developed web applications
            using JSP, JavaScript, HTML, and CSS as assigned at <Link href="https://www.zyntelligent.com/" isExternal>ZYNTELLIGENT Co., Ltd.</Link>
          </BioSection>

          <Heading size='sm' mt={4}>
            Project Web Servlet & GUI
          </Heading>
          <BioSection>
            <BioYear>2021 - 2022</BioYear>I have been continuously developing
            the RuayRuayRuay website, which is a web application comprising both
            front-end and back-end components. The front-end is implemented
            using<Link href="https://github.com/MR-AUN/Web-Servlet-Ruay-OTOP.git" isExternal> Web Servlet <ExternalLinkIcon mx='2px' /></Link>technology, while the <Link href="https://github.com/MR-AUN/GUI-Ruay-OTOP.git" isExternal> Java GUI <ExternalLinkIcon mx='2px' /></Link>is created using
            Swing. constantly evolving.
          </BioSection>
          <Heading size='sm' mt={4}>
            Senior Project Crypto Fashion Market
          </Heading>
          <BioSection>
            <BioYear>2022 - SEP. 2023</BioYear>
            <Link href="https://github.com/swisspong/ms-crypto-fashion.git" isExternal>Senior Project Crypto Fashion Market. <ExternalLinkIcon mx='2px' /></Link> We will work together as a
            team to develop a website which involves building using microservice
            techniques.
          </BioSection>
          <Heading size='sm' mt={4}>
            Biofuel Management Data System (Internship)
          </Heading>
          <BioSection>
            <BioYear>DEC. 2023 - JAN. 2024</BioYear>
            Assigned task: Develop a biofuel status tracking system for the Department of Energy, encompassing form submission, dashboard, and PDF report generation, utilizing <Link style={{ textDecoration: "none", fontWeight: 600 }}>ASP.NET Framework.</Link>
          </BioSection>
          <Heading size='sm' mt={4}>
            Operational Plan and Performance Evaluation Tracking System (Internship)
          </Heading>

          <BioSection>
            <BioYear>FEB. 2024 - MAR. 2024</BioYear>
            Develop an Operational Plan and Performance Evaluation Tracking System for the Tourism Authority of Thailand. I am a Full Stack Developer position' using Next.js (Front-End) and Nest.js (Back-End).
          </BioSection>
        </Section>
        {/* Education */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2014 - 2020 &nbsp;&nbsp;&nbsp;</BioYear>
            Sikhoraphum Phisai high School Surin, Si Koraphum
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2024</BioYear>
            Information Sciences in Information Technology Mahasarakham
            University, Kantharawichai
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" id="contact">
            On the Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/MR-AUN" target="_blank">
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  colorScheme={color}
                >
                  @MR-AUN
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/a_aunso01" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={color}
                  leftIcon={<IoLogoInstagram />}
                >
                  @a_aunso01
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://web.facebook.com/KiattisakJanjam/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={color}
                  leftIcon={<IoLogoFacebook />}
                >
                  @KiattisakJanjam
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link >
                <Button
                  variant="ghost"
                  colorScheme={color}
                  leftIcon={<EmailIcon />}
                >
                  kiattisakjanjam@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link >
                <Button
                  variant="ghost"
                  colorScheme={color}
                  leftIcon={<PhoneIcon />}
                >
                  +66855089934
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}

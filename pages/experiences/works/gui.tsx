import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/work";
import P from "@/components/paragraph";
import Layout from "@/components/Layout/article";

export default function GUI() {
  return (
    <>
      <Layout title="GUI Manage OTOP">
        <Container>
          <Title>
            GUI Manage OTOP <Badge>2021 - 2022</Badge>
          </Title>
          <P>
            This is a mini project that involves OTOP products from various
            local communities. It is developed as a GUI for managing different
            aspects.
          </P>
          <List ml={4} my={10}>
            <ListItem>
              <Meta>SOURCE</Meta>
              <Link href="https://github.com/MR-AUN/kiattisakjanjam-profile.git">
                https://github.com/MR-AUN/GUI-Ruay-OTOP.git
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>

          <WorkImage
            src="/images/works/GUIRuay/manage.png"
            alt="GUI"
          />
          <WorkImage
            src="/images/works/GUIRuay/invoice.png"
            alt="GUI"
          />
          <WorkImage
            src="/images/works/GUIRuay/suppliergoods.png"
            alt="GUI"
          />
        </Container>
      </Layout>
    </>
  );
}

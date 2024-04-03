import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/work";
import P from "@/components/paragraph";
import Layout from "@/components/Layout/article";

export default function SeniorProject() {
    return (
        <>
            <Layout title="Senior Project Crypto Fashion Market">
                <Container>
                    <Title>
                        Senior Project Crypto Fashion Market <Badge>2022 - SEP. 2023</Badge>
                    </Title>
                    <P>
                        This is a senior project created by our team of two, where we implemented the microservice architecture concept and incorporated digital tokens as a core component.
                    </P>
                    <List ml={4} my={10} >
                        <ListItem>
                            <Meta>SOURCE</Meta>
                            <Link href="https://github.com/swisspong/ms-crypto-fashion.git">
                                https://github.com/swisspong/ms-crypto-fashion.git <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>

                    <WorkImage src="/images/works/senior_project/projectbody_01.png" alt="senior" />
                    <WorkImage src="/images/works/senior_project/projectbody_02.png" alt="senior" />
                    <WorkImage src="/images/works/senior_project/projectbody_03.png" alt="senior" />
                    <WorkImage src="/images/works/senior_project/projectbody_04.png" alt="senior" />
                    <WorkImage src="/images/works/senior_project/projectbody_05.png" alt="senior" />
                </Container>
            </Layout>
        </>
    );
}

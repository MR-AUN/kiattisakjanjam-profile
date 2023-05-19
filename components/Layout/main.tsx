import Head from "next/head";
import Navbar from "../navbar"
import { Box, Container } from "@chakra-ui/react";
import {ReactNode} from "react" ;
import { Router } from "next/router";

interface MainProps {
    children: ReactNode,
    router: Router
}


const Main = ({children, router }: MainProps) => {
  return (
    <>
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/panda.png" />
            </Head>

            <Navbar path={router.asPath} />
            
            <Container  maxW="container.md" pt={16}>
                {children}
            </Container>
        </Box>
    </>
  )
}

export default Main

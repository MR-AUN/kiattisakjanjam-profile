import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-style: 18px;
  display: inline-flex;
  align-item: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  img {
  transform: rotate(-20deg);
  }

  &:hover img {
    transform: rotate(0deg);
  }
`;

const Logo = () => {
  const Img = `/images/panda.png`;

  return (
    <Link href="/" passHref>
      <LogoBox>
        <Image src={Img} width={35} height={35} style={{width: "auto"}} alt="logo" />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight="bold"
          ml={3}
        >
          Kiattisak Janjam
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;

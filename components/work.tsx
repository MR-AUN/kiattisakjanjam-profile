import NextLink from "next/link";
import Image from "next/image";
import { Heading, Box, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

interface WorkImageProps {
  src: string;
  alt: string;
}

interface MetaProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <>
      <Box>
        <Link as={NextLink} href="/experiences">
          {" "}
          Experiences{" "}
        </Link>

        <span>
          &nbsp;
          <ChevronRightIcon mb={1} />
          &nbsp;
        </span>
        <Heading display="inline-block" fontSize={20} as="h3" mb={4}>
          {children}
        </Heading>
      </Box>
    </>
  );
};

export const WorkImage = ({ src, alt }: WorkImageProps) => {
  return (
    <>
      <Image
        className="grid-item"
        width={1000}
        height={1000}
        src={src}
        alt={alt}
      />
    </>
  );
};

export const Meta = ({ children }: MetaProps) => {
  return (
    <>
      <Badge mr={2} colorScheme="green" fontSize={14} fontWeight="semibold">
        {children}
      </Badge>
    </>
  );
};

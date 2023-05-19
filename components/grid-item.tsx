import NextLink from "next/link";
import { ReactNode } from "react";
import { Box, Text, Link, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { useContext, useEffect } from "react";
import { TabContext } from "@/pages/_app"; 
interface GridItemProps {
  children: ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData;
}

interface WorkGridItemProps {
  children: ReactNode;
  id: string;
  title: string;
  thumbnail: string;
}

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => {
  const data = useContext(TabContext);
  return (
    // test
    <Box w="100%" textAlign="center">
      <NextLink href={`/experiences/${data?.selectedTab === 0? "works/":data?.selectedTab === 1? "activities/": ""}${id}`}>
        <LinkBox as="div" cursor="pointer">
          <Image
            transform="scale(1.0)"
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </LinkBox>
        <Text mt={2} fontSize={20} fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </NextLink>
    </Box>
  );
};



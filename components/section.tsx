import { motion } from "framer-motion";
import { ReactNode } from "react";
import { chakra, shouldForwardProp, Container } from "@chakra-ui/react";

interface SectionProps {
  children: ReactNode;
  delay: number;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (props) => {
    return shouldForwardProp(props) || props === "transition";
  },
});

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <ChakraBox
      animate={{ y: 0, opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.8,
        delay,
      }}
      initial={{ y: 10, opacity: 0 }}
      mb={6}
    >
      {children}
    </ChakraBox>
  );
};

export default Section;

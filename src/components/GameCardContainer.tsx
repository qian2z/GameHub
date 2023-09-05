import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      height="400px"
      width="100%"
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.2s ease-in"
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

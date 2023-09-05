import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const text = isExpanded
    ? children + " "
    : children.substring(0, maxChars) + " ... ";

  return (
    <Text>
      {text}
      <Button
        size="xs"
        onClick={() => setExpanded(!isExpanded)}
        colorScheme="yellow"
        fontWeight="bold"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;

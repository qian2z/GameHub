import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListItemSkeleton = () => {
  return (
    <ListItem>
      <HStack>
        <Skeleton />
        <SkeletonText />
      </HStack>
    </ListItem>
  );
};

export default GenreListItemSkeleton;

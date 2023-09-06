import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const screenshots = data?.results;

  return screenshots ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} marginY={5}>
      {screenshots?.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;

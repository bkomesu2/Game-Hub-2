import { SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const imagesArr = data?.results;
  if (!imagesArr) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {imagesArr!.map((image) => (
        <img key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;

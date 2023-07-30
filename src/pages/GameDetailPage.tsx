import { useParams } from "react-router";
import { Game } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";

const gameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <div>Something went wrong</div>;

  return (
    <>
      <Heading>{game!.name}</Heading>
      <text>{game.description_raw}</text>
    </>
  );
};

export default gameDetailPage;

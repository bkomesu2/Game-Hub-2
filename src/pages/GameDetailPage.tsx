import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";

const gameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <div>Something went wrong</div>;

  return (
    <>
      <Heading>{game!.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default gameDetailPage;

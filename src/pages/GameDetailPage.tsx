import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const gameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return <div>Something went wrong</div>;

  return (
    <>
      <Heading>{game!.name}</Heading>
      <ExpandableText limit={100}>{game.description_raw}</ExpandableText>
    </>
  );
};

export default gameDetailPage;

import Game from "../entities/Game";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log("slug", game.slug);
  return (
    <Link to={`/games/${game.slug}`}>
      <Card
        _hover={{
          transform: "scale(1.05)",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name} <Emoji rating={game.rating_top}></Emoji>{" "}
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;

import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../common/image-url";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const paltforms = game.parent_platforms.map((p) => p.platform);
  const newPlatform = [...paltforms];
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={newPlatform}></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;

import { Box, Flex, GridItem } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const home = () => {
  return (
    <GridItem area="main">
      <h1>TEST</h1>
      <Box paddingLeft={10}>
        <GameHeading />
        <Flex marginBottom={2}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <GameGrid />
    </GridItem>
  );
};

export default home;

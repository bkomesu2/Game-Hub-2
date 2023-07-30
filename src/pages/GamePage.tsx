import { GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const GamePage = () => {
  return (
    <>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Outlet />
    </>
  );
};

export default GamePage;

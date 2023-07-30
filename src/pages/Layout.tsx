import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <Outlet />
    </>
  );
};

export default Layout;

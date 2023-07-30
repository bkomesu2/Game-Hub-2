import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

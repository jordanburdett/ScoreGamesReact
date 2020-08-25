import React from "react";
import GameList from "./GameList";
import MyAppBar from "./MyAppBar";
import Container from "@material-ui/core/Container";

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <>
      <MyAppBar title={"My Games"}/>
      <Container>
        <GameList />
      </Container>
      
    </>
  );
};

export default HomeScreen;

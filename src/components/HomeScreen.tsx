import React from "react";
import GameList from "./GameList";
import MyAppBar from "./MyAppBar";

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <>
      <MyAppBar title={"My Games"}/>
      <GameList />
    </>
  );
};

export default HomeScreen;

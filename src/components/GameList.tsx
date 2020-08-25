import React, { ReactElement, useState, useEffect } from "react";
import Game, { Team } from "../classes/Game";
import GameListItem from "./GameListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import firebase from "../classes/firebase";
import { convertGameList } from "../classes/utils";

interface Props {}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {},
  });
});

const database = firebase.database();
var defaultState: Array<Game> = []

export default function GameList(): ReactElement {
  const classes = useStyles();
  const [games, setGames] = useState(defaultState);

  // database references
  const rootRef = database.ref();
  const usersRef = rootRef.child("/Users");
  const gamesRef = rootRef.child("/games");
  const gameCodesRef = rootRef.child("/GameCodes");

  useEffect(() => {
    // grab the games from firebase
    gamesRef.once("value").then((snapshot) => {
      setGames(convertGameList(snapshot))
    });
  });

  return (
    <List component="nav" className={classes.root}>
      {games.map((game, index) => (
        <div key={game.id}>
          {index !== 0 && <Divider />}

          <GameListItem game={game} />
        </div>
      ))}
    </List>
  );
}

const testGame = new Game(
  1,
  1600111233421,
  "First Game",
  [new Team("Jordan", 5000), new Team("Amber", 6000)],
  [{ teamName: ["+500", "-299"] }]
);

// const testGame2 = new Game(2, 1600001233421, "Test Game", false, [
//   new Team("basdfdan", 5000),
//   new Team("Abob", 6000),
// ]);
// const testGame3 = new Game(3, 1600001233421, "Test Game3", true, [
//   new Team("basdfdan", 5000),
//   new Team("Abob", 6000),
// ]);

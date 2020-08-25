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
    gamesRef.on("value", (snapshot) => {
      setGames(convertGameList(snapshot))
    });

  }, []);

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

import React, { ReactElement, useState, useEffect } from "react";
import Game from "../classes/Game";
import GameListItem from "./GameListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import firebase from "../classes/firebase";
import { convertGame } from "../classes/utils";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { Typography } from "@material-ui/core";


// const mockData1 = new Game("asdfasdf1", 2342314234, "Name 1", [
//   new Team("bob", 500),
// ]);
// const mockData2 = new Game("asdfasdf2", 2342314234, "Name 1", [
//   new Team("bob", 500),
// ]);
// const mockData3 = new Game("asdfasdf3", 2342314234, "Name 1", [
//   new Team("bob", 500),
// ]);
// const mockData4 = new Game("asdfasdf4", 2342314234, "Name 1", [
//   new Team("bob", 500),
// ]);
// const mockData5 = new Game("asdfasdf5", 2342314234, "Name 1", [
//   new Team("bob", 500),
// ]);

interface Props {
  startGame: Function;
}

const database = firebase.database();
var defaultState: Array<Game> = [
  // mockData1,
  // mockData2,
  // mockData3,
  // mockData4,
  // mockData5,
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spinner: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
    },
  })
);

export default function GameList({startGame}: Props): ReactElement {
  const classes = useStyles();
  const [games, setGames] = useState(defaultState);
  const [gamesHaveLoaded, setGamesHaveLoaded] = useState(false);
  const [userHasNoGames, setUserHasNoGames] = useState(false);

  // database references
  const rootRef = database.ref();
  const usersRef = rootRef.child("/Users/" + firebase.auth().currentUser?.uid);
  const gamesRef = rootRef.child("/games");
  //const gameCodesRef = rootRef.child("/GameCodes");

  // When the component first loads run this
  useEffect(() => {
    // Fetch all of the games from firebase
    usersRef
      .child("/games")
      .orderByChild("date")
      .on("value", async (snapshot) => {

        // user has no games.
        if (snapshot.val() === null) {
          setGamesHaveLoaded(false);
          setUserHasNoGames(true);

          return;
        }

        var count = 0;

        const newGames: Array<Game> = [];

        snapshot.forEach((snap) => {
          gamesRef.child("/" + snap.key).once("value", (game) => {
            if (game.val() === null) {
              // Game Id not found lets clean up the database a little and delete the ones that the game does not exist on.
              usersRef.child("/games/" + snap.key).set(null);
            } else {
              //game.val() contains a single game.
              const newGame = convertGame(game);
              newGames.push(newGame);
              count = count + 1;
              if (count === snapshot.numChildren()) {
                newGames.reverse();
                setGames(newGames);
                setGamesHaveLoaded(true);
                setUserHasNoGames(false);
              }
            }
          });
        });
      });
  }, []);

  return (
    <>
      {gamesHaveLoaded ? (
        <List component="nav">
          {games.map((game, index) => (
            <div key={game.id}>
              {index !== 0 && <Divider />}
              <GameListItem onClick={startGame} game={game} />
            </div>
          ))}
        </List>
      ) : userHasNoGames ? (
        <Typography variant="subtitle1" style={{ padding: "20px" }}>
          No games here... You should make one!
        </Typography>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}

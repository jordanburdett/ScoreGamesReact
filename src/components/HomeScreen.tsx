import React, { useState } from "react";
import GameList from "./GameList";
import MyAppBar from "./MyAppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button/Button";
import Game, { Team, TeamHistory } from "../classes/Game";
import firebase from "../classes/firebase";
import CreateGame from "./CreateGame";
import Fab from "@material-ui/core/Fab/Fab";
import AddIcon from "@material-ui/icons/Add";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import PlayGame from "./PlayGame";
import styled from "styled-components";

interface Props {}

const NewGameButton = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

var gameState: Game;

const HomeScreen = (props: Props) => {

  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  const [gameToPlay, setGameToPlay] = useState(gameState);

  const createGame = () => {
    setIsCreatingGame(true);
    setIsPlayingGame(false);
  };

  const startGame = (game: Game) => {
    // console.log("start game called");
    setGameToPlay(game);
    setIsCreatingGame(false);
    setIsPlayingGame(true);
  };

  const backToGameList = () => {
    setIsCreatingGame(false);
    setIsPlayingGame(false);
  }

  return (
    <div>
      <MyAppBar
        title={
          isCreatingGame
            ? "Create Game"
            : isPlayingGame
            ? gameToPlay.name
            : "My Games"
        }
        showBackArrow={isPlayingGame || isCreatingGame ? true : false}
        onBackArrowClick={backToGameList}
      />
      <Container>
        {isCreatingGame && <CreateGame startGame={startGame} />}
        {isPlayingGame && <PlayGame game={gameToPlay} />}
        {isCreatingGame === false && isPlayingGame === false && (
          <>
            <GameList startGame={startGame} />
            <div>
              <NewGameButton
                color="secondary"
                size="large"
                aria-label="add"
                onClick={createGame}
              >
                <AddIcon />
              </NewGameButton>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default HomeScreen;

// const buttonClick = async () => {
//   let history = new TeamHistory(["+500", "-200", "+5", "+200", "-299"]);
//   let team = new Team("Bob", history.calcTotalScore(), history);

//   let history2 = new TeamHistory(["+50", "-20", "+50", "+204560", "-299"]);
//   let team2 = new Team("Billy", history2.calcTotalScore(), history);
//   let newGameRef = await firebase.database().ref("/games").push();
//   let game = new Game(
//     newGameRef.key || "123214",
//     Date.now(),
//     "Game created in code",
//     [team, team2]
//   );

//   newGameRef.set(game);
//   let update = new Map();
//   update.set(newGameRef.key, true);

//   let userId = firebase.auth().currentUser?.uid;
//   console.log(userId);
//   console.log(update);
//   firebase
//     .database()
//     .ref("/Users/" + userId + "/games")
//     .update(Object.fromEntries(update), () => {
//       console.log("completed?");
//     });
// };

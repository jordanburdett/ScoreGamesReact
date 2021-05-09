import React, { useState } from "react";
import GameList from "./GameList";
import MyAppBar from "./MyAppBar";
import Container from "@material-ui/core/Container";
import Game, { Team, TeamHistory } from "../classes/Game";
import CreateGame from "./CreateGame";
import Fab from "@material-ui/core/Fab/Fab";
import AddIcon from "@material-ui/icons/Add";
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

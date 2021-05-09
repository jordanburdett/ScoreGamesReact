import React, { useState, useEffect } from "react";
import Game, { TeamHistory, Team, Round } from "../classes/Game";
import firebase from "../classes/firebase";
import { convertGame } from "../classes/utils";
import PlayGameTeam from "./PlayGameTeam";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button, TextField, Typography } from "@material-ui/core";
import ScoreRound from "./ScoreRound";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GameInfoLink from "./gamePlayScreen/GameInfoLink"

interface Props {
  game: Game;
}

const PlayGame = (props: Props) => {
  const [game, setGame] = useState(props.game);
  const [isScoringRound, setIsScoringRound] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [gameCode, setGameCode] = useState("Loading...");
  const [hasGameCode, setHasGameCode] = useState(true);
  const [newGameCode, setNewGameCode] = useState("");
  const [newGameCodeError, setNewGameCodeError] = useState(false)

  const onGameCodeChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGameCode(event.target.value);

    if (await checkForValidCode(event.target.value)) {
      setNewGameCodeError(false);
    }
    else {
      setNewGameCodeError(true);
    }
  };

  const saveGameCode = async () => {
    if (checkForValidCode(newGameCode)) {
      firebase.database().ref("/GameCodes/" + game.id).set({
        code: newGameCode
      })
    }
    else {
      // INVALID CODE HANDLE ERROR
      setNewGameCodeError(true);
    }
  };

  const checkForValidCode = async (testCode: string) => {
    const snapshot = await firebase
      .database()
      .ref("GameCodes/")
      .orderByChild("code")
      .equalTo(testCode)
      .once("value");

    if (snapshot.val()) {
      // we have something here... not valid
      return false;
    }
    
    return true;
  };

  const updatePoints = (score: number, index: number) => {
    let newHistory: Array<string> = [];

    if (game.teams[index].history) {
      if (score > 0) {
        newHistory = [
          ...game.teams[index].history.pastScores,
          "+" + String(score),
        ];
      } else {
        newHistory = [...game.teams[index].history.pastScores, String(score)];
      }
    } else {
      if (score > 0) {
        newHistory.push("+" + String(score));
      } else {
        newHistory.push(String(score));
      }
    }

    const newScore = game.teams[index].score + score;

    firebase
      .database()
      .ref("/games/" + props.game.id + "/teams/" + index)
      .update({
        score: newScore,
        history: {
          pastScores: newHistory,
        },
      });
  };

  const applyRound = (round: Round) => {
    round.teams.forEach((team, index) => {
      updatePoints(Number(team), index);
    });

    setIsScoringRound(false);
  };

  const exitRound = () => {
    setIsScoringRound((prevRound) => false);
  };

  // Database calls
  useEffect(() => {
    const database = firebase.database();

    database.ref("/games/" + game.id).on("value", (snapshot) => {
      setGame((prevGames) => convertGame(snapshot));
    });

    database.ref("/GameCodes/" + game.id).on("value", (snapshot) => {
      if (snapshot.val()) {
        console.log("game code " + snapshot.val().code);
        setGameCode((prev) => snapshot.val().code);
        setHasGameCode((prev) => true);
      } else {
        console.log("no game code");
        setHasGameCode((prev) => false);
      }
    });
  }, []);

  const settingsClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {!isScoringRound && (
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <IconButton
              style={{ margin: "0", padding: "0" }}
              onClick={settingsClicked}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="settingsMenu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {hasGameCode ? (
                <MenuItem>GameCode is "{gameCode}"</MenuItem>
              ) : (
                <MenuItem>
                  <Typography>Set a gameCode</Typography>
                  <TextField
                    value={newGameCode}
                    onChange={onGameCodeChange}
                    style={{
                      padding: "5px",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    error={newGameCodeError}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={saveGameCode}
                  >
                    Save
                  </Button>
                </MenuItem>
              )}
              <MenuItem>
                    {/* Link should come from database of game type TODO - conditionally load component if a game info link has been set*/}
                    <GameInfoLink link="www.google.com" />
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <IconButton
              style={{ marginRight: "0", paddingRight: "0" }}
              onClick={() => setIsScoringRound(true)}
            >
              <Typography>Score Round</Typography>
              <PlayArrowIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}

      {isScoringRound ? (
        <ScoreRound game={game} applyRound={applyRound} exitRound={exitRound} />
      ) : (
        game.teams.map((team, index) => (
          <PlayGameTeam
            team={team}
            key={team.name + index}
            index={index}
            updatePoints={updatePoints}
            gameId={props.game.id}
          />
        ))
      )}
    </div>
  );
};

export default PlayGame;

import React, { useState, useEffect } from "react";
import Game, { TeamHistory, Team, Round } from "../classes/Game";
import firebase from "../classes/firebase";
import { convertGame } from "../classes/utils";
import PlayGameTeam from "./PlayGameTeam";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Typography } from "@material-ui/core";
import ScoreRound from "./ScoreRound";

interface Props {
  game: Game;
}

const PlayGame = (props: Props) => {
  const [game, setGame] = useState(props.game);
  const [isScoringRound, setIsScoringRound] = useState(false);

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
      updatePoints(Number(team), index)
    })

    setIsScoringRound(false);
  }

  useEffect(() => {
    const database = firebase.database();

    database.ref("/games/" + game.id).on("value", (snapshot) => {
      setGame(convertGame(snapshot));
    });
  }, []);

  

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
            <IconButton style={{ margin: "0", padding: "0" }}>
              <SettingsIcon />
            </IconButton>
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
        <ScoreRound game={game} applyRound={applyRound}/>
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

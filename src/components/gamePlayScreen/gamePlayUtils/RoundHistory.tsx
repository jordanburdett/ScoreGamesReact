import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import HistoryItem from "./HistoryItem";
import Game from "../../../classes/Game";

interface Props {
  game: Game;
  currentTeamIndex: number;
}

const RoundHistory = ({ game, currentTeamIndex }: Props) => {
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      alignItems="center"
      style={{
        paddingLeft: "0",
        paddingRight: "0",
        marginLeft: "0",
        marginRight: "0",
      }}
      spacing={0}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="subtitle1">History</Typography>
      </Grid>
      {game.teams[currentTeamIndex].history &&
        game.teams[currentTeamIndex].history.pastScores.map(
          (historyScore, historyIndex) => {
            return (
              <HistoryItem
                key={
                  game.teams[currentTeamIndex].name +
                  historyScore +
                  historyIndex
                }
                isEditing={false}
                score={historyScore}
                index={historyIndex}
                teamIndex={currentTeamIndex}
                teamHistory={game.teams[currentTeamIndex].history}
                teamScore={game.teams[currentTeamIndex].score}
                gameId={game.id}
              />
            );
          }
        )}
    </Grid>
  );
};

export default RoundHistory;

import React from "react";
import { Grid, IconButton, TextField } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Game from "../../../classes/Game";

interface Props {
  game: Game;
  score: string;
  currentTeamIndex: number;

  textField: React.RefObject<HTMLDivElement>;

  onPreviousPlayer: Function;
  onNextPlayer: Function;
  showSummary: Function;
  setScore: Function;
}

const RoundTextField = ({
  textField,
  score,
  setScore,
  showSummary,
  onNextPlayer,
  game,
  currentTeamIndex,
}: Props) => {
  const keyPressed = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (currentTeamIndex === game.teams.length - 1) {
        showSummary();
      } else {
        onNextPlayer();
      }
    }
  };

  const onBackClick = () => {
    if (currentTeamIndex + 1 === game.teams.length) {
      showSummary(true);
    } else {
      onNextPlayer(true);
    }
  }

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={3} style={{ textAlign: "right" }}>
        <IconButton
          onClick={onBackClick}
        >
          <RemoveIcon color="secondary" />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <TextField
          inputRef={textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="tel"
          label="Score this Round"
          value={score}
          onChange={(event) => setScore(event.target.value)}
          onKeyPress={(event) => keyPressed(event)}
          autoFocus
          inputMode="numeric"
          onClick={(e) => e.stopPropagation()}
        />
      </Grid>
      <Grid item xs={3} style={{ textAlign: "left" }}>
        <IconButton
          onClick={
            currentTeamIndex + 1 === game.teams.length
              ? () => showSummary()
              : () => onNextPlayer()
          }
        >
          <AddIcon color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default RoundTextField;

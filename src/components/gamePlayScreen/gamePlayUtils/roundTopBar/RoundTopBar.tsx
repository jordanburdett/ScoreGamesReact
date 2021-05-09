import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Game from "../../../../classes/Game";

interface Props {
  currentTeamIndex: number;
  onPreviousPlayer: Function;
  game: Game;
  onNextPlayer: Function;
  showSummary: Function;
  exitRound: Function;
}

const RoundTopBar = ({
  currentTeamIndex,
  onPreviousPlayer,
  game,
  onNextPlayer,
  showSummary,
  exitRound,
}: Props) => {
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      alignItems="center"
      style={{ marginTop: "10px" }}
    >
      <Grid item xs={4}>
        {currentTeamIndex > 0 ? (
          <IconButton
            style={{ paddingLeft: "0", marginLeft: "0" }}
            onClick={() => onPreviousPlayer()}
          >
            <ArrowBackIosIcon />
            <Typography noWrap>
              {game.teams[currentTeamIndex - 1].name}
            </Typography>
          </IconButton>
        ) : (
          <IconButton
            style={{ paddingLeft: "0", marginLeft: "0" }}
            onClick={() => exitRound()}
          >
            <ArrowBackIosIcon />
            <Typography noWrap>Back</Typography>
          </IconButton>
        )}
      </Grid>
      <Grid item xs={4} style={{ textAlign: "center" }}>
        <Typography variant="h5">
          {game.teams[currentTeamIndex].name}
        </Typography>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "right" }}>
        {currentTeamIndex < game.teams.length - 1 ? (
          <IconButton
            style={{ paddingRight: "0", marginRight: "0" }}
            onClick={() => onNextPlayer()}
          >
            <Typography noWrap>
              {game.teams[currentTeamIndex + 1].name}
            </Typography>
            <ArrowForwardIosIcon />
          </IconButton>
        ) : (
          <IconButton
            style={{ paddingRight: "0", marginRight: "0" }}
            onClick={() => showSummary()}
          >
            <Typography noWrap>Summary</Typography>
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default RoundTopBar;

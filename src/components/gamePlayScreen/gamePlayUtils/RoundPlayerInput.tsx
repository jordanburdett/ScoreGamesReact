import React from "react";
import {
  Grid,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import HistoryItem from "./HistoryItem";
import Game from "../../../classes/Game";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RoundTopBar from "./roundTopBar/RoundTopBar";
import RoundTextField from "./RoundTextField";
import RoundHistory from "./RoundHistory";

interface Props {
  currentTeamIndex: number;
  game: Game;
  score: string;

  textField: React.RefObject<HTMLDivElement>;

  onPreviousPlayer: Function;
  onNextPlayer: Function;
  showSummary: Function;
  setScore: Function;
  exitRound: Function;
}

const RoundPlayerInput = ({
  currentTeamIndex,
  onPreviousPlayer,
  onNextPlayer,
  showSummary,
  game,
  score,
  setScore,
  textField,
  exitRound,
}: Props) => {
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
      {/* Top Bar containing buttons to go between players */}
      <RoundTopBar
        currentTeamIndex={currentTeamIndex}
        onPreviousPlayer={onPreviousPlayer}
        game={game}
        onNextPlayer={onNextPlayer}
        showSummary={showSummary}
        exitRound={exitRound}
      />

      {/* Text Input Field and plus and minus buttons */}
      <RoundTextField
        game={game}
        score={score}
        currentTeamIndex={currentTeamIndex}
        textField={textField}
        onPreviousPlayer={onPreviousPlayer}
        onNextPlayer={onNextPlayer}
        showSummary={showSummary}
        setScore={setScore}
      />

      {/* RoundHistory */}
      <RoundHistory game={game} currentTeamIndex={currentTeamIndex}/>

      {/* Next Player Button */}
      <Grid item xs={12} style={{ textAlign: "right", paddingTop: "40px" }}>
        {currentTeamIndex < game.teams.length - 1 ? (
          <Button variant="outlined" onClick={() => onNextPlayer()}>
            Next Player
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => showSummary()}>
            Summary
          </Button>
        )}
      </Grid>

    </Grid>
  );
};

export default RoundPlayerInput;

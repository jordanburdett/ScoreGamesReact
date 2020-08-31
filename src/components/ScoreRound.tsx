import React, { useState, createRef } from "react";
import Game, { Round } from "../classes/Game";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import HistoryItem from "./HistoryItem";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

interface Props {
  game: Game;
  applyRound: Function;
}

const ScoreRound = ({ game, applyRound }: Props) => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [score, setScore] = useState("");
  const [round, setRound] = useState(new Round([]));
  const [isShowingSummary, setIsShowingSummary] = useState(false);

  const textField = createRef<HTMLDivElement>();

  const onNextPlayer = () => {
    saveToRound();
    if (round.teams[currentTeamIndex + 1]) {
      setScore(String(Number(round.teams[currentTeamIndex + 1])));
    }

    setCurrentTeamIndex(currentTeamIndex + 1);
    textField.current?.focus();
  };

  const onPreviousPlayer = () => {
    saveToRound();
    if (round.teams[currentTeamIndex - 1]) {
      setScore(String(Number(round.teams[currentTeamIndex - 1])));
    }
    setCurrentTeamIndex(currentTeamIndex - 1);

    const node = textField.current;
    if (node) {
      node.focus();
    }
  };

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

  const getScoreString = () => {
    const value = Number(score);

    if (value > 0) {
      return "+" + value;
    }

    return score;
  };

  const saveToRound = () => {
    const scoreString = getScoreString();

    const newRound = new Round(round.teams);
    newRound.setValue(currentTeamIndex, scoreString);

    setScore("");
  };

  const onSetScoreInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setScore(event.target.value);
  };

  const showSummary = () => {
    saveToRound();
    console.log(round);
    setIsShowingSummary(true);
  };

  const backToEdit = () => {
    setIsShowingSummary(false)

    if (round.teams[currentTeamIndex]) {
      setScore(String(Number(round.teams[currentTeamIndex])));
    }
  }

  const makeNegative = () => {
    setScore("-" + score)

    if (currentTeamIndex + 1 === game.teams.length) {
      console.log("last one")
      showSummary()
      return;
    }

    console.log("in make negative", score)
    
    onNextPlayer()
    
  }

  return (
    <div
      style={{
        paddingLeft: "0",
        paddingRight: "0",
        marginLeft: "0",
        marginRight: "0",
      }}
    >
      {/* TODO THIS NEEDS TO BE SIMPLIFIED INTO SMALLER COMPONENTS */}
      {isShowingSummary ? (
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          spacing={2}
          style={{textAlign: "center", padding: "20px"}}
        >
          <Grid item xs={12}>
            <Typography variant="h5">Summary</Typography>
          </Grid>
          {game.teams.map((team, index) => (
            <Grid item xs={4} key={team.name + index}>
              <Paper variant="outlined">
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6">{team.name}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      {round.teams[index]}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}

          <Grid container style={{paddingTop: "20px"}}>
          <Grid item xs={6} style={{textAlign: "left"}}>
            <Button variant="outlined" color="secondary" onClick={backToEdit}>Edit</Button>
          </Grid>
          <Grid item xs={6} style={{textAlign: "right"}}>
            <Button variant="outlined" color="primary" onClick={() => applyRound(round)}>Confirm</Button>
          </Grid>
          </Grid>
          
        </Grid>
      ) : (
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
          <Grid item xs={4}>
            {currentTeamIndex > 0 && (
              <IconButton
                style={{ paddingLeft: "0", marginLeft: "0" }}
                onClick={onPreviousPlayer}
              >
                <ArrowBackIosIcon />
                <Typography noWrap>
                  {game.teams[currentTeamIndex - 1].name}
                </Typography>
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
                onClick={onNextPlayer}
              >
                <Typography noWrap>
                  {game.teams[currentTeamIndex + 1].name}
                </Typography>
                <ArrowForwardIosIcon />
              </IconButton>
            ) : (
              <IconButton
                style={{ paddingRight: "0", marginRight: "0" }}
                onClick={showSummary}
              >
                <Typography noWrap>Summary</Typography>
                <ArrowForwardIosIcon />
              </IconButton>
            )}
          </Grid>

          <Grid item xs={3} style={{textAlign: "right"}}>
              <IconButton onClick={makeNegative}>
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
              onChange={onSetScoreInputChange}
              onKeyPress={(event) => keyPressed(event)}
              autoFocus
              inputMode="numeric"
              onClick={(e) => e.stopPropagation()}
            />
          </Grid>
          <Grid item xs={3} style={{textAlign: "left"}}>
              <IconButton onClick={(currentTeamIndex + 1 === game.teams.length ? showSummary : onNextPlayer)}>
                <AddIcon color="primary" />
              </IconButton>
            </Grid>

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
          <Grid item xs={12} style={{ textAlign: "right", paddingTop: "40px" }}>
            {currentTeamIndex < game.teams.length - 1 ? (
              <Button variant="outlined" onClick={onNextPlayer}>
                Next Player
              </Button>
            ) : (
              <Button variant="outlined" onClick={showSummary}>
                Summary
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ScoreRound;

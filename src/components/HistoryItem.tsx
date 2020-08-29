import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Grid,
  IconButton,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import firebase from "../classes/firebase"
import { TeamHistory } from "../classes/Game";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(2),
      textAlign: "center",
      padding: "10px",
    },
    teamName: {
      textAlign: "left",
      marginLeft: theme.spacing(2),
    },
    history: {
      padding: "5px",
      margin: "5px",
    },
    editButton: {
      textAlign: "right",
    },
    clearIconContainer: {},
    clearIcon: {
      padding: "0",
      margin: "0",
    },
  })
);

interface Props {
  isEditing: boolean;
  score: string;
  index: number;
  teamIndex: number;
  teamHistory: TeamHistory;
  teamScore: number;
  gameId: string;
}

const HistoryItem = ({ isEditing, score, index, teamIndex, teamHistory, teamScore, gameId }: Props) => {
  const classes = useStyles();

  const removeHistoryItem = () => {
    if (!isEditing) {
      return;
    }

    const newHistory: Array<string> = [...teamHistory.pastScores];
    newHistory.splice(index, 1)
    const newScore = teamScore - Number(score)

    console.log("current team history", teamHistory)
    console.log("current team index ", teamIndex)

    firebase
      .database()
      .ref("/games/" + gameId + "/teams/" + teamIndex)
      .update({
        score: newScore,
        history: {
          pastScores: newHistory,
        },
      }, () => {
        console.log("history removed")
      });
  };

  return (
    <Paper variant="outlined" className={classes.history}>
      <Grid container justify="center" alignItems="center">
        {isEditing && (
          <Grid item xs={12} className={classes.clearIconContainer}>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                removeHistoryItem();
              }}
              className={classes.clearIcon}
            >
              <ClearIcon fontSize="small" className={classes.clearIcon} />
            </IconButton>
          </Grid>
        )}
        <Grid item xs={12}>
          {score}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HistoryItem;

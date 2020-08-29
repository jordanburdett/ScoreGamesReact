import React, { FormEvent, useState } from "react";
import Game, { Team } from "../classes/Game";
import {
  Paper,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  IconButton,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import firebase from "../classes/firebase";
import EditIcon from "@material-ui/icons/Edit";
import HistoryItem from "./HistoryItem";

interface Props {
  team: Team;
  updatePoints: Function;
  index: number;
  gameId: string;
}

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

const PlayGameTeam = ({ team, updatePoints, index, gameId }: Props) => {
  const classes = useStyles();

  const [cardExpanded, setCardExpanded] = useState(false);
  const [scoreChange, setScoreChange] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const expandCard = () => {
    setCardExpanded(!cardExpanded);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(event.target.value))) {
      return;
    }
    setScoreChange(event.target.value);
  };

  // const updatePoints = () => {
  //   // update the model with a new instance
  //   const newTeam = team.createTeamForFirebase()
  //   newTeam.addScore(Number(scoreChange))

  //   firebase.database().ref("/games/" + gameId + "/" + index).update(newTeam)

  // }

  const addScore = (isPositive: boolean) => {
    if (scoreChange === "") {
      return;
    }

    

    if (isPositive) {
      updatePoints(Number(scoreChange), team.name, index);
    } else {
      updatePoints(Number("-" + scoreChange), team.name, index);
    }

    setScoreChange("");
    setCardExpanded(false);
  };

  return (
    <Paper className={classes.paper} variant="outlined" onClick={expandCard}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.teamName}>
            {team.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{team.score}</Typography>
        </Grid>
        <Grid item xs={12}>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </Grid>

        {cardExpanded && (
          <>
            <Grid item xs={3}>
              <IconButton onClick={() => addScore(false)}>
                <RemoveIcon color="secondary" />
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="tel"
                label="+ or - Score"
                name="gameName"
                value={scoreChange}
                onChange={onInputChange}
                autoFocus
                inputMode="numeric"
                onClick={(e) => e.stopPropagation()}
              />
            </Grid>
            <Grid item xs={3}>
              <IconButton onClick={() => addScore(true)}>
                <AddIcon color="primary" />
              </IconButton>
            </Grid>

            {team.history &&
              team.history.pastScores.map((score, historyIndex) => {
                return (
                  <HistoryItem
                    key={index}
                    isEditing={isEditing}
                    score={score}
                    index={historyIndex}
                    teamIndex={index}
                    teamScore={team.score}
                    teamHistory={team.history}
                    gameId={gameId}
                  />
                );
              })}

            <Grid item xs={12} className={classes.editButton}>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  setIsEditing(!isEditing);
                }}
              >
                <EditIcon />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
};

export default PlayGameTeam;

import React from "react";
import { Team } from "../classes/Game";
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Box,
  Paper,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

interface Props {
  team: Team;
  onDelete: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {},
    text: {},
  })
);

const CreateTeamDisplay = ({ team, onDelete }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card} variant="outlined">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={8}>
          <Typography
            variant="subtitle1"
            style={{ padding: "5px", paddingTop: "20px", paddingBottom: "20px" }}
          >
            {team.name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <IconButton onClick={() => onDelete(team.name)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateTeamDisplay;

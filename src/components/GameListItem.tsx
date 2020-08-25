import React, { useState } from "react";
import Game, { Team } from "../classes/Game";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import CheckBox from "@material-ui/core/Checkbox";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {firebaseUpdateIsFavorite} from '../classes/firebase'

interface Props {
  game: Game;
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    arrow: {
      minWidth: "0",
    },
  });
});

const GameListItem = ({ game }: Props) => {
  const classes = useStyles();

  // state to keep track of
  const [date, setDate] = useState(new Date(game.date));
  const [gameName, setGameName] = useState(game.name);
  const [isFavorite, setIsFavorite] = useState(game.isFavorite);

  const starClicked = () => {
    firebaseUpdateIsFavorite(!isFavorite, game.id)
    setIsFavorite(!isFavorite);
    
  };

  return (
    <ListItem
      key={game.id}
      button
      onClick={(event) => {
        console.log("Play " + gameName);
      }}
    >
      <ListItemText primary={gameName} secondary={date.toDateString()} />

      <ListItemSecondaryAction>
        <CheckBox
          edge="end"
          checked={isFavorite}
          onChange={starClicked}
          checkedIcon={<StarIcon style={{color:"#FFDF00"}}/>}
          icon={<StarBorder />}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default GameListItem;

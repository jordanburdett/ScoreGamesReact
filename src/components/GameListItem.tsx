import React, { useState, useEffect } from "react";
import Game from "../classes/Game";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import CheckBox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import firebase, { firebaseUpdateIsFavorite } from "../classes/firebase";

interface Props {
  game: Game;
  onClick: Function;
}


const GameListItem = ({ game, onClick }: Props) => {

  // state to keep track of
  const [date] = useState(new Date(game.date));
  const [gameName] = useState(game.name);
  const [isFavorite, setIsFavorite] = useState(game.isFavorite);

  const starClicked = () => {
    firebaseUpdateIsFavorite(!isFavorite, game.id);
  };

  useEffect(() => {
    firebase.database().ref(`games/${game.id}/isFavorite`).on("value", snapshot => {
      setIsFavorite(snapshot.val())
    })
  }, []);

  return (
    <ListItem
      key={game.id}
      button
      onClick={() => {
        onClick(game)
      }}
    >
      <ListItemText primary={gameName} secondary={date.toDateString()} />

      <ListItemSecondaryAction>
        <CheckBox
          edge="end"
          checked={isFavorite}
          onChange={starClicked}
          checkedIcon={<StarIcon style={{ color: "#FFDF00" }} />}
          icon={<StarBorder />}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default GameListItem;

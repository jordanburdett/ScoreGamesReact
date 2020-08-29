import React, { useState, useEffect } from "react";
import Game, { TeamHistory, Team } from "../classes/Game";
import firebase from "../classes/firebase";
import { convertGame } from "../classes/utils";
import PlayGameTeam from "./PlayGameTeam";

interface Props {
  game: Game;
}

const PlayGame = (props: Props) => {
  const [game, setGame] = useState(props.game);

  const updatePoints = (score: number, teamName: string, index: number) => {
    let newHistory: Array<string> = [];

    if (score > 0) {
      newHistory = [
        ...game.teams[index].history.pastScores,
        "+" + String(score),
      ];
    } else {
      newHistory = [...game.teams[index].history.pastScores, String(score)];
    }

    const newScore = game.teams[index].score + score;

    firebase
      .database()
      .ref("/games/" + props.game.id + "/teams/" + index)
      .update({
        score: newScore,
        history: {
          pastScores: newHistory,
        },
      });
  };

  useEffect(() => {
    const database = firebase.database();

    database.ref("/games/" + game.id).on("value", (snapshot) => {
      setGame(convertGame(snapshot));
    });
  }, []);

  return (
    <div>
      {game.teams.map((team, index) => (
        <PlayGameTeam
          team={team}
          key={team.name}
          index={index}
          updatePoints={updatePoints}
        />
      ))}
    </div>
  );
};

export default PlayGame;

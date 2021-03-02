import React, { useEffect, useState } from "react";

import {
  auth,
  firebase,
  database,
} from "../../features/Firebase/firebaseConnect";

import { useRouter } from "next/router";
import Game, {
  Player,
  Team,
  transformFromFirebase,
} from "../../features/models/game";
import Button from "react-bootstrap/Button";

const list = () => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);

  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    // listen for loggin in or loggin out.
    const cancelAuthChange = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is signed in
        setLoggedIn(() => true);
        console.log("you are logged in");
      } else {
        // No user is signed in.
        setLoggedIn(() => false);
        router.push("/account/login");
      }
    });
    // stop subscribing to auth changes
    return cancelAuthChange;
  });

  const game = new Game("FirstGame", [
    new Team("Team 1", 0, [0]),
    new Team("Team 1", 0, [0]),
  ]);

  // game.teams.push(new Team("Team 2", 1, new History([1])))

  // adds a new game to firebase
  const addGame = () => {
    // check for login ---TODO

    const usersRef = database.ref("/users");

    // add the game
    const reference = database.ref("/games").push(game);
    console.log("look here", reference.key);
    // add the game to the user

    database.ref("users/" + auth.currentUser?.uid + "/games").child(reference.key).set(true);
    
  };

  // takes a game id passed in by reference and returns the game as a Game object
  const createGameFromFirebase = async () => {
    database
      .ref("/")
      .once("value")
      .then((res) => transformFromFirebase(res.val()))
      .then((value: Game) => {
        console.log(value.getTeamNames());
        return value;
      });
  };

  return (
    <>
      <div>Welcome to the game list</div>
      <Button onClick={addGame}>Try me.</Button>
      <Button onClick={createGameFromFirebase}>Test add from firebase</Button>
    </>
  );
};

export default list;

import React, { useEffect, useState } from "react";

import {
  auth,
  firebase,
  database,
} from "../../features/Firebase/firebaseConnect";

import { useRouter } from "next/router";
import Game, {
  getGameListForUser,
  Player,
  Team,
  transfromGamesFromFirebase,
} from "../../features/models/game";

import Button from "react-bootstrap/Button";
import AppBar from "@material-ui/core/AppBar/AppBar"

const list = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [gamesList, setGamesList] = useState<Array<Game>>([]);

  useEffect(() => {
    // listen for loggin in or loggin out.
    const cancelAuthChange = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is signed in
        setLoggedIn(() => true);
        
        // anything we need to set for the user

        // setGameList
        setGamesList(getGameListForUser(user.uid));
        
      } else {
        // No user is signed in.
        setLoggedIn(() => false);
        router.push("/");
      }
    });
    // stop subscribing to auth changes
    return cancelAuthChange;
  }, []);

  // adds a new game to firebase
  const addNewGameToFirebase = (game: Game) => {
    // check for login ---TODO - extra error handling. Incase of timeout in order to prevent app from crashing due to no database access or no being able to reference UID
    const usersRef = database.ref("/users");

    // add the game
    const reference = database.ref("/games").push(game);
    
    // add the game to the user
    database.ref("users/" + auth.currentUser?.uid + "/games").child(reference.key).set(true);
    
  };

  

  return (
    <>
      <Button>Some button?</Button>
      <AppBar>some content</AppBar>
    </>
  );
};

export default list;

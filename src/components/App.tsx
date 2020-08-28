import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import DarkModeToggle from "./DarkModeToggle";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import firebase from "firebase";

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const [loggedIn, setLoggedIn] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {loggedIn ? <HomeScreen /> : <LoginScreen />}
    </ThemeProvider>
  );
}

export default App;

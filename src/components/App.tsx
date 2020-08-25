import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import DarkModeToggle from "./DarkModeToggle";
import HomeScreen from "./HomeScreen"



function App() {
  
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;

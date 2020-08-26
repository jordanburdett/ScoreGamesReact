import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface Props {}

const LoginScreen = (props: Props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <Container>
        <Typography align="center" variant="h3" style={{marginTop: "50px"}}>
          Score Games
        </Typography>
      </Container>
      {isSignUp ? (
        <SignUp toggle={toggleSignUp} />
      ) : (
        <SignIn toggle={toggleSignUp} />
      )}
    </>
  );
};

export default LoginScreen;

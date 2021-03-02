import React, {useState} from "react";

// bootstrap styles
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// firebase
import { firebase, auth } from "../../features/Firebase/firebaseConnect";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// next router
import { useRouter } from "next/router";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/game/list',
  // We will display Google as auth providers
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}


interface Props {}

const Login = (props: Props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();


  return (
    <Container>
      <Jumbotron>
        <Container>
          <h1>Login</h1>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Login;

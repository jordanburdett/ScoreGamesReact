import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface Props {}

const Login = (props: Props) => {
  return (
    <Container>
      <Jumbotron>
        <ButtonGroup className="mr-2">
          <Button variant="primary">Login</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="dark">Sign-up</Button>
        </ButtonGroup>
      </Jumbotron>
    </Container>
  );
};

export default Login;

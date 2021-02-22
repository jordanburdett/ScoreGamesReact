import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface Props {}

const Login = (props: Props) => {
  return (
    <Container fluid>
      <Jumbotron fluid>
        Login
      </Jumbotron>
    </Container>
    
  );
};

export default Login;

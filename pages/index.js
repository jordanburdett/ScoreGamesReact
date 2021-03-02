import next from "next";
import Head from "next/head";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onLoginClick = () => {
    router.push("account/login");
  };

  const onRegisterClick = () => {
    router.push("account/register");
  }

  return (
    <Container>
      <Jumbotron>
        <Container>
          <h1>Welcome to Score Games.</h1>
          <p>The free to use realtime card game tracker!</p>

          <Row>
            <Col>
              <Button onClick={onLoginClick}>Login Here</Button>
            </Col>
            <Col>
              <Button onClick={onRegisterClick}>Register</Button>
            </Col>
            <Col>
              <Button onClick={onLoginClick}>
                Login with google(future feature)
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
}

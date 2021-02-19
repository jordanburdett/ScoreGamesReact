import next from "next";
import Head from "next/head";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const onLoginClick = () => {
    router.push("/login");
  }

  return (
    <Container>
      <Jumbotron flud={false}>
        <Container>
          <h1>Welcome to the Index Page.</h1>
          <p>You should be redirected if not login below</p>
          <Button onClick={onLoginClick}>Login Here</Button>
        </Container>
      </Jumbotron>
    </Container>
  );
}

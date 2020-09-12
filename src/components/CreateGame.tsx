import React, { useState, FormEvent } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import Game, { Team } from "../classes/Game";
import Container from "@material-ui/core/Container/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CreateTeamDisplay from "./CreateTeamDisplay";
import firebase from "../classes/firebase"
import { convertGame } from "../classes/utils";

interface Props {
  startGame: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
    paper: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

const teamState: Array<Team> = [];

const CreateGame = ({ startGame }: Props) => {
  const classes = useStyles();

  const [gameName, setGameName] = useState("");
  const [teams, setTeams] = useState(teamState);
  const [currentTeam, setCurrentTeam] = useState("");
  const [isErrorTeams, setIsErrorTeams] = useState(false)
  const [gameCode, setGameCode] = useState("")
  const [gameCodeError, setGameCodeError] = useState(false)

  const onGameCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameCode(event.target.value)
  }

  const onGameCodePlayClick = () => {
    firebase.database().ref("GameCodes/").orderByChild("code").equalTo(gameCode).once("child_added").then(snap => {
      if (snap.val()) {
        console.log("HERE")
        // We have valid input!
        console.log("HERE", snap.key)

        setGameCodeError(false)
        firebase.database().ref("games/" + snap.key).once("value").then(game => {
          const newGame = convertGame(game)
          startGame(newGame)
        })

        let update = new Map();
        update.set(snap.key, true);

        firebase
          .database()
          .ref("/Users/" + firebase.auth().currentUser?.uid + "/games")
          .update(Object.fromEntries(update));
      }
      else {
        setGameCodeError(true)
      }
    })
  }

  const onGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(event.target.value);
  };

  const onCurrentTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTeam(event.target.value);
  };

  const addTeam = () => {
    if (currentTeam === "") {
      return;
    }

    const newTeam = new Team(currentTeam);
    setTeams([...teams, newTeam]);
    setCurrentTeam("");
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (teams.length < 1) {
      console.log("Need at least one team to continue")

      // TODO add error handling/message to
      setIsErrorTeams(true)
      return
    }

    const userId = firebase.auth().currentUser?.uid
    const newGameRef = (await firebase.database().ref("/games").push())
    
    const newGame = new Game(newGameRef.key || String(Date.now()), Date.now(), gameName, teams)

    newGameRef.set(newGame)
    let update = new Map();
    update.set(newGameRef.key, true)

    firebase
      .database()
      .ref("/Users/" + userId + "/games")
      .update(Object.fromEntries(update), () => {
        startGame(newGame);
      });
  };

  const onDeleteTeam = (teamName: string) => {
    console.log("deleteingTeam");
    const newTeams = [...teams];
    const indexToRemove = newTeams.findIndex(team => team.name === teamName)
    newTeams.splice(indexToRemove, 1)
    setTeams(newTeams);
  };

  const keyPressed = (event:  React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      event.preventDefault()
      addTeam()
    }
  }

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            {gameName !== "" ? gameName : "New Game"}
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Game Name"
              name="gameName"
              value={gameName}
              onChange={onGameNameChange}
              autoFocus
            />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="p" variant="h6">
                  Teams/Players
                </Typography>
              </Grid>

              {teams.map((team, index) => (
                <Grid item xs={6} key={index + team.name}>
                  <CreateTeamDisplay team={team} onDelete={onDeleteTeam} />
                </Grid>
              ))}

              <Grid item xs={12}>
                {teams.length === 0 && (
                  <Typography
                    component="p"
                    variant="subtitle2"
                    color="textSecondary"
                  >
                    Teams will show up here once added
                  </Typography>
                )}
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    label="Team Name"
                    value={currentTeam}
                    onChange={onCurrentTeamChange}
                    autoComplete="current-password"
                    onKeyPress={keyPressed}
                    error={isErrorTeams}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="text"
                    color="secondary"
                    className={classes.submit}
                    onClick={addTeam}
                  >
                    Add Team
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create Game
            </Button>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              spacing={1}
              style={{ marginTop: "10px" }}
            >
              <Typography style={{ width: "100%", marginBottom: "10px" }}>
                or
              </Typography>
              <Typography>Enter GameCode</Typography>
              <TextField
                value={gameCode}
                onChange={onGameCodeChange}
                error={gameCodeError}
                style={{margin: "15px"}}
              />
              <Button
                onClick={onGameCodePlayClick}
                variant="outlined"
                color="primary"
                style={{marginTop: "10px"}}
              >
                Add By Code
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CreateGame;

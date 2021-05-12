import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

import { makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

import { firebase, auth } from "../features/Firebase/firebaseConnect";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  centerText: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: theme.typography.h3.fontSize,
    font: theme.typography.h3.font,
  },
  descriptionText: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    font: theme.typography.body1.font,
  }
}));

export default function Home() {
  const router = useRouter();
  const classes = useStyles();

  const onLoginClick = () => {
    router.push("account/login");
  };

  const onRegisterClick = () => {
    router.push("account/register");
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.centerText}>
          Score Games React
        </Grid>
        <Grid item xs={12} className={classes.descriptionText}>
            V2.0
        </Grid>
        <Grid item xs={12} className = {classes.descriptionText}>
          Firebase powered realtime card game tracker! :)  ... I know.. This page looks really ugly..
        </Grid>
        <Grid item xs={12} className = {classes.descriptionText}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Grid>
      </Grid>
    </div>
  );
}

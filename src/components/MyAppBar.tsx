import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import firebase from "../classes/firebase"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  title: string;
  showBackArrow: boolean;
  onBackArrowClick: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const MyAppBar = ({ title, showBackArrow, onBackArrowClick }: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const signOut = () => {
    firebase.auth().signOut()
  }

  const onMenuButtonClick = () => {

  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => (showBackArrow ? onBackArrowClick() : onMenuButtonClick())}
          >
            {showBackArrow ? <ArrowBackIosIcon /> : <MenuIcon />}
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>

          <IconButton color="inherit" edge="end" onClick={handleClick}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="accountMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={signOut}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      
      <Toolbar/>
    </div>
  );
};

export default MyAppBar;

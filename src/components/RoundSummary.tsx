import React from 'react'
import { Grid, Typography, Paper, Button } from '@material-ui/core'
import Game, { Round } from '../classes/Game'

interface Props {
    round: Round;
    game: Game;
    backToEdit: Function;
    confirmRound: Function;
}

const RoundSummary = ({ round, game, backToEdit, confirmRound }: Props) => {
    return (
        
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          spacing={2}
          style={{textAlign: "center", padding: "20px"}}
        >
          <Grid item xs={12}>
            <Typography variant="h5">Summary</Typography>
          </Grid>
          {game.teams.map((team, index) => (
            <Grid item xs={4} key={team.name + index}>
              <Paper variant="outlined">
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Typography variant="h6">{team.name}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      {round.teams[index]}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}

          <Grid container style={{paddingTop: "20px"}}>
          <Grid item xs={6} style={{textAlign: "left"}}>
            <Button variant="outlined" color="secondary" onClick={() => backToEdit()}>Edit</Button>
          </Grid>
          <Grid item xs={6} style={{textAlign: "right"}}>
            <Button variant="outlined" color="primary" onClick={() => confirmRound(round)}>Confirm</Button>
          </Grid>
          </Grid>
          
        </Grid>  
            )
}

export default RoundSummary

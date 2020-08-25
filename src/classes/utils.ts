import Game, { Team } from "./Game";
import * as firebase from 'firebase';

export function convertGameList(snapshot: firebase.database.DataSnapshot): Array<Game> {
  let games: Array<Game> = []

  snapshot.forEach(snapshot => {
    const game = convertGame(snapshot)
    games.push(game)
  });



  return games
}

export function convertGame(snapshot: firebase.database.DataSnapshot): Game {
  const game = snapshot.val()

  const id = game.id as number || 0;
  const date = game.date as number || 0;
  const name = game.name as string || "";
  const teams = game.teams as Array<Team> || null;
  const isFavorite = game.isFavorite as boolean || false;
  const history = game.history as Array<{teamName: Array<string>}> || null;

  return new Game(id, date, name, teams, history, isFavorite)
}



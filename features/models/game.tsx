import {
    auth,
    firebase,
    database,
  } from "../../features/Firebase/firebaseConnect";

export default class Game {
    constructor(public name: string = "", public teams: Array<Team>, public key: string = "", infoLink: string = "") {}


    // creates a list of team names and returns them
    getTeamNames() {
        const teamNames = [];
        for (let team of this.teams) {
            teamNames.push(team.name);
        }

        return teamNames;
    }
}

export class Player {
    constructor(public name: string, public id: string) {}
}

export class Team {
    constructor(public name = "team!:)", public score = 0, public history: Array<Number>) {}
}

// Takes json and creates the actual game object
export function transformGameFromFirebase(jsonGame: { name: string, teams: Array<Team>, key: string, infoLink: string }) {
    return new Game(jsonGame.name, jsonGame.teams, jsonGame.key, jsonGame.infoLink);
}

// receives a snapshot from firebase for all the games ---- Usefull if you want to display all the games on the database
export function transfromGamesFromFirebase(jsonGames: any) {
    const newGames: [Game] = [];

    jsonGames.forEach(game => {
        
        // construct the teams array
        const teams: Array<Team> = [];

        // if we have teams create team objects
        if (game.val()?.teams) {
          game.val()?.teams.forEach((team) => {
            teams.push(new Team(team.name, team.score, team.history));
          });
        }

        newGames.push(transformGameFromFirebase({name: game.val()?.name, teams: teams, key: game.key, infoLink: game.val()?.infoLink}))
    })


    return newGames;
}

// Receives a list of games that need to be transformed
export function getSingleGameFromFirebase(gameId: string) {
    database
        .ref("/games/" + gameId)
        .once("value")
        .then(snapshot => {
            console.log(snapshot.val());
            // construct the teams array
            const teams: Array<Team> = [];

            // if we have teams create team objects
            if (snapshot.val()?.teams) {
                snapshot.val()?.teams.forEach((team) => {
                teams.push(new Team(team.name, team.score, team.history));
                });
             }

            return transformGameFromFirebase({name: snapshot.val()?.name, teams: teams, key: snapshot.key, infoLink: snapshot.val()?.infoLink})
        })
}


/***********************
 * 
 * UP NEXT
 * You need to find a good solution to querying all of the games. Right now this does not work at all.... :) good luck future jordan.
 * 
 */

export async function getGameListForUser(id: string) {

    const games: Array<Game> = [];

    database
        .ref(`/users/${id}/games`)
        .once("value")
        .then(snapshot => {
            snapshot.forEach((childSnap) => {
                games.push(getSingleGameFromFirebase(childSnap.key))
            });
        })
    
    return games;
}

// Gets all the games from firebase
const getAllGameFromFirebase = async () => {
    database
      .ref("/games")
      .once("value")
      .then((snapshot) => transfromGamesFromFirebase(snapshot))
      .then((value: [Game]) => {
        if (!value.length) {
          console.log("You have no games.... :(");

          return null;
        }

        console.log(value);

        return value;
      });
  };
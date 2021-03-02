export default class Game {
    constructor(public name: string = "", public teams: Array<Team>) {}


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

export function transformFromFirebase(jsonGame: any) {
    return new Game(jsonGame.name, jsonGame.teams);
}
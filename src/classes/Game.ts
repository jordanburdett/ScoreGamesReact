

export default class Game {
  id: string
  date: number
  name: string
  teams: Array<Team>
  isFavorite: boolean

  constructor(id: string, date: number, name: string ,teams: Array<Team>, isFavorite: boolean = false) {
    this.id = id
    this.date = date
    this.name = name
    this.teams = teams
    this.isFavorite = isFavorite
  }

  tempGame(): Game {
    return new Game(this.id, this.date, this.name, this.teams, this.isFavorite)
  }
}

export class Team {
  name: string
  score: number
  history: TeamHistory

  constructor(name: string, score: number = 0, history: TeamHistory = new TeamHistory()) {
    this.name = name
    this.score = score
    this.history = history
  }


  addScore(score: number) {
    this.score += score

    //update history
    if (score > 0) {
      this.history.addScore("+" + String(score))
    } 
    else {
      this.history.addScore(String(score))
    }
  }

  createTeamForFirebase(): Team {
    return new Team(this.name,this.score,this.history)
  }
}

export class TeamHistory {
  pastScores: Array<string>

  constructor(pastScores: Array<string> = []) {
    
    this.pastScores = pastScores
  }

  addScore(score: string) {
    this.pastScores.push(score)
  }

  removeScore(indexOfScore: number) {
    this.pastScores.splice(indexOfScore, 1)
  }

  editScore(indexOfScore: number, updatedScore: string) {
    this.pastScores[indexOfScore] = updatedScore
  }

  calcTotalScore() : number {
    let totalScore = 0

    this.pastScores.forEach(score => {
      let convertedScore = Number(score)
      totalScore = totalScore + convertedScore
    })

    return totalScore
  }
}

export class Round {
  teams: Array<string>;

  constructor(teams: Array<string>) {
    this.teams = teams;
  }

  setValue(index: number, scoreString: string) {
    this.teams[index] = scoreString;
  }

  getValueAtIndex(index: number) : string {
    return this.teams[index]
  }
}
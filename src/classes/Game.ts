

export default class Game {
  id: string
  date: number
  name: string
  teams: Array<Team>
  isFavorite: boolean
  history: Array<{teamName: Array<string>}>

  constructor(id: string, date: number, name: string ,teams: Array<Team>, history: Array<{teamName: Array<string>}>, isFavorite: boolean = false) {
    this.id = id
    this.date = date
    this.name = name
    this.teams = teams
    this.isFavorite = isFavorite
    this.history = history
  }
}

export class Team {
  name: string
  score: number

  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }
}
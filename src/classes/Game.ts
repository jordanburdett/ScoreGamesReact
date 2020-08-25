

export default class Game {
  id: number
  date: number
  name: string
  teams: Array<Team>
  isFavorite: boolean

  constructor(id: number, date: number, name: string, isFavorite: boolean ,teams: Array<Team>) {
    this.id = id
    this.date = date
    this.name = name
    this.teams = teams
    this.isFavorite = isFavorite
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
class Game {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    category: string,
    system: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game

class Eatery {
  id: string
  title: string
  description: string
  image: string
  infos: string[]

  constructor(
    id: string,
    title: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Eatery

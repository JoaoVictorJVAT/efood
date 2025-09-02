import Store from '../Store'
import { Container, List } from './styles'
import Eatery from '../models/Eatery'

export type Props = {
  eateries: Eatery[]
}

const Storelist = ({ eateries }: Props) => (
  <Container>
    <div className="container">
      <List>
        {eateries.map((eateries) => (
          <Store
            key={eateries.id}
            title={eateries.title}
            description={eateries.description}
            image={eateries.image}
            infos={eateries.infos}
            id={eateries.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default Storelist

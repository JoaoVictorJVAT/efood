import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'
import { useGetRestaurantesQuery, Restaurante } from '../../services/api'

const Storelist = () => {
  const { data: restaurantes, isLoading, error } = useGetRestaurantesQuery()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar dados</p>

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes?.map((restaurante: Restaurante) => (
            <RestaurantCard
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              image={restaurante.capa}
              description={restaurante.descricao}
              infos={[restaurante.tipo]}
              avaliacao={restaurante.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default Storelist

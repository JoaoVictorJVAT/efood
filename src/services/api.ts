import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Restaurante = {
  avaliacao: number
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  destacado: boolean
  cardapio: {
    id: number
    nome: string
    foto: string
    preco: number
    descricao: string
    porcao: string
  }[]
}

export const efoodApi = createApi({
  reducerPath: 'efoodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    })
  })
})

export const { useGetRestaurantesQuery } = efoodApi

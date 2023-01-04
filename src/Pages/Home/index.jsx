import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Navbar from '../../Components/Navbar'
import { Pagination, Paper } from '@mui/material'
import PokemonCard from '../../Components/PokemonCard'
import { PokeballMini } from '../../Components/PokemonLoading'
import { PaginationContainer, PokemonsContainer } from './styles'

export const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalPokemon] = useState(807)
  const [pokemonPerPage] = useState(54)
  const [currentPage, setCurrentPage] = useState(0)
  const [query] = useState('')
  const totalPage = Math.ceil(totalPokemon / pokemonPerPage)

  // Renderiza um card para pokemon da lista
  const renderPokemonsList = () => {
    const pokemonsList = []

    pokemons.forEach((pokemon) => {
      if (!pokemon.name.includes(query)) {
        return
      }

      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />)
    })

    return pokemonsList
  }
  
  
  // Controla a paginação e busca dos Pokemons na API
  const onPagination = (e, value) => {
    setCurrentPage(value * pokemonPerPage - pokemonPerPage)
  }

  // Pega os Pokemons na API de acordo com a paginação
  const getPokemons = async () => {
    await api
      .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
      .then((response) => {
        setPokemons(response.data.results)
      })

    setIsLoading(false)
  }

  // Filtra os Pokemons de acordo com a escrita na busca
  const pokemonFilter = (name) => {
    var filteredPokemons = []
    if (name === '') {
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [currentPage, pokemonPerPage])
  
  return isLoading ? (
    <PokeballMini />
  ) : (
    <Paper>
      <Navbar pokemonFilter={pokemonFilter} homeScreen={true} />
      <PaginationContainer>
        <Pagination onChange={onPagination} count={totalPage} color="primary" />
      </PaginationContainer>

      <PokemonsContainer>{renderPokemonsList()}</PokemonsContainer>
    </Paper>
  )
}

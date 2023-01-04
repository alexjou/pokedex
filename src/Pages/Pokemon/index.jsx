import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokeballMini } from '../../Components/PokemonLoading'
import api, { getPokemonImageUrl2 } from '../../services/api'
import { Grid, Paper, Typography } from '@mui/material'
import {
  Badge,
  ContainerAbility,
  Container,
  ContainerAbilities,
  GridAbilities,
  Content,
  LinearProgressStyled,
  ContainerCell,
} from './styles'
import Navbar from '../../Components/Navbar'

export const Pokemon = () => {
  const [pokemon, setPokemom] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [imagePokemon, setImagePokemon] = useState('')

  const { pokemonIndex } = useParams()

  const loadPokemonData = async () => {
    await api.get(`pokemon/${pokemonIndex}`).then((response) => {
      const {
        name,
        types,
        id,
        weight,
        height,
        stats,
        abilities,
      } = response.data
      setPokemom({
        name: name.replace(/-/g, ' '),
        types: types.map(
          (typeInfo) =>
            typeInfo.type.name[0].toUpperCase() + typeInfo.type.name.slice(1),
        ),
        abilities: abilities,
        id: id,
        weight: weight / 10,
        height: height / 10,
        baseStats: [
          stats[0].base_stat,
          stats[1].base_stat,
          stats[2].base_stat,
          stats[3].base_stat,
          stats[4].base_stat,
          stats[5].base_stat,
        ],
      })
    })
    await setImagePokemon(getPokemonImageUrl2(pokemon.id))

    setIsLoading(false)
  }

  useEffect(() => {
    loadPokemonData()
  }, [pokemonIndex, pokemon.id])

  const baseStatsName = [
    'HP',
    'Attack',
    'Defense',
    'Sp. Attack',
    'Sp. Defense',
    'Speed',
  ]

  return isLoading ? (
    <PokeballMini />
  ) : (
    <Paper>
      <Navbar />

      <Container container>
        <ContainerCell container>
          <ContainerAbility item xs={4}>
            <Grid container>
              <GridAbilities item xs={2}>
                <Typography>ID</Typography>
                <Typography>Height</Typography>
                <Typography>Weight</Typography>
                <Typography>Abilities</Typography>
                <Typography sx={{ m: 2, mr: 0 }}>Type</Typography>
              </GridAbilities>

              <Content item xs={10}>
                <Typography># {pokemon.id}</Typography>
                <Typography># {pokemon.height}</Typography>
                <Typography># {pokemon.weight}</Typography>
                <ContainerAbilities>
                  {pokemon.abilities.map((ability, index) => (
                    <Badge
                      sx={{ m: 0.5, p: 0.5 }}
                      key={index}
                      className={`${pokemon.types[0]}`}
                    >
                      <Typography fontSize={12} textTransform="uppercase">
                        {ability.ability.name}
                      </Typography>
                    </Badge>
                  ))}
                </ContainerAbilities>

                <ContainerAbilities>
                  {pokemon.types.map((type, index) => (
                    <Badge
                      sx={{ m: 0.5, p: 0.5 }}
                      key={index}
                      className={`icon ${type}`}
                    >
                      <Typography>{type}</Typography>
                    </Badge>
                  ))}
                </ContainerAbilities>
              </Content>
            </Grid>
          </ContainerAbility>

          <Grid item xs={4} sx={{maxWidth: '80%'}}>
            <Typography variant="h3" textTransform="uppercase">
              {pokemon.name}
            </Typography>
            <img
              alt="pokemon"
              src={imagePokemon}
              style={{
                maxWidth: '70%',
                height: 'auto',
              }}
            />
          </Grid>

          <ContainerAbility item xs={4}>
            {pokemon.baseStats.map((stat, index) => (
              <Grid container key={index}>
                <Grid item xs={4}>
                  <Typography>{`${baseStatsName[index]}: ${stat}`}</Typography>
                </Grid>

                <Grid item xs={8}>
                  <LinearProgressStyled
                    variant="determinate"
                    value={stat > 100 ? 100 : stat}
                  />
                </Grid>
              </Grid>
            ))}
          </ContainerAbility>
        </ContainerCell>
      </Container>
    </Paper>
  )
}

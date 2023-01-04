import styled from '@emotion/styled'
import { Box, Grid, LinearProgress } from '@mui/material'

export const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`

export const ContainerCell = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    display: 'grid',
    justifyItems: 'center',
  },
}))

export const ContainerAbilities = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const GridAbilities = styled(Grid)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`
export const Content = styled(Grid)`
  display: flex;
  flex-direction: column;
`
export const LinearProgressStyled = styled(LinearProgress)`
  width: 80%;
  height: 20px;
  background: #eeeeee;
`
export const ContainerAbility = styled(Grid)`
  width: inherit;
  font-size: large;
  max-width: 100%;
  opacity: 1;
  transition: 0.3s;
  transform: rotateY(0deg);
  padding-left: 10px;

  &:hover {
    transform: rotateY(40deg);
  }
`

export const Badge = styled(Box)`
  &.Normal {
    background-color: #a8a878;
    box-shadow: 0 0 20px #a8a878;
    color: #fff;
  }

  &.Fire {
    background-color: #f08030;
    box-shadow: 0 0 20px #f08030;
    color: #fff;
  }

  &.Water {
    background-color: #6890f0;
    box-shadow: 0 0 20px #6890f0;
    color: #fff;
  }

  &.Electric {
    background-color: #f8d030;
    box-shadow: 0 0 20px #f8d030;
    color: #fff;
  }

  &.Grass {
    background-color: #78c850;
    box-shadow: 0 0 20px #78c850;
    color: #fff;
  }

  &.Ice {
    background-color: #98d8d8;
    box-shadow: 0 0 20px #98d8d8;

    color: #fff;
  }

  &.Ground {
    background-color: #e0c068;
    box-shadow: 0 0 20px #e0c068;

    color: #fff;
  }

  &.Flying {
    background-color: #a890f0;
    box-shadow: 0 0 20px #a890f0;

    color: #fff;
  }

  &.Ghost {
    background-color: #705898;
    box-shadow: 0 0 20px #705898;

    color: #fff;
  }

  &.Rock {
    background-color: #b8a038;
    box-shadow: 0 0 20px #b8a038;

    color: #fff;
  }

  &.Fighting {
    background-color: #c03028;
    box-shadow: 0 0 20px #c03028;

    color: #fff;
  }

  &.Poison {
    background-color: #a040a0;
    box-shadow: 0 0 20px #a040a0;

    color: #fff;
  }

  &.Psychic {
    background-color: #f85888;
    box-shadow: 0 0 20px #f85888;

    color: #fff;
  }

  &.Bug {
    background-color: #a8b820;
    box-shadow: 0 0 20px #a8b820;

    color: #fff;
  }

  &.Dark {
    background-color: #705848;
    box-shadow: 0 0 20px #705848;

    color: #fff;
  }

  &.Steel {
    background-color: #b8b8d0;
    box-shadow: 0 0 20px #b8b8d0;

    color: #fff;
  }

  &.Dragon {
    background-color: #7038f8;
    box-shadow: 0 0 20px #7038f8;

    color: #fff;
  }
`

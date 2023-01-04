import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const PokemonsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px;
`

export const PaginationContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
export const SearchText = styled(Typography)`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  background-color: #f1f1f1;
`

import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export const Home = () => {
  return (
    <Box>
      <Typography variant='h1'>Tela Home</Typography>
      <Button variant="contained" href="/pokemon">
        Pokemon
      </Button>
    </Box>
  )
}

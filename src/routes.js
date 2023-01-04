import React, { useContext } from 'react'
import { ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import AuthContext from './Components/Context/AuthContext'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Pokemon } from './Pages/Pokemon'

export default function MainRoutes() {
  const { theme } = useContext(AuthContext)
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Pokemon />} path="/pokemon/:pokemonIndex" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </ThemeProvider>
  )
}

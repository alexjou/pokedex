import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Pokemon } from './Pages/Pokemon'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Pokemon />} path="/pokemon" />
      </Routes>
    </BrowserRouter>
  )
}

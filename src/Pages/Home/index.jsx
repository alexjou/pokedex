import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Tela Home</h1>
      <Link to="/pokemon">Pokemon</Link>
    </div>
  )
}

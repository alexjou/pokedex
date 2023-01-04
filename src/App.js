import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Components/Context/AuthContext'
import MainRoutes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

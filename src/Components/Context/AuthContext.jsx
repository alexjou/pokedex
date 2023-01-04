import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  deletePersistAuth,
  getPersistAuth,
  setPersistAuth,
} from '../Utils/localStorage'
import { useNavigate } from 'react-router-dom'
import { createTheme } from '@mui/material'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(undefined)
  const [themeUpdate, setThemeUpdate] = useState('light')

  const theme = createTheme({
    palette: {
      mode: themeUpdate,
    },
  })

  async function loadStorage() {
    const storageUsers = getPersistAuth()
    if (storageUsers) {
      setUser(storageUsers)
      if (storageUsers?.theme) {
        setThemeUpdate(storageUsers.theme)
      }
    }
  }

  useEffect(() => {
    loadStorage()
  }, [])

  const changeTheme = async () => {
    if (themeUpdate === 'light') {
      setThemeUpdate('dark')
      setPersistAuth({ ...user, theme: 'dark' })
    } else {
      setThemeUpdate('light')
      setPersistAuth({ ...user, theme: 'light' })
    }
  }

  const signIn = async (data) => {
    setUser(data)
    setPersistAuth(data)
    navigate('/pokedex')
  }

  const signOut = async () => {
    await deletePersistAuth()
    setUser('')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        theme,
        themeUpdate,
        changeTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any,
}

export default AuthContext

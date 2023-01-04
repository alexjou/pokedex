import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import SearchIcon from '@mui/icons-material/Search'
import { BoxCenter, Container, ContainerRight, Content, Search, SearchIconWrapper, StyledInputBase } from './styles'
import { Link } from 'react-router-dom'
import { IconButton, Typography } from '@mui/material'
import AuthContext from '../Context/AuthContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Navbar({ pokemonFilter, homeScreen }) {
  const { user, signOut, themeUpdate, changeTheme } = useContext(AuthContext)
  return (
    <Container>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Content>
            <Link to={'/'}>
              <Box
                component="img"
                src="/images/pokemon-logo.png"
                height="3em"
              />
            </Link>
            {user?.name && <Typography>Olá {user.name}!</Typography>}
            <ContainerRight>
              <IconButton onClick={changeTheme} color="inherit">
                {themeUpdate === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              {homeScreen && (
                <BoxCenter>
                  <Search onChange={(e) => pokemonFilter(e.target.value)}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Pesquisando..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  {user?.name ? (
                    <IconButton
                      onClick={signOut}
                      color="inherit"
                      sx={{ ml: 2 }}
                    >
                      <LogoutIcon color="inherit" />
                    </IconButton>
                  ) : (
                    <Link to={'/login'} style={{ marginLeft: 20 }}>
                      <PersonIcon color="primary" />
                    </Link>
                  )}
                </BoxCenter>
              )}
            </ContainerRight>
          </Content>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

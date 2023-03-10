import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { Box } from '@mui/material'

export const Container = styled(Box)`
  flex-grow: 1;
  margin-bottom: 2em;
`
export const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const ContainerRight = styled(Box)`
  display: flex;
  flex-direction: row;
`
export const BoxCenter = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export const Search = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

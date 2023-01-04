import React, { useContext } from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Container, ViewSubmit } from './styles'

import { useFormik } from 'formik'
import { PokeballMini } from '../../Components/PokemonLoading'
import Navbar from '../../Components/Navbar'
import AuthContext from '../../Components/Context/AuthContext'
import * as Yup from 'yup'

export const Login = () => {
  const { signIn } = useContext(AuthContext)

  const initialValues = {
    name: '',
    email: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string('Preencha com seu email')
      .email('Preencha com um e-mail válido')
      .required('E-mail é obrigatório'),
    name: Yup.string('Preencha com seu nome')
      .min(4, 'Nome precisa ter no mínimo 4 caracteres')
      .required('Nome é obrigatório'),
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        signIn(values)
        formik.setSubmitting(false)
      }, 1000)
    },
  })
  return (
    <Paper sx={{ height: '97vh' }}>
      <Navbar />
      <Container>
        <Typography sx={{ fontSize: '21px' }}>
          Salve seus dados localmente
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nome"
                autoComplete="name"
                variant="outlined"
                placeholder="Preencha com o nome"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                label="E-mail"
                autoComplete="email"
                placeholder="Preencha com o e-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <ViewSubmit>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={formik.isSubmitting}
                sx={{ textTransform: 'none' }}
              >
                Salvar
              </Button>
            </ViewSubmit>
            {formik.isSubmitting && <PokeballMini />}
          </Grid>
        </form>
      </Container>
    </Paper>
  )
}

import React from 'react'
import { Button, Container, Grid } from '@mui/material'
import Layout from '../../components/layout/layout'
import './ShowAllProject.scss'

const ShowAllProject = () => {
  return (
    <>
      <Layout>
        <div className="container-all-project">
          <Container>
            <Grid container>
              <Grid item>
                <h1>Pilih Proyek Favoritmu</h1>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={6}>
                    Minimum Price
                  </Grid>
                  <Grid item xs={6}>
                    Maximum Price
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    Slider
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={4}>
                    Kategori
                  </Grid>
                  <Grid item xs={4}>
                    Urutkan
                  </Grid>
                  <Grid item xs={4}>
                    <Button>TERAPKAN FILTER</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default ShowAllProject

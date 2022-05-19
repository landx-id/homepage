import React from 'react'
import { Container, Grid, Button } from '@mui/material'

// components
import CardTitleSection from '../../Card/CardTitleSection/CardTitleSection'
import CardKinerjaAssets from '../../Card/CardKinerjaAssets/CardKinerjaAssets'

// style
import "./KinerjaAssets.scss"

const KinerjaAssets = ({ desc }) => {
  return (
    <Container className="section-kinerja-asset utils flex center-center">
      <div>
        <CardTitleSection title="Pantau Perkembangan Project Bisnis Kamu Secara Real Time" />
        {desc ? <p className="utils font-20 line-height-32 color-black-700 text-center mb-40">{desc}</p> : ""}

        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CardKinerjaAssets cardDesc="Pantau perkembangan project bisnis yang kamu miliki"></CardKinerjaAssets>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardKinerjaAssets cardDesc="Pantau kinerja bisnis dan laporan keuangan"></CardKinerjaAssets>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardKinerjaAssets cardDesc="Dapatkan informasi jadwal pembagian dividen project bisnismu"></CardKinerjaAssets>
            </Grid>
          </Grid>

          <div className="utils flex center-center mt-48 flex-sm-direction-column">
            <Button variant="contained" color="success" href="https://kinerja.landx.id/" className="utils mr-24 m-sm-0 mb-sm-16 w-sm-100 font-w-bold">
              Buka Kinerja Aset
            </Button>

            <Button variant="outlined" color="success" href="https://kinerja.landx.id/" className="utils w-sm-100">
              Pelajari Selengkapnya
            </Button>
          </div>

        </Container>
      </div>
    </Container>
  )
}

export default KinerjaAssets 
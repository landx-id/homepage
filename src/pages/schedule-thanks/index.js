import * as React from "react"
import { Container, Grid, Typography, Button } from '@mui/material'
import { navigate } from 'gatsby'

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const ScheduleThanks = () => (
  <Layout>
    	<Seo title="Tentang LandX" />

    <Container className="menu-mt">
      <Grid item xs={12} md={12} className="menu-description" style={{ marginTop: `3rem`, textAlign:`center` }}>
        <img src="/images/schedule_thank_you.webp" />
        <Typography variant="h5" color="secondary" paragraph={true} style={{ fontWeight:`600` }}>
          Terima kasih telah menjadwalkan panggilan
        </Typography>
        <Typography color="secondary">
          Yuk cari tahu project yang tersedia saat ini dengan
        </Typography>
        <Typography color="secondary" style={{ fontWeight:`600` }}>
          klik tombol dibawah
        </Typography>
        <Button onClick={() => { navigate("/project") }} style={{ marginTop: `3rem` }}>lihat project</Button>
      </Grid>
    </Container>
  </Layout>
)

export default ScheduleThanks

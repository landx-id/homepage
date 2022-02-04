import * as React from "react"
import { Container, Grid, Typography } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const AboutLandX = () => (
  <Layout>
    	<Seo title="Tentang LandX" />

    <Container className="menu-mt">
      <Grid item xs={12} md={12}>
        <Typography color="primary" className="menu-title">
          Tentang LandX
        </Typography>
      </Grid>

      <Grid item xs={12} md={12} align="center" style={{ marginTop: `3rem` }}>
        <img
          src="/images/landx_flow_02.webp" 
          height="400px"
          width="520px"
        />
      </Grid>
      <Grid item xs={12} md={8} className="menu-description" style={{ marginTop: `3rem` }}>
        
        <Typography color="secondary" paragraph={true}>
          LandX adalah platform equity crowdfunding, di mana sejumlah besar orang bisa berpartisipasi dalam penggalangan dana untuk pengembangan usaha yang dilakukan oleh bisnis, Usaha Mikro Kecil dan Menengah (UMKM), dan usaha rintisan (startup) secara online, dan mendapatkan saham sebagai imbalannya.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dengan menawarkan equity crowdfunding, pelaku usaha seperti UMKM dan startup bisa mendapatkan dana segar untuk melakukan pengembangan usaha dan membiayai operasional, serta meningkatkan awareness akan usaha tersebut.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Proses penggalangan dana dapat dilakukan tanpa membebani arus kas perusahaan karena tidak melalui pinjaman (debt-based) melainkan melalui penawaran saham (equity-based), sehingga perusahaan tidak perlu membayar bunga dan pokok pinjaman.
        </Typography>
      </Grid>
    </Container>
  </Layout>
)

export default AboutLandX

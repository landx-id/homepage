import * as React from "react"
import { Button, Container, Grid, Typography } from "@mui/material"

import CTAWhatsapp from "../../components/CTAWhatsapp/CTAWhatsapp"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import CardTitleSection from "../../components/Card/CardTitleSection/CardTitleSection"
import CardKinerjaAssets from "../../components/Card/CardKinerjaAssets/CardKinerjaAssets"

import "./kinerjaPenerbit.scss"

const kinerjaPenerbit = () => {
  return (
    <>
      <CTAWhatsapp />
      <Layout>
        <Seo
          title="Kinerja Penerbit | Investasi Online Aman Berizin OJK Lewat Equity Crowdfunding di LandX"
          description="LandX merupakan platform equity crowdfunding yang telah berizin dan diawasi OJK yang aman untuk investasi online jangka panjang kamu|Investasi online OJK"
        />

        <div className="page-kinerja-penerbit">
          <div className="header-kinerja-penerbit utils flex center-center position-relative">
            <div className="utils position-asolute bg-kinerja-penerbit position-absolute" />
            <Container className="utils flex center-center flex-direction-column text-center">
              <Typography variant="h1" className="utils font-sm-32 line-height-sm-48 font-48 line-height-56 color-green-600 font-w-bold mb-32 max-width-815">
                Pantau Perkembangan Project Bisnis Kamu Secara Real Time
              </Typography>
              <Typography className="utils font-sm-17 line-height-sm-24 font-20 line-height-32 color-gray-700 mb-32 max-width-815">
                BARU! Sekarang kamu bisa melihat perkembangan dan kinerja bisnis yang kamu danai di LandX
              </Typography>
              <Button variant="contained" color="success" href="https://kinerja.landx.id/" className="utils mr-24 m-sm-0 mb-sm-16 min-width-sm-245 font-w-bold">
                Buka Kinerja Aset
              </Button>
            </Container>
          </div>

          {/* section kinerja assets */}
          <section>
            <Container className="section-kinerja-asset utils flex center-center">
              <div>
                <CardTitleSection title="Ada Apa Aja di Fitur Kinerja Aset?" />

                <Container>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Pantau perkembangan project bisnis yang kamu miliki"></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Dapatkan informasi pembagian dividen project bisnismu "></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Pantau kinerja bisnis melalui laporan keuangan "></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Sampaikan masukan langsung pada manajemen bisnis"></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Pantau perkembangan setiap outlet bisnis"></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Lihat histori distribusi pembagian dividen"></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Lihat business scorecard setiap bisnis"></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Lihat informasi jadwal pasar sekunder"></CardKinerjaAssets>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <CardKinerjaAssets cardDesc="Lihat liputan bisnis kamu dari media"></CardKinerjaAssets>
                    </Grid>
                  </Grid>

                  <div className="utils flex center-center mt-48 flex-sm-direction-column">
                    <Button variant="contained" color="success" href="https://kinerja.landx.id/" className="utils mr-24 m-sm-0 mb-sm-16 min-width-sm-245 font-w-bold">
                      Buka Kinerja Aset
                    </Button>
                  </div>

                </Container>
              </div>
            </Container>
          </section>
        </div>

      </Layout>
    </>
  )
}

export default kinerjaPenerbit

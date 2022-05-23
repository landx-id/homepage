import React, { useState } from "react"
import { Button, Container, Grid, Typography } from "@mui/material"
import { StaticImage } from 'gatsby-plugin-image';

import CTAWhatsapp from "../../components/CTAWhatsapp/CTAWhatsapp"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import CardTitleSection from "../../components/Card/CardTitleSection/CardTitleSection"
import CardKinerjaAssets from "../../components/Card/CardKinerjaAssets/CardKinerjaAssets"

import "./kinerjaPenerbit.scss"

const KinerjaPenerbit = () => {
  const [cardActive, setCardActive] = useState({
    "tutor1": true,
    "tutor2": false,
    "tutor3": false,
    "tutor4": false,
    "tutor5": false,
    "tutor6": false,
    "tutor7": false,
    "tutor8": false
  })

  const changePreviewImgs = (tutorCard) => {
    setCardActive(
      {
        ...cardActive,
        "tutor1": tutorCard === "tutor-1" ? true : false,
        "tutor2": tutorCard === "tutor-2" ? true : false,
        "tutor3": tutorCard === "tutor-3" ? true : false,
        "tutor4": tutorCard === "tutor-4" ? true : false,
        "tutor5": tutorCard === "tutor-5" ? true : false,
        "tutor6": tutorCard === "tutor-6" ? true : false,
        "tutor7": tutorCard === "tutor-7" ? true : false,
        "tutor8": tutorCard === "tutor-8" ? true : false
      }
    )
  }

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
                    <Grid item xs={12} md={4} className="utils flex center-center">
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-1")}>
                            <CardKinerjaAssets cardDesc="Pantau perkembangan project bisnis yang kamu miliki" cardActive={cardActive.tutor1} />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-2")}>
                            <CardKinerjaAssets cardDesc="Dapatkan informasi pembagian dividen project bisnismu" cardActive={cardActive.tutor2} />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-3")}>
                            <CardKinerjaAssets cardDesc="Pantau kinerja bisnis melalui laporan keuangan" cardActive={cardActive.tutor3} />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-4")}>
                            <CardKinerjaAssets cardDesc="Sampaikan masukan langsung pada manajemen bisnis" cardActive={cardActive.tutor4} />
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <StaticImage src="../../assets/imgs/tutor-penerbit-1.webp" alt="Tutor Kinerja Penerbit" />
                    </Grid>

                    <Grid item xs={12} md={4} className="utils flex center-center">
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-5")}>
                            <CardKinerjaAssets cardDesc="Pantau perkembangan setiap outlet bisnis" cardActive={cardActive.tutor5} />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-6")}>
                            <CardKinerjaAssets cardDesc="Lihat business scorecard setiap bisnis" cardActive={cardActive.tutor6} />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-7")}>
                            <CardKinerjaAssets cardDesc="Lihat informasi jadwal pasar sekunder" cardActive={cardActive.tutor7} />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div onClick={() => changePreviewImgs("tutor-8")}>
                            <CardKinerjaAssets cardDesc="Lihat liputan bisnis kamu dari media" cardActive={cardActive.tutor8} />
                          </div>
                        </Grid>
                      </Grid>
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

export default KinerjaPenerbit

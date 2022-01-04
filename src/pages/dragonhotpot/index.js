import React, { useEffect, useState } from "react"
import { ThemeProvider } from '@mui/material/styles';
import { themeconfig } from '../../assets/styling/themeConfig';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import CardTitleSection from "../../components/Card/CardTitleSection/CardTitleSection";
import CardLandxWork from "../../components/Card/CardLandxWork/CardLandxWork";

import Seo from "../../components/seo/seo"
import Footer from "../../components/footer/footer";

import "../../assets/styling/style.scss"
import "./index.scss"


const theme = themeconfig

const DragonHotPot = () => {
  
  // Client-side Runtime Data Fetching
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    fetch("https://api.landx.id/", {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({query: `{
      currencies {
        landXProperty {
          address
          annualRentYield
          annualRentYieldUpper
          category
          dividendSchedule
          id
          initialTokenPrice
          launchProgress
          mapImageUrl
          name
          previewImages
          propertyPrice
          settlementDate
          tokenSupply
          totalPurchasePrice
          token {
            symbol
            name
          }
        }
      }
    }`})
  })
  .then(r => r.json())
  .then(data => console.log(data)
  )
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
    <Seo title="LandX" />
    <body style={{ backgroundColor:`#f8f8f8` }}>

    <section style={{ padding: '30px', alignItems: 'center' }} className="dragon-hot-header">
      <Box className="dragon-hot-bowl">
          <img 
            src="./images/dhp_header_image_02.png" 
            id="bowl" 
            alt=""
          />
      </Box>
      <Box className="dragon-hot-title dragon-hot-mt">
        <Typography variant="h3" align="center">
          Hot Pot #1 di Melbourne {starsCount}
        </Typography>
        <Typography variant="h3" align="center">
          hadir di Indonesia!
        </Typography>
      </Box>
      <Box style={{ justifyContent:`center`, display:`flex` }}>
        <img 
          src="./images/dhp_icon.png" 
          alt="DHP Icon" 
          class="dragon-hot-icon" 
        />
      </Box>
      <Box style={{ marginLeft:`5rem`, marginTop:`3rem` }}>
        <Grid container spacing={2} className="dragon-hot-title">
          <Grid item xs={12} md={5}>
            <Typography paragraph={true}>
              Dikelola Oleh
            </Typography>
            <Typography paragraph={true} style={{ fontSize:`34px`, fontWeight:`bold` }}>
              Yamatoten Abura Soba Group
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography paragraph={true} style={{ marginBottom:`2rem`}}>
                Outlet Saat Ini
              </Typography>
              <ul className="dragon-hot-text-content dragon-hot-outlet">
                  <li> Jakarta</li>
                  <li> Grand Indonesia</li>
                  <li> Lippo Mall Puri</li>
                  <li> Lippo Mall Kemang</li>
                  <li> Kelapa Gading</li>
                  <li> Bandung</li>
              </ul>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ marginLeft:`5rem`, marginTop:`3rem` }}>
        <Grid container className="dragon-hot-title">
          <Grid item xs={12} md={3}>
            &nbsp;
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className="dragon-hot-capital-average">
              <Typography paragraph={true}>
                Rata-rata Balik Modal
              </Typography>
              <Typography paragraph={true} style={{ marginBottom:`2rem`, fontSize:`34px`, fontWeight:`600` }}>
                15-18 Bulan per Cabang
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="dragon-hot-bowl2">
          <img 
            src="./images/dhp_header_image_03.png" 
            id="bowl" 
            alt=""
          />
      </Box>
    </section>  
    
    <section style={{ padding: '30px', display: 'flex', alignItems: 'center', backgroundColor:`#fff` }}>
      <Container style={{ marginTop:`19rem`, marginBottom:`1rem` }}>
        <Grid item xs={12} md={12} className="dragon-hot-font">
          <Typography color="secondary" variant="h3" align="center">
            Sekarang Kamu Bisa Patungan untuk
          </Typography>
          <Typography color="secondary" variant="h3" align="center" paragraph={true}>
            Punya Bisnis Dragon Hot Pot!
          </Typography>
          <Typography color="secondary" variant="h5" align="center" style={{ marginTop:`2rem` }}>
            Ingin buka bisnis restoran, carwash, kos-kosan, atau bisnis-bisnis lainnya
          </Typography>
          <Typography color="secondary" variant="h5" align="center" paragraph={true}>
            tapi modal masih belum cukup? Jangan khawatir karena sekarang ada LandX!
          </Typography>
          <Typography color="secondary" variant="h5" align="center" paragraph={true}>
            Kamu bisa punya bisnis yang dikelola secara profesional mulai dari <b>Rp. 1.000.000</b> aja!
          </Typography>
      </Grid>
      </Container>
    </section>

    <section style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={12}>
          <CardTitleSection title='Bagaimana Cara Kerja LandX?' />
          <Grid container spacing={4} style={{ justifyContent:`center` }}>
              <CardLandxWork img='../images/dhp_icon_pilih_bisnis.png' title="Pilih Bisnis" content="Pilih bisnis favoritmu yang sedang melakukan penggalangan dana" height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_ikut_patungan.png' title='Ikut Patungan' content='Dengan ikut patungan, kamu turut memiliki saham di bisnis tersebut' height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_terima_bagi_hasil.png' title="Terima Bagi Hasil" content='Pembagian keuntungan sesuai dengan kinerja bisnis yang kamu miliki' height="100" width="100" />
          </Grid>
        </Grid>
    </section>

      <section style={{ padding: '30px', display: 'flex', alignItems: 'center', backgroundColor:`#fff` }}>
        <Grid item xs={12} md={12}>
          <CardTitleSection title='Mengapa LandX?' />
            <Grid container spacing={4}>
              <CardLandxWork img='../images/dhp_icon_perjanjian.png' title="Perjanjian kerjasama yang jelas" content="Patungan bisnis di LandX berdasarkan perjanjian yang sah secara hukum" height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_bagi_hasil.png' title='Pembagian hasil bisnis sesuai kepemilikan saham' content='Hasil bisnis yang kamu terima sesuai dengan porsi saham yang kamu miliki' height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_komunikasi.png' title="Komunikasi" content='Pengelola bisnis akan memberikan laporan berkala terkait pengembangan bisnis yang kamu miliki' height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_profesional.png' title="Dikelola oleh profesional di bidangnya" content='Pembagian keuntungan sesuai dengan kinerja bisnis yang kamu miliki' height="100" width="100" />
            </Grid>
        </Grid>
      </section>

      <section style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={12}>
          <CardTitleSection title='Proyek yang Sedang Listing' />

          {/* TODO: dynamic card listing */}
        </Grid>
      </section>

        <section style={{ padding: '30px', minHeight: '500px', display: 'flex', alignItems: 'center', backgroundColor:`#fff` }}>
          <Container className="menu-mt">
            <Grid item xs={12} md={12}>
              <Typography color="primary" align="center" style={{ fontSize:`64px` }}>
                &#128532;
              </Typography>
              <Typography color="secondary" variant="h4" align="center" paragraph={true}>
                Brand favoritmu sudah terdanai? Tenang, kamu bisa booking dulu agar tidak ketinggalan pendanaan cabang selanjutnya!
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} align="center" style={{ marginBottom:`3rem` }}>
              <Button>Booking Disini</Button>
            </Grid>
          </Container>
        </section>

        <section style={{ paddingTop: '100px', display: 'flex', alignItems: 'center' }}>
          <Grid item xs={12} md={12}>
            <Typography color="primary" align="center" style={{ fontSize:`64px` }}>
              &#129300;
            </Typography>
            <Typography color="secondary" variant="h4" align="center">
              Punya pertanyaan? Hubungi kami di
            </Typography>
            <Grid container style={{ marginTop:`3rem`}}>
              <Grid item sx={5} md={5} align="right">
                <Button variant="outlined">
                  <Typography>
                    <WhatsAppIcon />
                    WHATSAPP
                  </Typography>
                </Button>
              </Grid>
              <Grid item sx={1} md={1}>
                  <Typography color="secondary" align="center">
                    atau
                  </Typography>
              </Grid>
              <Grid item sx={6} md={6}>
                  <Typography variant="h4" color="secondary" style={{ fontWeight:`600` }}>
                    +62 813 8186 2878
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </section>
      <Footer />
    </body>
    </ThemeProvider>
  )
}

export default DragonHotPot
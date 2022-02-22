import React, { useEffect, useState } from "react"
import { ThemeProvider } from '@mui/material/styles';
import { themeconfig } from '../../assets/styling/themeConfig';
import { Container, Grid, Typography, Button, Box, AppBar, Toolbar, Collapse, MenuList, MenuItem } from '@mui/material';
import { navigate, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import CardTitleSection from "../../components/Card/CardTitleSection/CardTitleSection";
import CardLandxWork from "../../components/Card/CardLandxWork/CardLandxWork";
import CardListing from "../../components/Card/CardListing/CardListing";
import CardProject from "../../components/Card/CardProject/CardProject";

import { FetchLimitData } from "../../utils/common";

import Seo from "../../components/seo/seo"
import Footer from "../../components/footer/footer";
import Slider from 'react-slick'

import "../../assets/styling/style.scss"
import "./index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = themeconfig
const DragonHotPot = () => {

  const [widthWindows, setWidthWindows] = useState('')
  const [dataProject, setDataProject] = useState(null)
  const [dataListing, setDataListing] = useState('')

  useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  useEffect(() => {
    getLimitCardProject()
    handleListing()
  }, [])

  const cardProject = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const getLimitCardProject = () => {
    FetchLimitData('https://api.landx.id/', 4, 1).then(data => {
      setDataProject(data.data.currencies)
    })
  }

  const handleListing = () => {
    fetch('https://content.landx.id/api/upcomings')
      .then(r => r.json())
      .then(data => {
        setDataListing((prevData) => [...prevData, data.data])
      })
  }

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Seo title="LandX" />

      <Box style={{ backgroundColor: `#f8f8f8` }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="dragon-hot-navbar">
            <Toolbar>
              <Box>
                <img
                  src="/images/hamburger_menu.svg"
                  onClick={() => handleChange()}
                  style={{ cursor: `pointer` }}
                />
              </Box>
              <Box className="dragon-hot-navbar-logo">
                <Link to="/">
                  <img
                    src="/images/landx_logo.png"
                    className="dragon-hot-logo-landx"
                  />
                </Link>
              </Box>
              {widthWindows >= 1200 ?
                <Button variant="outlined" onClick={() => { navigate("/pendaftaran-perusahaan") }} style={{ fontWeight: `600` }}>PENDAFTARAN PERUSAHAAN</Button>
                :
                ''
              }
            </Toolbar>
          </AppBar>
        </Box>

        <Collapse in={checked}>
          {widthWindows < 600 ?
            <Grid container spacing={2} className="dragon-hot-menu">
              <Grid item xs={12} md={12} className="footer-menu-two mb-3">
                <Typography color="primary" variant="h6" style={{ marginLeft: `1rem`, marginBottom: `2rem` }}>
                  PERUSAHAAN
                </Typography>
                <MenuList className="dragon-hot-list-menu sections">
                  <MenuItem>
                    <a href="https://landx.id/blog/">Blog</a>
                  </MenuItem>
                  <MenuItem>
                    <AnchorLink to='/about-landx'>Tentang LandX</AnchorLink>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/syarat-dan-ketentuan'>Syarat & Ketentuan</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/privacy-policy'>Kebijakan Privasi</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/service-level-agreement'>Service Level Agreement</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/kebijakan-isms'>Kebijakan ISMS</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/mitigasi-risiko'>Mitigasi Risiko</Link>
                  </MenuItem>
                  <MenuItem>
                    <a href="https://landx.id/blog/faq-landx/">FAQ</a>
                  </MenuItem>
                </MenuList>
              </Grid>

              <Grid item xs={12} md={12} className="footer-menu-two">
                <Typography color="primary" variant="h6" style={{ marginLeft: `1rem`, marginBottom: `2rem` }}>
                  DUKUNGAN
                </Typography>
                <MenuList className="sections">
                  <MenuItem>
                    <Link to='/contact'>Kontak</Link>
                  </MenuItem>
                  <MenuItem>
                    <a href='mailto:hello@landx.id'>hello@landx.id</a>
                  </MenuItem>
                </MenuList>
              </Grid>

              <Grid item xs={12} md={12}>
                {widthWindows < 1200 ?
                  <Button variant="outlined" onClick={() => { navigate("/pendaftaran-perusahaan") }} style={{ fontWeight: `600` }}>PENDAFTARAN PERUSAHAAN</Button>
                  :
                  ''
                }
              </Grid>
            </Grid>
            :
            <Grid container spacing={2} className="dragon-hot-menu">
              <Grid item xs={3} md={3} className="footer-menu-two mb-3">
                <Typography color="primary" variant="h6" style={{ marginLeft: `1rem`, marginBottom: `2rem` }}>
                  PERUSAHAAN
                </Typography>
                <MenuList className="dragon-hot-list-menu sections">
                  <MenuItem>
                    <a href="https://landx.id/blog/">Blog</a>
                  </MenuItem>
                  <MenuItem>
                    <AnchorLink to='/about-landx'>Tentang LandX</AnchorLink>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/syarat-dan-ketentuan'>Syarat & Ketentuan</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/privacy-policy'>Kebijakan Privasi</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/service-level-agreement'>Service Level Agreement</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/kebijakan-isms'>Kebijakan ISMS</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/mitigasi-risiko'>Mitigasi Risiko</Link>
                  </MenuItem>
                  <MenuItem>
                    <a href="https://landx.id/blog/faq-landx/">FAQ</a>
                  </MenuItem>
                </MenuList>
              </Grid>

              <Grid item xs={3} md={3} className="footer-menu-two">
                <Typography color="primary" variant="h6" style={{ marginLeft: `1rem`, marginBottom: `2rem` }}>
                  DUKUNGAN
                </Typography>
                <MenuList className="sections">
                  <MenuItem>
                    <Link to='/contact'>Kontak</Link>
                  </MenuItem>
                  <MenuItem>
                    <a href='mailto:hello@landx.id'>hello@landx.id</a>
                  </MenuItem>
                </MenuList>
              </Grid>

              <Grid item xs={3} md={3}>
                {widthWindows < 1200 ?
                  <Button variant="outlined" onClick={() => { navigate("/pendaftaran-perusahaan") }} style={{ fontWeight: `600` }}>PENDAFTARAN PERUSAHAAN</Button>
                  :
                  ''
                }
              </Grid>
            </Grid>
          }
        </Collapse>

        <section style={{ padding: '30px', alignItems: 'center' }} className="dragon-hot-header">
          {/* <Container> */}
          <Box className="dragon-hot-bowl one" style={{ float: `right` }}></Box>
          <Box className="dragon-hot-title dragon-hot-mt">
            <Typography variant="h3" align="center">
              Hot Pot #1 di Melbourne
            </Typography>
            <Typography variant="h3" align="center">
              hadir di Indonesia!
            </Typography>
          </Box>
          <Box style={{ justifyContent: `center`, display: `flex` }}>
            <img
              src="/images/dhp_icon.png"
              alt="DHP Icon"
              className="dragon-hot-icon"
            />
          </Box>
          <Box style={{ marginLeft: `5rem`, marginTop: `3rem` }}>
            <Grid container spacing={2} className="dragon-hot-title">
              <Grid item xs={12} md={5}>
                <Typography paragraph={true}>
                  Dikelola Oleh
                </Typography>
                <Typography paragraph={true} className="dragon-pt">
                  Yamatoten Abura Soba Group
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography paragraph={true} style={{ marginBottom: `2rem` }}>
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
          <Box style={{ marginLeft: `5rem`, marginTop: `3rem` }}>
            <Grid container className="dragon-hot-title">
              <Grid item xs={12} md={3}>
                &nbsp;
              </Grid>
              <Grid item xs={12} md={7}>
                <Box className="dragon-hot-capital-average">
                  <Typography paragraph={true}>
                    Rata-rata Balik Modal
                  </Typography>
                  <Typography paragraph={true} className="dragon-deviden">
                    15-18 Bulan per Cabang
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="dragon-hot-bowl2">
            <img
              src="/images/dhp_header_image_03.png"
              id="bowl"
              alt=""
            />
          </Box>
          {/* </Container> */}
        </section>

        <section style={{ padding: '30px', display: 'flex', alignItems: 'center', backgroundColor: `#fff` }}>
          <Container className="dragon-next">
            <Grid item xs={12} md={12} className="dragon-hot-font">
              <Typography color="secondary" variant="h2" align="center">
                Sekarang Kamu Bisa Patungan untuk
              </Typography>
              <Typography color="secondary" variant="h2" align="center" paragraph={true} className="dragon-next-title ">
                Punya Bisnis Dragon Hot Pot!
              </Typography>
              <Typography color="secondary" variant="h5" align="center" style={{ marginTop: `2rem` }} className="dragon-next-desc">
                Ingin buka bisnis restoran, carwash, kos-kosan, atau bisnis-bisnis lainnya
              </Typography>
              <Typography color="secondary" variant="h5" align="center" paragraph={true} className="dragon-next-desc">
                tapi modal masih belum cukup? Jangan khawatir karena sekarang ada LandX!
              </Typography>
              <Typography color="secondary" variant="h5" align="center" paragraph={true} className="dragon-next-desc-2">
                Kamu bisa punya bisnis yang dikelola secara profesional mulai dari <b>Rp. 1.000.000</b> aja!
              </Typography>
            </Grid>
          </Container>
        </section>

        <section style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
          <Grid item xs={12} md={12}>
            <CardTitleSection title='Bagaimana Cara Kerja LandX?' />
            <Grid container spacing={4} style={{ justifyContent: `center` }}>
              <CardLandxWork img='../images/dhp_icon_pilih_bisnis.png' title="Pilih Bisnis" content="Pilih bisnis favoritmu yang sedang melakukan penggalangan dana" height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_ikut_patungan.png' title='Ikut Patungan' content='Dengan ikut patungan, kamu turut memiliki saham di bisnis tersebut' height="100" width="100" />
              <CardLandxWork img='../images/dhp_icon_terima_bagi_hasil.png' title="Terima Bagi Hasil" content='Pembagian keuntungan sesuai dengan kinerja bisnis yang kamu miliki' height="100" width="100" />
            </Grid>
          </Grid>
        </section>

        <section style={{ padding: '30px', display: 'flex', alignItems: 'center', backgroundColor: `#fff` }}>
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

        <section>
          <Container id='ongoing-projects' className='container-ongoing-projects pt-40'>
            <CardTitleSection title='Proyek yang Sedang Listing' />

            {dataProject &&
              <Slider {...cardProject} className='container-card-projects'>

                {dataListing[0] && dataListing[0].map((data, i) => {
                  if (data !== undefined && data !== null && i >= 0) {
                    let listingAt = new Date(data.attributes.listing_at).getTime()
                    let now = Date.now()
                    if (listingAt > now) {
                      return <CardListing data={data.attributes} timeUp={listingAt - Date.now()} />
                    }
                  }
                })}

                {dataProject && dataProject.map((dataProject) => {
                  if (dataProject.landXProperty !== null) {
                    return <CardProject cardProject={cardProject} data={dataProject.landXProperty} key={dataProject.landXProperty.id} />
                  }
                })}
              </Slider>
            }

            <Grid container>
              <Grid xs={12} item style={{ justifyContent: 'center', display: 'flex', margin: '20px 0' }}>
                <Button onClick={() => { navigate("/project") }}>INVESTASI SEKARANG</Button>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section style={{ padding: '30px', minHeight: '500px', display: 'flex', alignItems: 'center', backgroundColor: `#fff` }}>
          <Container className="menu-mt">
            <Grid item xs={12} md={12}>
              <Typography color="primary" align="center" className="dragon-emot">
                &#128532;
              </Typography>
              <Typography color="secondary" variant="h4" align="center" paragraph={true} className="dragon-emot-desc">
                Brand favoritmu sudah terdanai? Tenang, kamu bisa booking dulu agar tidak ketinggalan pendanaan cabang selanjutnya!
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} align="center" style={{ marginTop: `3rem`, marginBottom: `3rem` }}>
              <a href="https://forms.gle/b9N7KtBMCczZzFGH8" target="_blank" style={{ textDecoration: `none` }}>
                <Button >Booking Disini</Button>
              </a>
            </Grid>
          </Container>
        </section>

        <section style={{ paddingTop: '50px', display: 'flex', alignItems: 'center' }}>
          <Grid item xs={12} md={12}>
            <Typography color="primary" align="center" className="dragon-emot">
              &#129300;
            </Typography>
            <Typography color="secondary" variant="h4" align="center" className="dragon-emot-desc">
              Punya pertanyaan? Hubungi kami di
            </Typography>
            <Grid container style={{ marginTop: `3rem` }}>
              <Grid item xs={5} md={5} align="right">
                <Button variant="outlined" onClick={() => { navigate("https://api.whatsapp.com/send?phone=6281381862878") }}>
                  <Typography style={{ fontWeight: `600` }}>
                    <WhatsAppIcon />
                    WHATSAPP
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={1} md={1}>
                <Typography color="secondary" align="center">
                  atau
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="h4" color="secondary" style={{ fontWeight: `600` }}>
                  +62 813 8186 2878
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </section>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default DragonHotPot
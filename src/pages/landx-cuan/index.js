import React, { useState, useEffect } from "react"
import { ThemeProvider } from '@mui/material/styles';
import { themeconfig } from '../../assets/styling/themeConfig';
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

import { Container, Grid, Typography, Box, MenuList, MenuItem, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import CardWhyLandx from "../../components/Card/CardWhyLandx/CardWhyLandx";
import Seo from "../../components/seo/seo"

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/styling/style.scss"
import "./index.scss"

const theme = themeconfig
const LandXCuan = () => {

  const sliderOneCard = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [expanded, setExpanded] = useState(false);
  const [widthWindows, setWidthWindows] = useState('')

  useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Seo title="LandX" />

      <section className="cuan-header">
        <Container>
          <Grid item xs={12} md={12} align="center">
            {widthWindows > 365 ?
              <img
                src="/images/landx_cuan_desktop_KV.webp"
                alt="LandX cuan"
                className="cuan-banner"
              />
              :
              <img
                src="/images/Mobile-KV-360.webp"
                alt="LandX cuan"
                className="cuan-banner"
              />
            }
          </Grid>

          <Grid container className="cuan-border-cta">
            <Grid item xs={12} md={12} align="center">
              <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp" className="cuan-btn-white cuan-mt-6">
                Download Via Playstore
              </a>
            </Grid>
            <Grid item xs={12} md={12} align="center">
              <a href="https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id" className="cuan-btn-outline-white">
                Download Via App Store
              </a>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <iframe
              className="cuan-box-video"
              src="https://www.youtube.com/embed/_LuP9UeDyYg"
              title="Landx"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading='lazy'>
            </iframe>
          </Grid>
        </Container>
      </section>

      <section style={{ paddingBottom: '15rem', display: 'flex', alignItems: 'center' }} className="cuan-body cuan-pb">
        <Container className="cuan-new">
          <Grid item xs={12} md={12}>
            <Typography align="center" className="cuan-h4-green" paragraph={true}>
              KHUSUS PENGGUNA BARU!
            </Typography>
            <Typography align="center" className="cuan-h2-green">
              Beli Lot dan Nikmati Voucher-nya
            </Typography>
          </Grid>

          <Grid container spacing={2} justifyContent="center" style={{ marginTop: `2rem` }}>
            <Grid item xs={12} md={4} className="cuan-voucher">
              <img
                src="/images/landx_cuan_card_3_lot.webp"
                className="cuan-width-100 cuan-voucher"
                alt="landx voucher"
              />
            </Grid>
            <Grid item xs={12} md={4} className="cuan-voucher">
              <img
                src="/images/landx_cuan_card_10_lot.webp"
                className="cuan-width-100 cuan-voucher"
                alt="landx voucher"
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section style={{ padding: `30px`, display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={3} justifyContent="center" style={{ alignItems: `center` }} className="cuan-why">
          <Grid item xs={12} md={5}>
            <Typography className="cuan-qna" paragraph={true}>
              Mengapa Harus Investasi di LandX?
            </Typography>
            <Typography color="secondary" paragraph={true}>
              Kamu pengen punya bisnis, tapi gak punya modal banyak dan pengalaman bisnis?
            </Typography>
            <Typography color="secondary" paragraph={true}>
              Di LandX, kamu bisa jadi owner bisnis apapun mulai dari 1 jutaan aja.
            </Typography>
            <Typography color="secondary">
              Cukup duduk tenang, dan dapatkan passive income berupa dividen rutin selama 3 bulan sekali.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="/images/landx_cuan_cta_01_desktop.webp"
              className="cuan-cta"
              alt="landx cta"
            />
          </Grid>
        </Grid>
      </section>

      <section className='section-why-landx' style={{ paddingTop: `3rem`, backgroundColor: `transparent` }}>
        <Container>
          {widthWindows < 1200 ?
            <Slider {...sliderOneCard}>
              <CardWhyLandx logo='/images/icon_star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
              <CardWhyLandx logo='/images/icon_time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
              <CardWhyLandx logo='/images/icon_jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
            </Slider>
            :
            <Grid container spacing={4}>
              <CardWhyLandx logo='/images/icon_star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
              <CardWhyLandx logo='/images/icon_time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
              <CardWhyLandx logo='/images/icon_jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
            </Grid>
          }
        </Container>
      </section>

      <section className="cuan-body" style={{ padding: `30px` }}>
        <Grid container spacing={3} justifyContent="center" style={{ alignItems: `center` }}>
          <Grid item xs={12} md={12} align="center" style={{ paddingTop: `5rem`, marginBottom: `3rem` }}>
            <Typography className="cuan-title">
              Cara Dapatin Cuan
            </Typography>
          </Grid>
        </Grid>

        <Box style={{ textAlign: `-webkit-center` }}>
          <Grid item xs={12} md={6}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ borderRadius: `15px` }}>
              <AccordionSummary
                expandIcon={expanded === 'panel1' ? <RemoveIcon className="cuan-icon" /> : <AddIcon className="cuan-icon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={expanded === 'panel1' ? "cuan-transition" : ""}
              >
                <Typography color="secondary" className="cuan-title-accordion">
                  Syarat Promo
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="cuan-detail-accordion">
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">1</span> Untuk pembelian 3 lot akan mendapatkan voucher senilai Rp.25,000
                </Typography>
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">2</span> Untuk pembelian 10 lot akan mendapatkan voucher senilai Rp.100,000
                </Typography>
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">3</span> Cashback akan dikirimkan ke deposit pengguna aplikasi LandX terhitung 2x24 jam sejak melakukan pembelian lot
                </Typography>
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">4</span> <span>
                    Jika kamu memiliki pertanyaan, silahkan hubungi kami
                    melalui call center kami <u>08119562878</u> atau <u>081381862878</u>,
                    email di <u>hello@landx.id</u> atau via Instagram di <u>landx.id</u>
                  </span>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} md={6} style={{ marginTop: `1rem` }}>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ borderRadius: `15px` }}>
              <AccordionSummary
                expandIcon={expanded === 'panel2' ? <RemoveIcon className="cuan-icon" /> : <AddIcon className="cuan-icon" />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                className={expanded === 'panel2' ? "cuan-transition" : ""}
              >
                <Typography color="secondary" className="cuan-title-accordion">
                  Mekanisme Voucher
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="cuan-detail-accordion">
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">1</span> Tanggal promo: 20 Desember 2021 - 31 Desember 2021
                </Typography>
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">2</span> Berlaku untuk pengguna baru LandX
                </Typography>
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">3</span> Lakukan pembelian melalui aplikasi LandX
                </Typography>
                <Typography color="secondary" paragraph={true} sx={{ display: `flex` }}>
                  <span className="cuan-numstyle">4</span> Pembelian berlaku untuk satu project dan tidak berlaku kelipatan
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Box>
      </section>

      <section style={{ display: 'flex', alignItems: 'center' }}>
        <Container className="cuan-background">
          <Grid container spacing={3} justifyContent="center" style={{ alignItems: `center` }}>
            <Grid item xs={12} md={6}>
              <img
                src="/images/landx_cuan_kv_03_cta_desktop.webp"
                className="cuan-cta-2"
                alt="landx cta"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className="cuan-title-02" align="center" paragraph={true}>
                Gabung Sekarang dan <br /> Ikutan CUAN-nya!
              </Typography>
              <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp" style={{ width: `100%` }} className="cuan-btn-white cuan-btn">
                Download Via Playstore
              </a>
              <a href="https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id" style={{ width: `100%` }} className="cuan-btn-white cuan-btn">
                Download Via App Store
              </a>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section>
        <Grid item xs={12} md={12} align="center" style={{ paddingTop: `5rem` }}>
          <Typography color="primary" paragraph={true} className="cuan-wa">
            Untuk bantuan lebih lanjut, hubungi kami via WhatsApp
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} align="center">
          <a href="https://bit.ly/3Ed3dTV"
            className="cuan-btn-outline-white cuan-btn-wa"
            style={{ color: `#2DBE60`, border: `1px solid #2DBE60` }}
          >
            WA Customer Service 1
            <ChevronRightIcon fontSize="large" />
          </a>
        </Grid>
        <Grid item xs={12} md={12} align="center">
          <a href="https://bit.ly/32coLTQ"
            className="cuan-btn-outline-white cuan-btn-wa"
            style={{ color: `#2DBE60`, border: `1px solid #2DBE60` }}
          >
            WA Customer Service 2
            <ChevronRightIcon fontSize="large" />
          </a>
        </Grid>
      </section>

      <section className="cuan-body">
        <Container>
          <Grid container spacing={2} style={{ marginTop: `5rem` }}>
            <Grid item xs={12} md={3} className="footer-menu-one mb-3">
              <MenuList className="sections">
                <MenuItem>
                  <AnchorLink to='/#why-landx'>Mengapa LandX</AnchorLink>
                </MenuItem>
                <MenuItem>
                  <AnchorLink to='/#ongoing-projects'>Proyek</AnchorLink>
                </MenuItem>
                <MenuItem>
                  <AnchorLink to='/#how-it-works'>Cara Kerja</AnchorLink>
                </MenuItem>
                <MenuItem>
                  <Link to='/contact'>Kontak</Link>
                </MenuItem>
                <MenuItem>
                  <a href="https://landx.id/blog/">Blog</a>
                </MenuItem>
              </MenuList>
            </Grid>

            <Grid item xs={12} md={3} className="footer-menu-two">
              <Typography color="secondary" className="footer-menu-title">Perusahaan</Typography>
              <MenuList className="sections">
                <MenuItem>
                  <a href='https://landx.id/blog/jobs-at-landx/'>Karir</a>
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
            <Grid item xs={12} md={6} className="ml-1 container-icon-copyright">
              <Grid item xs={12}>
                <a href="https://id.linkedin.com/company/landx-id?trk=public_profile_topcard_current_company" className="footer-icon-link">
                  <LinkedInIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
                </a>
                <a href="https://www.facebook.com/landx.id" className="footer-icon-link">
                  <FacebookIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
                </a>
                <a href="https://www.instagram.com/landx.id/" className="footer-icon-link">
                  <InstagramIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
                </a>
              </Grid>

              <Grid item xs={12}>
                <Typography className="text-copyright">
                  © 2020 LandX Indonesia. All Rights Reserved.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </ThemeProvider>
  )
}

export default LandXCuan
import React, { useEffect, useState } from "react"
import { ThemeProvider } from '@mui/material/styles';
import { themeconfig } from '../../assets/styling/themeConfig';
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

import { Container, Grid, Typography, Button, Box, Toolbar, Collapse, MenuList, MenuItem } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import CardWhyLandx from "../../components/Card/CardWhyLandx/CardWhyLandx";
import Seo from "../../components/seo/seo"

import "../../assets/styling/style.scss"
import "./index.scss"

const theme = themeconfig
const LandXCuan = () => {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
    <Seo title="LandX" />
      
      <section style={{ paddingTop: `3rem`, alignItems: `center` }} className="cuan-header">
        <Container> 
          <Grid item xs={12} md={12} align="center">
            <img 
              src="./images/landx_cuan_desktop_KV.webp"
              alt="LandX cuan"
              className="cuan-banner"
            />
          </Grid>

          <Grid container style={{ marginTop:`-197px`, marginBottom:`150px` }}>
            <Grid item xs={12} md={12} align="center">
              <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp" className="cuan-btn-white">
                Download Via Playstore
              </a>
            </Grid>
            <Grid item xs={12} md={12} align="center">
              <a href="https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id" className="cuan-btn-outline-white">
                Download Via App Store
              </a>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} className='container-yt'>
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
      
      <section style={{ paddingBottom: '15rem', display: 'flex', alignItems: 'center' }} className="cuan-body">
        <Container style={{ marginTop:`16rem`, marginBottom:`1rem` }}>
          <Grid item xs={12} md={12}>
            <Typography align="center" className="cuan-h4-green" paragraph={true}>
              KHUSUS PENGGUNA BARU!
            </Typography>
            <Typography align="center" className="cuan-h2-green">
              Beli Lot dan Nikmati Voucher-nya
            </Typography>
          </Grid>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
              <img 
                src="./images/landx_cuan_card_3_lot.webp"
                style={{ width:`100%` }}
              />  
            </Grid>
            <Grid item xs={12} md={4}>
              <img 
                src="./images/landx_cuan_card_10_lot.webp"
                style={{ width:`100%` }}
              />  
            </Grid>
          </Grid>
        </Container>
      </section>

      <section style={{ display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={3} justifyContent="center" style={{ alignItems:`center` }}>
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
              src="./images/landx_cuan_cta_01_desktop.webp"
              style={{ width:`100%`, marginTop:`-7.5rem` }}
            />  
          </Grid>
        </Grid>
      </section>

      <section className='section-why-landx' style={{ paddingTop: `3rem`, backgroundColor:`transparent` }}>
        <Container>
          <Grid container spacing={4}>
            <CardWhyLandx logo='./images/icon_star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
            <CardWhyLandx logo='./images/icon_time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
            <CardWhyLandx logo='./images/icon_jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
          </Grid>
        </Container>
      </section>

      <section className="cuan-body">
        <Grid container spacing={3} justifyContent="center" style={{ alignItems:`center` }}>
          <Grid item xs={12} md={12} align="center" style={{ paddingTop:`5rem` }}>
            <Typography className="cuan-title" paragraph={true}>
              Cara Dapatin Cuan
            </Typography>
          </Grid>
        </Grid>
      </section>

      <section style={{ display: 'flex', alignItems: 'center', paddingTop:`10rem` }}>
        <Container className="cuan-background">
          <Grid container spacing={3} justifyContent="center" style={{ alignItems:`center` }}>
            <Grid item xs={12} md={6}>
              <img 
                src="./images/landx_cuan_kv_03_cta_desktop.webp"
                style={{ width:`100%`, marginTop:`-12rem` }}
              />  
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className="cuan-title-02" align="center" paragraph={true}>
                Gabung Sekarang dan Ikutan CUAN-nya!
              </Typography>  
              <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp" className="cuan-btn-white cuan-btn">
                Booking Lot Sekarang
              </a>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section>
          <Grid item xs={12} md={12} align="center" style={{ paddingTop:`5rem` }}>
            <Typography color="primary" paragraph={true}>
              Untuk bantuan lebih lanjut, hubungi kami via WhatsApp
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} align="center">
              <a href="https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id" 
                 className="cuan-btn-outline-white cuan-btn-wa"
                 style={{ color:`#2DBE60`, border:`1px solid #2DBE60` }}
              >
                WA Customer Service 1 
                <ChevronRightIcon fontSize="large"/>
              </a>
            </Grid>
            <Grid item xs={12} md={12} align="center">
              <a href="https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id" 
                 className="cuan-btn-outline-white cuan-btn-wa"
                 style={{ color:`#2DBE60`, border:`1px solid #2DBE60` }}  
              >
                WA Customer Service 2 
                <ChevronRightIcon fontSize="large"/>
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
                  <Link href="https://landx.id/blog/">Blog</Link>
                </MenuItem>
              </MenuList>
            </Grid>

            <Grid item xs={12} md={3} className="footer-menu-two">
              <Typography color="secondary" className="footer-menu-title">Perusahaan</Typography>
              <MenuList className="sections">
                <MenuItem>
                  <Link href='https://landx.id/blog/jobs-at-landx/'>Karir</Link>
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
                  <Link href="https://landx.id/blog/faq-landx/">FAQ</Link>
                </MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={12} md={6} className="ml-1 container-icon-copyright">
              <Grid item xs={12}>
                <Link href="https://id.linkedin.com/company/landx-id?trk=public_profile_topcard_current_company" className="footer-icon-link">
                  <LinkedInIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
                </Link>
                <Link href="https://www.facebook.com/landx.id" className="footer-icon-link">
                  <FacebookIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
                </Link>
                <Link href="https://www.instagram.com/landx.id/" className="footer-icon-link">
                  <InstagramIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
                </Link>
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
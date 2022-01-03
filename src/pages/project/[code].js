import React, { useEffect } from "react"
import { navigate } from "gatsby";
import { Grid, Container, Typography, Chip, LinearProgress, Button } from "@mui/material"
import Layout from "../../components/layout/layout"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import './detailProjects.scss'

const DetailProjects = () => {
  useEffect(() => {
    detectDevice()
  }, [])

  const detectDevice = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  return (
    <>
      <Layout>
        <Container className="container-project-detail">
          <Grid container>
            <Grid item xs={12} className="back-to-project">
              <Button variant="text" onClick={() => navigate(`/project`)} style={{ textDecoration: 'none', cursor: 'pointer', color: '#5e798d' }} startIcon={<ArrowBackIcon color="success" className="arrow-back" />}>
                <span style={{ marginTop: '2px' }}>Kembali ke Semua Proyek</span>
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Grid container>
                <Grid item>
                  <h1>Slider</h1>
                </Grid>
                <Grid item>
                  <h1>Images</h1>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Typography className='code'>
                CAPT
              </Typography>
              <Typography className='text-title' component='h1'>
                Kapal Tug & Barge - PT. Samudera Rezeki Mulia
              </Typography>
              <Chip label='MARITIM' color="success" variant="outlined" className="chip-text" />
              <Grid container>
                <Grid item xs={6} className='text-green-price' component='h3'>
                  Rp 4.888.000.000
                </Grid>
                <Grid item xs={6} className='text-green-price' component='h3'>
                  41
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-secon'>
                  dari Rp 9.000.000.000
                </Grid>
                <Grid item xs={6} className='text-secon'>
                  Hari Lagi
                </Grid>
              </Grid>
              <LinearProgress variant="determinate" value='50' className="progress-bar" />
              <Grid container>
                <Grid item xs={6} className='text-secon'>
                  Harga Per Lot
                </Grid>
                <Grid item xs={6} className='text-secon'>
                  Jumlah Lot
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-price'>
                  Rp. 1.000.000
                </Grid>
                <Grid item xs={6} className='text-price'>
                  9000
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-secon'>
                  Periode Dividen <InfoOutlinedIcon color='success' className="icon-info" />
                </Grid>
                <Grid item xs={6} className='text-secon'>
                  Estimasi Dividen <InfoOutlinedIcon color='success' className="icon-info" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-price'>
                  Per 3 bulan
                </Grid>
                <Grid item xs={6} className='text-price'>
                  10 - 20% Per Tahun
                </Grid>
              </Grid>
              <Grid container className='container-btn-project'>
                <Grid item xs={6}>
                  <Button variant="contained" color='success' className='btn-buy'>BELI VIA APP</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color='success'>SHOW PROSPEKTUS</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default DetailProjects

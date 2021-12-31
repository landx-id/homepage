import * as React from "react"
import { Grid, Container, Typography, Chip, LinearProgress, Button } from "@mui/material"
import Layout from "../../components/layout/layout"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import './detailProject.scss'

const DetailProject = () => (
  <Layout>
    <Container className="container-project-detail">
      <Grid container>
        <Grid item className="back-to-project">
          <ArrowBackIcon color="success" className="arrow-back" /> Kembali ke Semua Proyek
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
            <Grid item>
              <Button variant="contained" color='success' className='btn-buy'>BELI VIA APP</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color='success'>SHOW PROSPEKTUS</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Layout>
)

export default DetailProject

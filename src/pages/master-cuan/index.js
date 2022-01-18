import React from 'react'
import './masterCuan.scss'
import { Container, Grid, Typography, Button, CircularProgress } from '@mui/material';

const MasterCuan = () => {
  return (
    <div className='container-master-cuan'>
      <Container maxWidth='xs'>
        <div className="banner-container">
          <Grid container>
            <Grid item xs={12} className='text-center'>
              <img src="/master-cuan/logo-white.webp" alt="Landx" />
            </Grid>
            <Grid item xs={12} className='text-center'>
              <img src="/master-cuan/banner-master-cuan.webp" alt="Landx" />
            </Grid>
            <Grid item xs={12} className='text-center'>
              <Typography align='center' className='text-banner'>
                Makannya Bikin Kenyang, Dividennya Bikin Mapan!
              </Typography>
              <Typography align='center' className='text-banner'>
                Wujudkan impianmu jadi BOS Restoran di tahun 2022!
              </Typography>
              <Typography align='center' className='text-banner'>
                Mau punya bisnis resto kayak apa?
              </Typography>
              <Typography align='center' paragraph={true} className='text-banner'>
                Mau yang punya puluhan cabang, yang ordernya ribuan, atau cari yang partnernya berpengalaman?
              </Typography>
              <Typography align='center' paragraph={true} className='text-banner'>
                Semuanya ada di bulan ini!
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default MasterCuan

import React from 'react'
import { Container, Grid, Typography, Button, Box, Slider as MuiSlider } from '@mui/material';
import CardMasterCuan from '../../components/Card/CardMasterCuan/CardMasterCuan';
import CardProjectMasterCuan from '../../components/Card/CardProjectMasterCuan/CardProjectMasterCuan';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './masterCuan.scss'

const MasterCuan = () => {
  const marks = [
    {
      value: 0
    },
    {
      value: 25
    },
    {
      value: 75
    },
    {
      value: 100
    },
  ];

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
              <Button variant="text" className='btn-join-white'>Gabung Sekarang</Button>
            </Grid>
          </Grid>
        </div>

        <div className="why-join-container">
          <Grid container>
            <Grid item xs={12}>
              <Typography component="h1" className="text-title">
                Mengapa saya harus bergabung dengan Master Cuan?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CardMasterCuan title='Jadi Pemilik F&B SEKARANG JUGA!' description='Dengan mengikuti Master Cuan kamu bisa jadi pemilik bisnis F&B lebih dari satu bisnis dan mendapatkan benefit yang akan meningkatkan networking kamu dan pengetahuan keuangan kamu!' />
            </Grid>
            <Grid item xs={12}>
              <CardMasterCuan title='Exclusive Finance Bootcamp' description='Menjadi investor di LandX engga hanya mendapatkan cuannya, tapi kamu bisa mendapatkan keuntungan yang lebih yaitu pengetahuan baru mengenai finance, bertemu dengan para expert di dunia keuangan dan networking dengan investor lainnya!' />
            </Grid>
          </Grid>
        </div>

        <div className="reward-container">
          <Grid container>
            <Grid item xs={12}>
              <Typography component="h1" className="text-title">
                Master Cuan Reward
              </Typography>
            </Grid>
            <Grid item xs={12} className="icon-grid">
              <div className="icon-container">
                <img src="./icon-20lot.png" alt="icon lot" />
              </div>
              <div className="lot-container">
                20 Lot
              </div>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: 300 }}>
                <MuiSlider
                  aria-label="Always visible"
                  defaultValue={80}
                  // getAriaValueText={valuetext}
                  step={25}
                  marks={marks}
                  valueLabelDisplay="off"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Slider>
                <CardMasterCuan title='Reward- 20 Lot' description='Dapatkan Mini Finance Bootcamp with Experts' />
                <CardMasterCuan title='Reward- 50 Lot' description='Dapatkan EXCLUSIVE Mini Finance Bootcamp with Experts' />
                <CardMasterCuan title='Reward- 100 Lot' description='Dapatkan Offline Finance Bootcamp with Experts, Happy Hour Meetup & Discussion with Speakers' />
                <CardMasterCuan title='Reward- 250 Lot' description='Dapatkan Offline Bootcamp Finance with Experts & Business tour' />
              </Slider>
            </Grid>
          </Grid>
        </div>

        <div className="pendanaan-container">
          <Grid container>
            <Grid item xs={12}>
              <Typography component="h1" className="text-b-title">
                Pendanaan Dibuka
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Slider>
                <CardProjectMasterCuan />
              </Slider>
            </Grid>
          </Grid>
        </div>

      </Container>
    </div>
  )
}

export default MasterCuan

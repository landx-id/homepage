import React from 'react'
import { Container, Grid, Typography, Button, Box, Slider as MuiSlider } from '@mui/material';
import CardMasterCuan from '../../components/Card/CardMasterCuan/CardMasterCuan';
import CardProjectMasterCuan from '../../components/Card/CardProjectMasterCuan/CardProjectMasterCuan';
import AccordionMasterCuan from '../../components/Accordion/AccordionMasterCuan/AccordionMasterCuan';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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

  const cardProjectMasterCuan = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  };

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
              <Slider {...cardProjectMasterCuan}>
                <CardProjectMasterCuan date='15 hari lagi' code='CAPT' bisnisName='Kapal Tug & Barge' companyName='PT Samudera Rezeki Mulia' price='Rp 6.529.000.000' category='MARITIM' />
                <CardProjectMasterCuan date='0 hari lagi' code='PMBB' bisnisName='Padang Merdeka' companyName='PT Merdeka Bisnis Bersama' price='Rp 3.750.000.000' category='RESTORAN' />
                <CardProjectMasterCuan date='0 hari lagi' code='HONG' bisnisName='Hong Tang' companyName='PT Gula Garam Asia' price='Rp 7.050.000.000' category='RESTORAN' />
              </Slider>
            </Grid>
          </Grid>
        </div>

        <div className="how-to-work-master-cuan">
          <Grid container>
            <Grid item xs={12}>
              <Typography component="h1" className="text-title">
                Cara Kerja Master Cuan
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className="list-container">
                <ol className='num-style'>
                  <li>
                    <Typography className="text-rule">
                      Tanggal promo: 24 Januari 2022 - 13 Februari 2022
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Berlaku untuk semua pengguna LandX
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Kamu bisa lakukan transaksi melalui aplikasi LandX
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Kamu bisa melakukan transaksi lebih dari satu project
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Kamu akan mendapatkan benefit dari campaign ini setelah tanggal 13 Februari 2022
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Kamu bisa melakukan penambahan lot selama campaign ini berlangsung
                    </Typography>
                  </li>
                  <li>
                    <Typography className="text-rule">
                      Masa tenggang penambahan lot hingga tanggal 13 Februari 2022 pukul 23:59
                    </Typography>
                  </li>
                </ol>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="faq-container">
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography component="h1" className="text-title">
                  Frequently Asked Questions
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AccordionMasterCuan title='Apa itu program Master Cuan' content='Program Master Cuan adalah program khusus investor LandX agar menjadi juragan bisnis FnB di LandX dengan minimal pembelian hanya 20 lot saja pada project FnB yang sedang listing' />
              <AccordionMasterCuan title='Benefitnya apa saja?' accCategory={true} />
              <AccordionMasterCuan title='Syarat ikutan bagaimana?' content='Kakak terdaftar sebagai user yang sudah verifikasi akun di Aplikasi LandX' />
              <AccordionMasterCuan title='Bagaimana cara menjadi juragan bisnis F&B di Master Cuan?' content='Kakak terdaftar sebagai user yang sudah verifikasi akun di Aplikasi LandX' />
              <AccordionMasterCuan title='Saya sudah mengisi form, selanjutnya bagaimana?' content='Setelah mengisi form Kakak akan menerima email otomatis yang mengarahkan Kakak untuk melakukan pembelian di aplikasi LandX, lakukan pembelian project FnB yang sedang listing di LandX sesuai dengan total lot yang ingin Kakak beli.' />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' className='btn-join-green'>Gabung Sekarang</Button>
          </Grid>
        </div>

        <div className="banner-download-container">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="logo-container">
                <img src="/master-cuan/mini-logo.webp" alt="landx" className="img-mini-logo" />
              </div>
            </Grid>
            <Grid item xs={9}>
              <Typography className="text-title-download">
                Download Aplikasi LandX
              </Typography>
              <Typography className="text-content">
                Kini memiliki bisnis dan properti jadi jauh lebih mudah. Unduh aplikasi LandX sekarang
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' className='btn-install'>Install Sekarang</Button>
          </Grid>
        </div>

        <div className="customer-container">
          <Grid container>
            <Grid item xs={12}>
              <Typography className='text-subtitle'>
                Untuk bantuan lebih lanjut, hubungi kami via WhatsApp
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined' className='btn-customer'><WhatsAppIcon sx={{ color: '00b242', marginRight: '5px', textTransform: 'none' }} /> WA Customer Service 1</Button>
              <Button variant='outlined' className='btn-customer'><WhatsAppIcon sx={{ color: '00b242', marginRight: '5px', textTransform: 'none' }} /> WA Customer Service 2</Button>
            </Grid>
          </Grid>
        </div>

        <footer className="footer-master-cuan">
          <Grid container>
            <Grid item xs={12}>
              <Typography className="text-title">
                Mengapa LandX
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-title">
                Proyek
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-title">
                Cara Kerja
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-title">
                Kontak
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-title">
                Blog
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-title">
                Perusahaan
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                Karir
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                Syarat & Ketentuan
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                Kebijakan Privasi
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                Service Level Agreement
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                Kebijakan ISMS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                Mitigasi Resiko
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-subtitle">
                FAQ
              </Typography>
            </Grid>
          </Grid>

          <div className="icon-container">
            <Grid container>
              <Grid item xs={12}>
                <FacebookIcon className="icon-sosmed" />
                <LinkedInIcon className="icon-sosmed" />
                <InstagramIcon className="icon-sosmed" />
              </Grid>
            </Grid>
          </div>

          <Grid container>
            <Grid item xs={12}>
              <div className="text-copyright">
                © 2020 LandX Indonesia.
              </div>
              <div className="text-copyright">
                All Rights Reserved.
              </div>
            </Grid>
          </Grid>
        </footer>

      </Container>
    </div>
  )
}

export default MasterCuan

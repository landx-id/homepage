import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, Button, Box, Slider as MuiSlider } from '@mui/material';
import { navigate } from "gatsby"
import CardMasterCuan from '../../components/Card/CardMasterCuan/CardMasterCuan';
import CardProjectMasterCuan from '../../components/Card/CardProjectMasterCuan/CardProjectMasterCuan';
import AccordionMasterCuan from '../../components/Accordion/AccordionMasterCuan/AccordionMasterCuan';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SendVersiBuild } from '../../utils/clearCache';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './masterCuan.scss'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import Seo from '../../components/seo/seo';
import { FetchLimitData } from '../../utils/common';

const MasterCuan = () => {
  const [linkInstall, setlinkInstall] = useState('https://play.google.com/store/apps/details?id=store.numoney.landxapp');
  const [slideReward, setslideReward] = useState(0);
  const [updateReward, setupdateReward] = useState(0);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [loadProjects, setLoadProjects] = useState(true)
  const [dataListing, setDataListing] = useState([])
  const [preDataListing, setPreDataListing] = useState([])
  const [isSell, setIsSell] = useState([]);
  const [isSold, setIsSold] = useState([]);

  useEffect(() => {
    SendVersiBuild()
  }, [])

  useEffect(() => {
    getLimitCardProject()
  }, [])

  useEffect(() => {
    handleListing()
  }, [])

  useEffect(() => {
    setDataListing([...preDataListing])
  }, [preDataListing])

  const getLimitCardProject = () => {
    FetchLimitData('https://api.landx.id/', 5, 1).then(datas => {
      datas.data.currencies.map((data) => {
        if (data.landXProperty !== null) {
          // FIlter Project dengan menyamakan dengan kode symbolnya
          if (data.landXProperty.token.symbol === 'CAPT' || data.landXProperty.token.symbol === 'BBKB' || data.landXProperty.token.symbol === 'MANG') {
            if (data.landXProperty['launchProgress'] < 1) {
              setIsSell((prevData) => [...prevData, data])
            }
            if (data.landXProperty['launchProgress'] === 1) {
              setIsSold((prevData) => [...prevData, data])
            }
          }
        }
      })
      setLoadProjects(false)
    })
  }

  const handleListing = () => {
    fetch('https://web-api.landx.id/mobile/upcoming_project')
      .then(r => r.json())
      .then(data => {
        setPreDataListing((prevData) => [...prevData, data.upcoming])
      })
  }

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

  const rewardMasterCuan1 = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () =>
      setupdateReward(updateReward + 1),
    beforeChange: (current, next) => setslideReward(next)
  };

  const rewardMasterCuan = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () =>
      setupdateReward(updateReward + 1),
    beforeChange: (current, next) => setslideReward(next)
  };

  const cardProjectMasterCuan = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    deviceType()
  }, []);

  const labelReward = [
    {
      value: 0,
      label: '20 Lot',
    },
    {
      value: 1,
      label: '50 Lot',
    },
    {
      value: 2,
      label: '100 Lot',
    },
    {
      value: 3,
      label: '250 Lot'
    },
  ];


  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return setlinkInstall('https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id')
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return setlinkInstall('https://play.google.com/store/apps/details?id=store.numoney.landxapp')
    }
    return setlinkInstall('https://play.google.com/store/apps/details?id=store.numoney.landxapp')
  };

  return (
    <>
      <Seo title="Home" />

      <div className='container-master-cuan'>
        <Container maxWidth='xs' className="banner-container">
          <Grid container>
            <Grid item xs={12} className='text-center'>
              <img src="/master-cuan/logo-master-cuan-1.webp" alt="Landx" />
            </Grid>
            <Grid item xs={12} className='text-center'>
              <Typography align='center' className='text-banner'>
                Makannya Bikin Kenyang, Dividennya Bikin Mapan!
              </Typography>
              <Typography align='center' className='text-banner'>
                Wujudkan impianmu jadi BOS Restoran di tahun 2022!
              </Typography>
              <Typography align='center' className='text-banner-desc'>
                Mau punya bisnis resto kayak apa?
              </Typography>
              <Typography align='center' paragraph={true} className='text-banner-desc'>
                Mau yang punya puluhan cabang, yang ordernya ribuan, atau cari yang partnernya berpengalaman?
              </Typography>
              <Typography align='center' paragraph={true} className='text-banner-desc'>
                Semuanya ada di bulan ini!
              </Typography>
              <Button variant="text" className='btn-join-white' onClick={() => navigate('https://web-app-staging.landx.id/login/')}>Gabung Sekarang</Button>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth='xs' style={{ backgroundColor: '#fff' }}>
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
                <Slider {...rewardMasterCuan1} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                  <div className="slider-icon-container">
                    <div className="icon-container">
                      <img src="/master-cuan/20-lot.png" alt="20 lot" />
                    </div>
                    <div className="lot-container">
                      20 Lot
                    </div>
                  </div>
                  <div className="slider-icon-container">
                    <div className="icon-container">
                      <img src="/master-cuan/50-lot.png" alt="50 lot" />
                    </div>
                    <div className="lot-container">
                      50 Lot
                    </div>
                  </div>
                  <div className="slider-icon-container">
                    <div className="icon-container">
                      <img src="/master-cuan/100-lot.png" alt="100 lot" />
                    </div>
                    <div className="lot-container">
                      100 Lot
                    </div>
                  </div>
                  <div className="slider-icon-container">
                    <div className="icon-container">
                      <img src="/master-cuan/250-lot.png" alt="250 lot" />
                    </div>
                    <div className="lot-container">
                      250 Lot
                    </div>
                  </div>
                </Slider>
              </Grid>
              <Grid item xs={12}>
                <MuiSlider
                  defaultValue={slideReward}
                  value={slideReward}
                  valueLabelDisplay="off"
                  marks={labelReward}
                  min={0}
                  max={3} />
              </Grid>
              <Grid item xs={12}>
                <Slider {...rewardMasterCuan} asNavFor={nav1} ref={(slider2) => setNav2(slider2)} className="mb-32">
                  <CardMasterCuan title='Reward - 20 Lot' description='Dapatkan Mini Finance Bootcamp with Experts' />
                  <CardMasterCuan title='Reward - 50 Lot' description='Dapatkan EXCLUSIVE Mini Finance Bootcamp with Experts' />
                  <CardMasterCuan title='Reward - 100 Lot' description='Dapatkan Offline Finance Bootcamp with Experts, Happy Hour Meetup & Discussion with Speakers' />
                  <CardMasterCuan title='Reward - 250 Lot' description='Dapatkan Offline Bootcamp Finance with Experts & Business tour' />
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
                  {
                    isSell && isSell.map(data => {
                      return <CardProjectMasterCuan data={data.landXProperty} type='isProject' />
                    })
                  }
                  {
                    isSold && isSold.map(data => {
                      return <CardProjectMasterCuan data={data.landXProperty} type='isProject' />
                    })
                  }
                  {dataListing && dataListing.map((data, i) => {
                    if (data !== undefined && data !== null && i >= 0) {
                      return data.map(d => {
                        return Object.entries(d).map(data => {
                          let listingAt = new Date(data[1].listing_at).getTime()
                          let now = Date.now()
                          if (listingAt > now) {
                            return <CardProjectMasterCuan dataListing={data} type='isListing' />
                          }
                        })
                      })
                    }
                  })}
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
                      <Typography component='span' className="text-rule">
                        Tanggal promo: 27 Januari 2022 - 13 Februari 2022
                      </Typography>
                    </li>
                    <li>
                      <Typography component='span' className="text-rule">
                        Berlaku untuk semua pengguna LandX
                      </Typography>
                    </li>
                    <li>
                      <Typography component='span' className="text-rule">
                        Kamu bisa lakukan transaksi melalui aplikasi LandX
                      </Typography>
                    </li>
                    <li>
                      <Typography component='span' className="text-rule">
                        Kamu bisa melakukan transaksi lebih dari satu project
                      </Typography>
                    </li>
                    <li>
                      <Typography component='span' className="text-rule">
                        Kamu akan mendapatkan benefit dari campaign ini setelah tanggal 13 Februari 2022
                      </Typography>
                    </li>
                    <li>
                      <Typography component='span' className="text-rule">
                        Kamu bisa melakukan penambahan lot selama campaign ini berlangsung
                      </Typography>
                    </li>
                    <li>
                      <Typography component='span' className="text-rule">
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
                <AccordionMasterCuan title='Bagaimana cara menjadi juragan bisnis F&B di Master Cuan?' content='Kakak bisa ikutan dengan mendaftarkan diri Kakak pada form yang sudah kamu kirimkan' />
                <AccordionMasterCuan title='Saya sudah mengisi form, selanjutnya bagaimana?' content='Setelah mengisi form Kakak akan menerima email otomatis yang mengarahkan Kakak untuk melakukan pembelian di aplikasi LandX, lakukan pembelian project FnB yang sedang listing di LandX sesuai dengan total lot yang ingin Kakak beli.' />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' className='btn-join-green' onClick={() => navigate('https://web-app-staging.landx.id/login/')}>Gabung Sekarang</Button>
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
              <a href={linkInstall} style={{ textDecoration: 'none' }}>
                <Button variant='contained' className='btn-install'>Install Sekarang</Button>
              </a>
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
                <a href="https://wa.link/wwcvhi" className='text-btn-customer'>
                  <Button variant='outlined' className='btn-customer'><WhatsAppIcon sx={{ color: '00b242', marginRight: '5px', textTransform: 'none' }} /> WA Customer Service 1</Button>
                </a>
                <a href="https://wa.link/fho9yk" className='text-btn-customer'>
                  <Button variant='outlined' className='btn-customer'><WhatsAppIcon sx={{ color: '00b242', marginRight: '5px', textTransform: 'none' }} /> WA Customer Service 2</Button>
                </a>
              </Grid>
            </Grid>
          </div>
        </Container>

        <footer>
          <Container maxWidth='xs' className="footer-master-cuan">
            <Grid container>
              <Grid item xs={12}>
                <AnchorLink to='/#why-landx' className="text-anchor">
                  <Typography className="text-title" style={{ textDecoration: 'none' }}>
                    Mengapa LandX
                  </Typography>
                </AnchorLink>
              </Grid>
              <Grid item xs={12}>
                <AnchorLink to='/#ongoing-projects' className="text-anchor">
                  <Typography className="text-title" style={{ textDecoration: 'none' }}>
                    Proyek
                  </Typography>
                </AnchorLink>
              </Grid>
              <Grid item xs={12}>
                <AnchorLink to='/#how-it-works' className="text-anchor">
                  <Typography className="text-title" style={{ textDecoration: 'none' }}>
                    Cara Kerja
                  </Typography>
                </AnchorLink>
              </Grid>
              <Grid item xs={12}>
                <Link to='/contact' className="text-dec-none">
                  <Typography className="text-title">
                    Kontak
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <a href="https://landx.id/blog/" className="text-dec-none">
                  <Typography className="text-title">
                    Blog
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12}>
                <Typography className="text-title">
                  Perusahaan
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <a href='https://landx.id/blog/jobs-at-landx/' className="text-dec-none">
                  <Typography className="text-subtitle">
                    Karir
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12}>
                <Link to='/syarat-dan-ketentuan' className="text-dec-none">
                  <Typography className="text-subtitle">
                    Syarat & Ketentuan
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/privacy-policy' className="text-dec-none">
                  <Typography className="text-subtitle">
                    Kebijakan Privasi
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/service-level-agreement' className="text-dec-none">
                  <Typography className="text-subtitle">
                    Service Level Agreement
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/kebijakan-isms' className="text-dec-none">
                  <Typography className="text-subtitle">
                    Kebijakan ISMS
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/mitigasi-risiko' className="text-dec-none">
                  <Typography className="text-subtitle">
                    Mitigasi Resiko
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <a href="https://landx.id/blog/faq-landx/" className="text-dec-none">
                  <Typography className="text-subtitle">
                    FAQ
                  </Typography>
                </a>
              </Grid>
            </Grid>

            <div className="icon-container">
              <Grid container>
                <Grid item xs={12}>
                  <a href="https://www.facebook.com/landx.id">
                    <FacebookIcon className="icon-sosmed" />
                  </a>
                  <a href="https://id.linkedin.com/company/landx-id?trk=public_profile_topcard_current_company">
                    <LinkedInIcon className="icon-sosmed" />
                  </a>
                  <a href="https://www.instagram.com/landx.id/">
                    <InstagramIcon className="icon-sosmed" />
                  </a>
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
          </Container>
        </footer>

        <div className="bottom-nav-container">
          <div className="icon-container" onClick={() => navigate(`https://landx.id/master-cuan/`)}>
            <img src="/master-cuan/home-active.png" alt="Home" />
            <div className="text-icon active">
              Home
            </div>
          </div>
          <div className="icon-container" onClick={() => navigate(`https://web-app-staging.landx.id/master-cuan/cara-kerja`)}>
            <img src="/master-cuan/insight.png" alt="Cara Kerja" />
            <div className="text-icon">
              Cara Kerja
            </div>
          </div>
          <div className="icon-container" onClick={() => navigate(`https://web-app-staging.landx.id/login/`)}>
            <img src="/master-cuan/user.png" alt="Login" />
            <div className="text-icon">
              Login
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default MasterCuan

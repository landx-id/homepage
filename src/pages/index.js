import React from "react"
import { Link } from "gatsby"
import { Container, Grid, Typography, Button } from '@mui/material';
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { FetchLimitData } from "../utils/common";
import CardArticel from "../components/Card/CardArticel/CardArticel"
import CardProject from "../components/Card/CardProject/CardProject";
import CardTestimony from "../components/Card/CardTestimony/CardTestimony";
import CardWhyLandx from "../components/Card/CardWhyLandx/CardWhyLandx";
import CardTitleSection from "../components/Card/CardTitleSection/CardTitleSection";
import CardLandxWork from "../components/Card/CardLandxWork/CardLandxWork";
import CardValueInvestor from "../components/Card/CardValueInvestor/CardValueInvestor";

import '../assets/styling/cssReset.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

const IndexPage = () => {
  const [widthWindows, setWidthWindows] = React.useState('')
  const [dataProject, setDataProject] = React.useState(null)

  React.useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  React.useEffect(() => {
    getLimitCardProject()
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

  const sliderValueInvestor = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderOneCard = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  const getLimitCardProject = () => {
    FetchLimitData('https://api.landx.id/', 5, 1).then(data => {
      setDataProject(data.data.currencies)
    })
  }

  return (
    <Layout>
      <Seo title="Home" />

      <div className="homepage">
        <Container>
          <Grid container className='container-banner'>
            <Grid item md={6}>
              <Grid container>
                <Grid item sm={11} xl={12}>
                  <Typography variant="h1" className="heroTitle">
                    Investasi dan Miliki Bisnis Menguntungkan Mulai dari Rp 1.000.000
                  </Typography>
                  <p className='heroDescription'>
                    Investasi secara patungan online ke perusahaan-perusahaan UMKM di Indonesia pilihan kamu melalui platform securities crowdfunding LandX.
                  </p>
                </Grid>
                <Grid item className='container-logo-ojk' sm={11} xl={12}>
                  <img src="./images/logo_OJK.webp" alt="logo OJK" className="logo-ojk" />
                </Grid>
                <Grid item className='container-cta' sm={11} xl={12}>
                  <Link href='https://play.google.com/store/apps/details?id=store.numoney.landxapp' target='_blank'>
                    <img src="./images/PlayStore.webp" alt="PlayStore" className='playstoreLogo cta-image' />
                  </Link>
                  <Link href='https://apps.apple.com/id/app/landx/id1453823676' target='_blank'>
                    <img src="./images/AppStore.webp" alt="AppStore" className='cta-image appstoreLogo' />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} className='container-yt'>
              <iframe className='banner-yt' src="https://www.youtube.com/embed/Y03A0VgY_ug" title="Landx" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading='lazy'></iframe>
            </Grid>
          </Grid>
        </Container>
      </div>


      <section>
        <Container className="container-value-investor">
          {widthWindows < 750 ?
            <Slider {...sliderValueInvestor} className="slider-ValueInvestor">
              <CardValueInvestor number='71.811' content='Investor Terdaftar' />
              <CardValueInvestor number='26' content='Perusahaan Penerbit' />
              <CardValueInvestor number='153,18 Miliar' content='Investasi Tersalurkan' />
              <CardValueInvestor number='2,48 Miliar' content='Dividen Dibagikan' />
            </Slider>
            :
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', margin: '40px 0' }}>
              <CardValueInvestor number='71.811' content='Investor Terdaftar' />
              <CardValueInvestor number='26' content='Perusahaan Penerbit' />
              <CardValueInvestor number='153,18 Miliar' content='Investasi Tersalurkan' />
              <CardValueInvestor number='2,48 Miliar' content='Dividen Dibagikan' />
            </Grid>
          }
        </Container>
      </section>

      <section className='section-why-landx'>
        <Container id="why-landx">
          <CardTitleSection title='Mengapa Memilih LandX' />

          {widthWindows < 1200 ?
            <Slider {...sliderOneCard}>
              <CardWhyLandx logo='./images/star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
              <CardWhyLandx logo='./images/time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
              <CardWhyLandx logo='./images/jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
            </Slider>
            :
            <Grid container spacing={4}>
              <CardWhyLandx logo='./images/star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
              <CardWhyLandx logo='./images/time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
              <CardWhyLandx logo='./images/jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
            </Grid>
          }
        </Container>
      </section>

      <section>
        <Container id='ongoing-projects'>
          <CardTitleSection title='Pendanaan yang Sedang Berlangsung' />

          {dataProject &&
            <Slider {...cardProject} className='container-card-projects'>
              {dataProject && dataProject.map((dataProject) => {
                return <CardProject cardProject={cardProject} data={dataProject.landXProperty} key={dataProject.landXProperty.id} />
              })}
            </Slider>
          }
        </Container>
      </section>

      <section>
        <Container id='how-it-works'>
          <CardTitleSection title='Cara Kerja LandX' />

          {widthWindows < 1200 ?
            <Slider {...sliderOneCard}>
              <CardLandxWork img='../images/icon_pilih_bisnis.webp' title="Pilih Proyek Pendanaan" content="Pilih bisnis yang sesuai dengan profil investasimu" width="63px" />
              <CardLandxWork img='../images/icon_menjadi_investor.webp' title='Beli Saham' content='Beli saham, obligasi, atau sukuk dari proyek pendanaan tersebut' width='94px' />
              <CardLandxWork img='../images/icon_terima_imbal_hasil.webp' title="Terima Imbal Hasil" content='Terima keuntungan sesuai kinerja perusahaan yang kamu miliki, atau bunga sesuai kesepakatan awal' width='96px' />
              <CardLandxWork img='../images/icon_capital_gain.webp' title="Keuntungan Capital Gain" content='Dapatkan keuntungan dari kenaikan harga saham ketika dijual' />
            </Slider>
            :
            <Grid container spacing={4}>
              <CardLandxWork img='../images/icon_pilih_bisnis.webp' title="Pilih Proyek Pendanaan" content="Pilih bisnis yang sesuai dengan profil investasimu" width="63px" />
              <CardLandxWork img='../images/icon_menjadi_investor.webp' title='Beli Saham' content='Beli saham, obligasi, atau sukuk dari proyek pendanaan tersebut' width='94px' />
              <CardLandxWork img='../images/icon_terima_imbal_hasil.webp' title="Terima Imbal Hasil" content='Terima keuntungan sesuai kinerja perusahaan yang kamu miliki, atau bunga sesuai kesepakatan awal' width='96px' />
              <CardLandxWork img='../images/icon_capital_gain.webp' title="Keuntungan Capital Gain" content='Dapatkan keuntungan dari kenaikan harga saham ketika dijual' />
            </Grid>
          }
        </Container>
      </section>

      <section style={{ padding: '30px', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Typography variant="h2" color="secondary" className='title-section'>
                Artikel Pilihan
              </Typography>
              <hr className='divider' />
            </Grid>
          </Grid>

          <CardArticel />

          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Link href="https://landx.id/blog/" style={{ textDecoration: `none` }}>
                <Button style={{ fontWeight: 600, marginTop: `3rem`, marginBottom: `3rem` }}>
                  KUNJUNGI BLOG LANDX
                </Button>
              </Link>
            </Grid>
          </Grid>

        </Container>
      </section>

      <hr />
      <section style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <CardTestimony />
        </Container>
      </section>
    </Layout >
  )
}

export default IndexPage

import React, { useEffect } from "react"
import '../assets/styling/cssReset.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"
import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Carousel from "../components/carousel/carousel"
import './index.scss';
import CardProject from "../components/Card/CardProject/CardProject";
import XMLParser from "react-xml-parser";

export const CardWhyLandx = ({ title, content, logo }) => {
  return (
    <Grid item md={4}>
      <Card className='card-why-landx'>
        <div>
          <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt={title} className="card-icon" />
          </div>
          <CardContent>
            <h5 className="title-icon">
              {title}
            </h5>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  )
}

export const TitleSection = ({ title }) => {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item>
        <h2 className='title-section'>
          {title}
        </h2>
        <hr className='divider' />
      </Grid>
    </Grid>
  )
}

export const CardLandxWork = ({ img, title, content, height = '72px', width = '72px' }) => {
  return (
    <Grid item md={3}>
      <Card sx={{ maxWidth: 345 }} className='card-landx-work'>
        <div className="container-img">
          <img src={img} alt={title} className='card-img' height={height} width={width} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {title}
          </Typography>
          <Typography variant="body2" className='card-content'>
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export const ValueInvestor = ({ number, content }) => {
  return (
    <Grid item className="container-value-investor">
      <Typography variant='h4' className="num-value" sx={{ marginBottom: '5px' }}>{number}</Typography>
      <p>{content}</p>
    </Grid>
  )
}

const IndexPage = () => {

  // useEffect(() => {
  //   fetch("https://landx.id/blog/rss/")
  //       .then(res => res.text())
  //       .then(data => {
  //           var xml = new XMLParser().parseFromString(data); 
  //           console.log(xml)
  //       })
  //       .catch(err => console.log(err));
  // }, [])

  useEffect(() => {
    // get data from GitHub api
    fetch(`https://landx.id/blog/rss/`, {
      mode: "no-cors",
      // headers: {
      //   'Accept': 'application/xml',
      //   // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      //   'Access-Control-Allow-Origin': '*',
      // }
    })
      .then(response => response.text())
      .then(data => {
        // const parser = new DOMParser();
        // const doc = parser.parseFromString(data, 'text/html');  
        // var xml = new XMLParser().parseFromString(data); 
        console.log(data)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Layout>
      <Seo title="Home" />

      <div className="homepage">
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Grid container>
                <Grid item>
                  <Typography variant="h1" className="heroTitle">
                    Investasi dan Miliki Bisnis Menguntungkan Mulai dari Rp 1.000.000
                  </Typography>
                  <p className='heroDescription'>
                    Investasi secara patungan online ke perusahaan-perusahaan UMKM di Indonesia pilihan kamu melalui platform securities crowdfunding LandX.
                  </p>
                </Grid>
                <Grid item>
                  <img src="./images/logo_OJK.webp" alt="logo OJK" />
                </Grid>
                <Grid item>
                  <Link to='https://play.google.com/store/apps/details?id=store.numoney.landxapp' target='_blank'>
                    <img src="./images/PlayStore.webp" alt="PlayStore" className='playstoreLogo' />
                  </Link>
                  <Link to='https://apps.apple.com/id/app/landx/id1453823676' target='_blank'>
                    <img src="./images/AppStore.webp" alt="AppStore" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Y03A0VgY_ug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Grid>
          </Grid>
        </Container>
      </div>


      <section>
        <Container>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', margin: '40px 0' }}>
            <ValueInvestor number='71.811' content='Investor Terdaftar' />
            <ValueInvestor number='26' content='Perusahaan Penerbit' />
            <ValueInvestor number='153,18 Miliar' content='Investasi Tersalurkan' />
            <ValueInvestor number='2,48 Miliar' content='Dividen Dibagikan' />
          </Grid>
        </Container>
      </section>

      <section style={{ backgroundColor: '#f8f8f8', padding: '30px', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        <Container id="why-landx">
          <TitleSection title='Mengapa Memilih LandX' />

          <Grid container spacing={4}>
            <CardWhyLandx logo='./images/star.webp' title='Bisnis-bisnis Terbaik' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
            <CardWhyLandx logo='./images/time.webp' title='Investasi Bagi Hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
            <CardWhyLandx logo='./images/jewely.webp' title='Investasi Aman untuk Pemula' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
          </Grid>
        </Container>
      </section>

      <section style={{ padding: '30px' }}>
        <Container id='ongoing-projects'>
          <TitleSection title='Pendanaan yang Sedang Berlangsung' />

          <CardProject settings={settings} />
        </Container>
      </section>

      <section>
        <Container id='how-it-works'>
          <TitleSection title='Cara Kerja LandX' />

          <Grid container spacing={4}>
            <CardLandxWork img='../images/icon_pilih_bisnis.webp' title="Pilih Proyek Pendanaan" content="Pilih bisnis yang sesuai dengan profil investasimu" width="63px" />
            <CardLandxWork img='../images/icon_menjadi_investor.webp' title='Beli Saham' content='Beli saham, obligasi, atau sukuk dari proyek pendanaan tersebut' width='94px' />
            <CardLandxWork img='../images/icon_terima_imbal_hasil.webp' title="Terima Imbal Hasil" content='Terima keuntungan sesuai kinerja perusahaan yang kamu miliki, atau bunga sesuai kesepakatan awal' width='96px' />
            <CardLandxWork img='../images/icon_capital_gain.webp' title="Keuntungan Capital Gain" content='Dapatkan keuntungan dari kenaikan harga saham ketika dijual' />
          </Grid>
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

          {/* TODO: Get data from API LandX */}
          <Carousel type="artikel"/>

          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Link href="https://landx.id/blog/" style={{ textDecoration:`none` }}>
                <Button style={{ fontWeight:600, marginTop:`3rem`, marginBottom:`3rem` }}>
                  KUNJUNGI BLOG LANDX
                </Button>
              </Link>
            </Grid>
          </Grid>

        </Container>
      </section>

      <hr/>
      <section style={{ padding: '30px', display: 'flex', alignItems: 'center' }}>
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          
          {/* TODO: Get data from API LandX */}
          <Carousel/>

        </Container>
      </section>
  </Layout >
  )
}

export default IndexPage

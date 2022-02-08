import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Grid, Typography, Button, CircularProgress } from '@mui/material';
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { FetchLimitData, TwoDecimalNumber, NumberWithCommas, formatDate30DaysMore } from "../utils/common";
import CardArticel from "../components/Card/CardArticel/CardArticel"
import CardProject from "../components/Card/CardProject/CardProject";
import CardTestimony from "../components/Card/CardTestimony/CardTestimony";
import CardWhyLandx from "../components/Card/CardWhyLandx/CardWhyLandx";
import CardTitleSection from "../components/Card/CardTitleSection/CardTitleSection";
import CardLandxWork from "../components/Card/CardLandxWork/CardLandxWork";
import CardValueInvestor from "../components/Card/CardValueInvestor/CardValueInvestor";
import CardListing from "../components/Card/CardListing/CardListing";

// import CTAWhatsapp from '../components/CTAWhatsapp/CTAWhatsapp';

import '../assets/styling/cssReset.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

const IndexPage = () => {
  const [widthWindows, setWidthWindows] = useState('')
  const [dataProject, setDataProject] = useState([])
  const [dataListing, setDataListing] = useState([])
  const [preDataListing, setPreDataListing] = useState([])
  const [dataInvestors, setDataInvestors] = useState(null)
  const [loadProjects, setLoadProjects] = useState(true)
  const [loadInvestor, setLoadInvestor] = useState(true)
  const [isSell, setIsSell] = useState([]);
  const [isSold, setIsSold] = useState([]);

  useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  useEffect(() => {
    getLimitCardProject()
  }, [])

  useEffect(() => {
    setDataProject([...isSell, ...isSold])
  }, [isSold])

  useEffect(() => {
    handleListing()
    handleInvestors()
  }, [])

  useEffect(() => {
    setDataListing([...preDataListing])
  }, [preDataListing])

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
    infinite: true,
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
    FetchLimitData('https://api.landx.id/', 10, 1).then(datas => {
      datas.data.currencies.map((data) => {
        if (data.landXProperty !== null) {
          if (data.landXProperty['launchProgress'] < 1) {
            setIsSell((prevData) => [...prevData, data])
          }
          if (data.landXProperty['launchProgress'] === 1) {
            setIsSold((prevData) => [...prevData, data])
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

  const handleInvestors = () => {
    fetch('https://web-api.landx.id/mobile/landing_data')
      .then(r => r.json())
      .then(data => {
        setDataInvestors({ dividend_payout: data.dividend_payout, property_count: data.property_count, raised_fund: data.raised_fund, registered_users: data.registered_users })
        setLoadInvestor(false)
      })
  }


  return (
    <>
      {/* <CTAWhatsapp /> */}
      <Layout>
        <Seo title="Investasi Online Aman Berizin OJK Lewat Equity Crowdfunding di LandX" description="LandX merupakan platform equity crowdfunding yang telah berizin dan diawasi OJK yang aman untuk investasi online jangka panjang kamu|Investasi online OJK" />

        <div className="homepage">
          <Container>
            <Grid container className='container-banner'>
              <Grid item xs={12} md={6}>
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
                    <img src="/images/Logo_ojk_02.webp" alt="LandX telah resmi mengantongi izin OJK sesuai POJK 37 sebagai platform equity crowdfunding yang menyalurkan dana investor kepada bisnis-bisnis potensial" title="LandX adalah platfom investasi online OJK yang membantu kamu berinvestasi ke dalam berbagai bisnis potensial dengan keuntungan jangka panjang menjanjikan" className="logo-ojk" style={{ height: `67px`, width: `287px` }} />
                  </Grid>
                  <Grid item className='container-cta' sm={11} xl={12}>
                    <Link href='https://play.google.com/store/apps/details?id=store.numoney.landxapp' target='_blank' rel='noreferrer noopener'>
                      <img src="/images/logo_playstore.webp" alt="PlayStore" className='playstoreLogo cta-image' style={{ height: `60px`, width: `203px` }} />
                    </Link>
                    <Link href='https://apps.apple.com/id/app/landx/id1453823676' target='_blank' rel='noreferrer noopener'>
                      <img src="/images/logo_appstore.webp" alt="AppStore" className='cta-image appstoreLogo' style={{ height: `60px`, width: `180px` }} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className='container-yt'>
                <video className="video-frame" controls>
                  <source src="https://landx-asset.s3.us-east-2.amazonaws.com/homepage-video.mp4" type="video/mp4" />
                </video>
              </Grid>
            </Grid>
          </Container>
        </div>

        <section className="container-value-investor">
          <Container>
            {loadInvestor ?
              <div className='container-load'><CircularProgress color="success" /></div>
              :
              <>
                {dataInvestors && widthWindows < 750 ?
                  <>
                    <Slider {...sliderValueInvestor} className="slider-ValueInvestor">
                      <CardValueInvestor number={NumberWithCommas(dataInvestors.registered_users)} content='Investor Terdaftar' />
                      <CardValueInvestor number={NumberWithCommas(dataInvestors.property_count)} content='Perusahaan Penerbit' />
                      <CardValueInvestor number={`${TwoDecimalNumber(dataInvestors.raised_fund)} Miliar`} content='Investasi Tersalurkan' />
                      <CardValueInvestor number={`${TwoDecimalNumber(dataInvestors.dividend_payout)} Miliar`} content='Dividen Dibagikan' />
                    </Slider>
                  </>
                  :
                  <Grid container sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', margin: '40px 0' }}>
                    {dataInvestors !== null &&
                      <>
                        <CardValueInvestor number={NumberWithCommas(dataInvestors.registered_users)} content='Investor Terdaftar' />
                        <CardValueInvestor number={NumberWithCommas(dataInvestors.property_count)} content='Perusahaan Penerbit' />
                        <CardValueInvestor number={`${TwoDecimalNumber(dataInvestors.raised_fund)} Miliar`} content='Investasi Tersalurkan' />
                        <CardValueInvestor number={`${TwoDecimalNumber(dataInvestors.dividend_payout)} Miliar`} content='Dividen Dibagikan' />
                      </>
                    }
                  </Grid>
                }
              </>}
          </Container>
        </section>

        <section className='section-why-landx'>
          <Container id="why-landx">
            <CardTitleSection title='Mengapa Memilih LandX' />

            {widthWindows < 1200 ?
              <Slider {...sliderOneCard}>
                <CardWhyLandx logo='./images/icon_star.webp' title='Bisnis-bisnis Terbaik' alt='Investasi online kamu kini semakin menguntungkan dengan berbagai pilihan  bisnis terbaik' titleImg='LandX akan membantu kamu menemukan bisnis-bisnis terbaik untuk investasi online jangka panjang kamu' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
                <CardWhyLandx logo='./images/icon_time.webp' title='Investasi Bagi Hasil' alt='Equity crowdfunding atau urun dana memberikan kamu kesempatan investasi dengan sistem bagi hasil' titleImg='Equity crowdfunding bisa jadi pilihan untuk kamu yang ingin mulai investasi online dengan sistem bagi hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
                <CardWhyLandx logo='./images/icon_jewely.webp' title='Investasi Aman untuk Pemula' alt='Investasi lewat securities crowdfunding merupakan salah satu instrumen yang aman untuk pemula' titleImg='Securities crowdfunding merupakan cara investasi yang aman untuk pemula, urun dana membuat anda lebih mudah berinvestasi' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
              </Slider>
              :
              <Grid container spacing={4}>
                <CardWhyLandx logo='./images/icon_star.webp' title='Bisnis-bisnis Terbaik' alt='Investasi online kamu kini semakin menguntungkan dengan berbagai pilihan  bisnis terbaik' titleImg='LandX akan membantu kamu menemukan bisnis-bisnis terbaik untuk investasi online jangka panjang kamu' content='Pengguna LandX mendapatkan akses ke bisnis-bisnis yang teruji dan sudah diseleksi secara ketat' />
                <CardWhyLandx logo='./images/icon_time.webp' title='Investasi Bagi Hasil' alt='Equity crowdfunding atau urun dana memberikan kamu kesempatan investasi dengan sistem bagi hasil' titleImg='Equity crowdfunding bisa jadi pilihan untuk kamu yang ingin mulai investasi online dengan sistem bagi hasil' content='Laporan keuangan tepat waktu dan pembagian hasil investasi transaparan' />
                <CardWhyLandx logo='./images/icon_jewely.webp' title='Investasi Aman untuk Pemula' alt='Investasi lewat securities crowdfunding merupakan salah satu instrumen yang aman untuk pemula' titleImg='Securities crowdfunding merupakan cara investasi yang aman untuk pemula, urun dana membuat anda lebih mudah berinvestasi' content='Sebagian besar bisnis yang terdaftar memiliki aset dasar properti yang bernilai tinggi, sehingga dapat melindungi investor apabila terjadi risiko kegagalan bisnis.' />
              </Grid>
            }
          </Container>
        </section>

        <section>
          <Container id='ongoing-projects' className='container-ongoing-projects pt-40'>
            <CardTitleSection title='Pendanaan yang Sedang Berlangsung' />
            {loadProjects
              ? <div className='container-load'><CircularProgress color="success" /></div>
              : <>
                {dataProject &&
                  <Slider {...cardProject} className='container-card-projects'>

                    {dataListing && dataListing.map((data, i) => {
                      if (data !== undefined && data !== null && i >= 0) {
                        return data.map(d => {
                          return Object.entries(d).map(data => {
                            // let listingAt = new Date(data[1].listing_at).getTime()
                            let now = Date.now()
                            let listingAt = new Date(formatDate30DaysMore(data)).getTime()
                            if (listingAt > now) {
                              return <CardListing code={data[0]} data={data[1]} timeUp={listingAt - Date.now()} />
                            }
                          })
                        })
                      }
                    })}

                    {dataProject && dataProject.map((dataProject) => {
                      if (dataProject.landXProperty !== null) {
                        return <CardProject cardProject={cardProject} data={dataProject?.landXProperty} key={dataProject?.landXProperty?.id} />
                      }
                    })}
                  </Slider>
                }
              </>
            }

            <Grid container>
              <Grid xs={12} item style={{ justifyContent: 'center', display: 'flex', margin: '20px 0' }}>
                <Link to='/project' style={{ textDecoration: 'none' }}>
                  <Button color='success'>Semua Proyek</Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section>
          <Container id='how-it-works' className="container-how-it-works pt-40">
            <CardTitleSection title='Cara Kerja LandX' />

            {widthWindows < 1200 ?
              <Slider {...sliderOneCard}>
                <CardLandxWork img='../images/icon_pilih_bisnis.webp' title="Pilih Bisnis" alt="Pilih bisnis terbaik untuk investasi jangka panjang hanya di LandX" titleImg="Temukan bisnis terbaik untuk investasi menguntungkang jangka panjang kamu di LandX" content="Pilih bisnis yang sesuai dengan profil investasimu" width="63px" />
                <CardLandxWork img='../images/icon_menjadi_investor.webp' title='Menjadi Investor' alt='Menjadi investor dan berinvestasi ke dalam bisnis dengan sistem urun dana lewat LandX' titleImg='Menjadi investor properti dan berbagai bisnis menguntungkan dengan sistem urun dana' content='Beli saham, obligasi, atau sukuk dari proyek pendanaan tersebut' width='94px' />
                <CardLandxWork img='../images/icon_terima_imbal_hasil.webp' title="Terima Imbal Hasil" alt='Imbal hasil atau return dalam investasi equity crowdfunding' titleImg='Investasi lewat equity crowdfunding bisa memberikan kamu imbal hasil berupa dividen dan capital gain ' content='Terima keuntungan sesuai kinerja perusahaan yang kamu miliki, atau bunga sesuai kesepakatan awal' width='96px' />
                <CardLandxWork img='../images/icon_capital_gain.webp' alt='Potensi return berupa capital gain saat berinvestasi lewat securities crowdfunding' titleImg='Mendapatkan keuntungan berupa capital gain saat berinvestasi ' title="Keuntungan Capital Gain" content='Dapatkan keuntungan dari kenaikan harga saham ketika dijual' />
              </Slider>
              :
              <Grid container spacing={4}>
                <CardLandxWork img='../images/icon_pilih_bisnis.webp' title="Pilih Bisnis" alt="Pilih bisnis terbaik untuk investasi jangka panjang hanya di LandX" titleImg="Temukan bisnis terbaik untuk investasi menguntungkang jangka panjang kamu di LandX" content="Pilih bisnis yang sesuai dengan profil investasimu" width="63px" />
                <CardLandxWork img='../images/icon_menjadi_investor.webp' title='Menjadi Investor' alt='Menjadi investor dan berinvestasi ke dalam bisnis dengan sistem urun dana lewat LandX' titleImg='Menjadi investor properti dan berbagai bisnis menguntungkan dengan sistem urun dana' content='Beli saham, obligasi, atau sukuk dari proyek pendanaan tersebut' width='94px' />
                <CardLandxWork img='../images/icon_terima_imbal_hasil.webp' title="Terima Imbal Hasil" alt='Imbal hasil atau return dalam investasi equity crowdfunding' titleImg='Investasi lewat equity crowdfunding bisa memberikan kamu imbal hasil berupa dividen dan capital gain ' content='Terima keuntungan sesuai kinerja perusahaan yang kamu miliki, atau bunga sesuai kesepakatan awal' width='96px' />
                <CardLandxWork img='../images/icon_capital_gain.webp' alt='Potensi return berupa capital gain saat berinvestasi lewat securities crowdfunding' titleImg='Mendapatkan keuntungan berupa capital gain saat berinvestasi ' title="Keuntungan Capital Gain" content='Dapatkan keuntungan dari kenaikan harga saham ketika dijual' />
              </Grid>
            }
          </Container>
        </section>

        <section style={{ minHeight: '500px', display: 'flex', alignItems: 'center' }}>
          <Container style={{ paddingLeft: 0, paddingRight: 0 }} className="container-article pt-40">
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardTitleSection title=' Artikel Pilihan' />
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
    </>
  )
}

export default IndexPage

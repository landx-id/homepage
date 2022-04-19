import React, { useState, useEffect } from 'react'
import { Container, Button, Grid, Typography } from '@mui/material';
import { navigate } from "gatsby";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Seo from "../../components/seo/seo";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './listing.scss'

const ListingProjects = (props) => {
  const [dataListing, setDataListing] = useState('')
  const [caraousel1, setCaraousel1] = useState('')
  const [caraousel2, setCaraousel2] = useState('')
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [listingAt, setlistingAt] = useState('')
  const [imgListing, setImgListing] = useState(true)
  const [nameProject, setNameProject] = useState();
  const [metaDesc, setMetaDesc] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleListing()
    setImgListing(true)
  }, [])

  useEffect(() => {
    setlistingAt(new Date(dataListing.listing_at).getTime() - Date.now())
  }, [dataListing])

  const handleListing = () => {
    fetch('https://content.landx.id/api/upcomings')
      .then(r => r.json())
      .then(datas => {
        datas.data.map(data => {
          if (props.codeSaham.toUpperCase() === data.attributes.link.split('/')[2]) {
            setDataListing(data.attributes)
          }
        })
      })
  }

  useEffect(() => {
    handleTime()
  }, [listingAt])

  useEffect(() => {
    spiltNameProject()
  }, [dataListing?.name])

  const spiltNameProject = () => {
    setNameProject(dataListing?.name?.split('-'))
    setMetaDesc(dataListing?.description?.split('').slice(0, 156).join('').replace('<p>', '').replace('<b>', '').replace('<br>', ''))
  }


  const handleTime = () => {
    setDays(Math.floor((listingAt) / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((listingAt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  }

  (function () { var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()

  return (
    <>
      <Seo title={`Punya bisnis ${nameProject && nameProject[0]} modal 1 juta`} description={metaDesc} />
      <div className="container-listing">
        <Container>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="text" onClick={() => navigate(`/project`)} style={{ textDecoration: 'none', cursor: 'pointer', color: '#5e798d' }} startIcon={<ArrowBackIcon color="success" className="arrow-back" />}>
                <span style={{ marginTop: '2px' }}>Kembali ke Semua Proyek</span>
              </Button>
            </Grid>
          </Grid>

          {imgListing ?
            <div className='container-carousel-project'>
              <Slider
                asNavFor={caraousel2}
                ref={slider1 => setCaraousel1(slider1)}
                arrows={false}
              >
                {dataListing && dataListing.images.map((prevImage, i) => {
                  return (
                    <img src={prevImage} key={i} alt="projects" style={{ cursor: 'pointer' }} />
                  )
                })}
              </Slider>
              <Slider
                asNavFor={caraousel1}
                ref={slider2 => setCaraousel2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                arrows={false}
                focusOnSelect={true}
              >
                {dataListing && dataListing.images.map((prevImage, i) => {
                  return (
                    <img src={prevImage} alt="projects" key={i} style={{ cursor: 'pointer' }} />
                  )
                })}
              </Slider>
            </div>
            :
            <div style={{ textAlign: 'center' }}>
              <img src={dataListing.thumbnail} alt={`Miliki bisnis ${nameProject[0]} cuma dengan 1 jutaan aja`} title={`Cara jadi owner bisnis ${nameProject[0]} hanya dengan modal 1 juta. Temukan bisnis terbaik dari berbagai sektor mulai dari fnb, jasa, ritel dan berbagai bisnis lainnya hanya di landX`} style={{ display: 'inline-block' }} />
            </div>
          }

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h2" className='title-section'>Segera Listing</Typography>
            </Grid>
            <Grid item xs={12}>
              {dataListing && <div className='text-description' dangerouslySetInnerHTML={{ __html: dataListing.description }} />}
            </Grid>
            <Grid item xs={12}>
              <div className='container-reminder'>
                <Grid container spacing={2} className='container-grid-remind'>
                  {
                    dataListing.hide_schedule ?
                      <Grid item xs={12} className='container-btn-remind' sx={{ textAlign: 'center' }} > <Button variant="contained" data-paperform-id={dataListing?.paperform_title} data-popup-button="1" className='btn-remind'><NotificationsNoneIcon className='icon-remind' style={{ marginRight: '5px' }} /> <span style={{ marginTop: '2px' }}>REMIND ME</span></Button></Grid>
                      :
                      <>
                        <Grid item xs={12} md={7} className='container-text-remind' sx={{ textAlign: 'left' }}><img src="/images/ic_calendar.webp" alt="ic_calendar" /> <Typography component='p' className='text-time'>{listingAt && days} Hari : {listingAt && hours} Jam</Typography></Grid>
                        <Grid item xs={12} md={5} className='container-btn-remind'><Button variant="contained" data-paperform-id={dataListing?.paperform_title} data-popup-button="1" className='btn-remind'><NotificationsNoneIcon className='icon-remind' style={{ marginRight: '5px' }} /> <span style={{ marginTop: '2px' }}>REMIND ME</span></Button></Grid>
                      </>
                  }
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div >
    </>
  )
}

export default ListingProjects
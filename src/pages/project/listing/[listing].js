import React, { useState, useEffect } from 'react'
import { Container, Button, Grid, Typography, Box } from '@mui/material';
import { navigate } from "gatsby";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Layout from '../../../components/layout/layout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useLocation } from '@reach/router';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './listing.scss'

const ListingProjects = () => {
  const [dataListing, setDataListing] = useState('')
  const [dataProject, setDataProject] = useState('')
  const [caraousel1, setCaraousel1] = useState('')
  const [caraousel2, setCaraousel2] = useState('')
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  let listingAt = new Date(dataProject.listing_at).getTime() - Date.now()

  let location = useLocation()
  let codeProject = location.pathname.split('/')[3].toUpperCase()

  useEffect(() => {
    handleListing()
  }, [])

  const handleListing = () => {
    fetch('https://landx.id/lottie/upcoming.json')
      .then(r => r.json())
      .then(data => {
        setDataListing((prevData) => [...prevData, data.upcoming])
      })
  }

  useEffect(() => {
    getDataProject()
  }, [dataListing])

  const getDataProject = () => {
    if (dataListing) {
      dataListing.map(datas => {
        datas.map(data => {
          setDataProject(Object.values(data)[0])
        })
      })
    }
  }

  useEffect(() => {
    handleTime()
  }, [days, hours])

  const handleTime = () => {
    setDays(Math.floor((listingAt) / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((listingAt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  }
  return (
    <>
      <Layout>
        <div className="container-listing">
          <Container>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="text" onClick={() => navigate(`/project`)} style={{ textDecoration: 'none', cursor: 'pointer', color: '#5e798d' }} startIcon={<ArrowBackIcon color="success" className="arrow-back" />}>
                  <span style={{ marginTop: '2px' }}>Kembali ke Semua Proyek</span>
                </Button>
              </Grid>
            </Grid>

            {dataProject &&
              <div className='container-carousel-project'>
                <Slider
                  asNavFor={caraousel2}
                  ref={slider1 => setCaraousel1(slider1)}
                  arrows={false}
                >
                  {dataProject && dataProject.images.map((prevImage, i) => {
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
                  {dataProject && dataProject.images.map((prevImage, i) => {
                    return (
                      <img src={prevImage} alt="projects" key={i} style={{ cursor: 'pointer' }} />
                    )
                  })}
                </Slider>
              </div>
            }

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h2" className='title-section'>Segera Listing</Typography>
              </Grid>
              <Grid item xs={12}>
                {dataProject && <div className='text-description' dangerouslySetInnerHTML={{ __html: dataProject.description }} />}
              </Grid>
              <Grid item xs={12}>
                <div className='container-reminder'>
                  <Grid container spacing={2} className='container-grid-remind'>
                    <Grid item xs={12} md={7} className='container-text-remind'><img src="/images/ic_calendar.webp" alt="ic_calendar" /> <Typography component='p' className='text-time'>{dataProject && days} Hari : {dataProject && hours} Jam</Typography></Grid>
                    <Grid item xs={12} md={5} className='container-btn-remind'><Button variant="contained" className='btn-remind'><NotificationsNoneIcon className='icon-remind' style={{ marginRight: '5px' }} /> <span style={{ marginTop: '2px' }}>REMIND ME</span></Button></Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Layout >
    </>
  )
}

export default ListingProjects

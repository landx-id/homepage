import React, { useEffect, useState } from 'react'
import { Grid, LinearProgress, Typography } from '@mui/material'
import { CalculateRemainingDays } from '../../../utils/common'
import { toIDR } from '../../../utils/currency'
import { navigate } from 'gatsby';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardProjectMasterCuan.scss'

const CardProjectMasterCuan = ({ data, dataListing, type }) => {
  const [endDay, setEndDay] = useState('')
  const [nameProject, setNameProject] = useState();
  const [nameListing, setNameListing] = useState();

  useEffect(() => {
    handleEndDay()
  }, [data?.launchProgress])

  useEffect(() => {
    splitNameProject()
    splitNameProjectListing()
  }, [data?.token.name])

  const splitNameProject = () => {
    const nameProject = data?.token.name.split('-')
    setNameProject(nameProject)
  }

  const splitNameProjectListing = () => {
    if (type === 'isListing') {
      const nameProject = dataListing[1].name.split('-')
      setNameListing(nameProject)
    }
  }

  const handleEndDay = () => {
    if (data?.launchProgress === 1) {
      setEndDay(0)
    } else {
      setEndDay(CalculateRemainingDays(data?.settlementDate))
    }
  }

  const sliderOneImage = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };

  const showProject = () => {
    if (type === 'isProject') {
      return (
        <div className='card-project-master-container mx-auto'>
          <Grid container>
            <Grid item xs={12}>
              <div className="img-container">
                <Slider {...sliderOneImage}>
                  {data.previewImages.length > 0 && data?.previewImages?.map((img, i) => {
                    return (
                      <div style={{ height: '195px', position: 'relative' }} key={i}>
                        {data?.launchProgress === 1 ?
                          <img src="/images/habis-terjual.webp" alt="sold out" style={{ position: 'absolute', left: '-2px', top: '-2px', width: '30px' }} />
                          :
                          ''}
                        <img src={img} alt={`Miliki bisnis ${nameProject && nameProject[0]} cuma dengan 1 jutaan aja`} title={`Cara jadi owner bisnis ${nameProject && nameProject[0]} hanya dengan modal 1 juta. Temukan bisnis terbaik dari berbagai sektor mulai dari fnb, jasa, ritel dan berbagai bisnis lainnya hanya di landx`} className="img-project" onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)} />
                      </div>
                    )
                  })
                  }
                </Slider>

                <div className="chip-card" onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)}>
                  <Typography component='p' className="chip-text">
                    {endDay} hari lagi
                  </Typography>
                </div>
              </div>
            </Grid>
            <div className="card-content">
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={5} className='text-code-container' onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)}>
                    <Typography component='h5' className='text-code'>
                      {data?.token.symbol}
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <div className="chip-category" onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)}>
                      <Typography component='h5' className='text-category'>
                        {data?.category}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)}>
                <Typography component='h2' className='text-bisnis'>
                  {nameProject && nameProject[0]}
                </Typography>
              </Grid>
              <Grid item xs={12} onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)}>
                <Typography component='h5' className='text-company'>
                  {data?.issuerName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component='h5' className='text-price' onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)}>
                  {toIDR(data?.launchProgress * data?.totalPurchasePrice)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <LinearProgress variant="determinate" value={data?.launchProgress * 100} className="progress-bar" color='success' onClick={() => navigate(`https://app.landx.id/master-cuan/detail-project/${data?.token.symbol}`)} />
              </Grid>
            </div>
          </Grid>
        </div>)
    }

    if (type === 'isListing') {
      return (
        <div className='card-project-master-container mx-auto'>
          <Grid container>
            <Grid item xs={12}>
              <div className="img-container" onClick={() => navigate(`/project/${dataListing[0].toLowerCase()}`)}>
                <img src={dataListing[1].images[0]} alt={`Miliki bisnis ${nameProject && nameProject[0]} cuma dengan 1 jutaan aja`} title={`Cara jadi owner bisnis ${nameProject && nameProject[0]} hanya dengan modal 1 juta. Temukan bisnis terbaik dari berbagai sektor mulai dari fnb, jasa, ritel dan berbagai bisnis lainnya hanya di landx`} className="img-project filter-blur" />
                <div className="coming-soon-card">
                  <Typography component='p' className="coming-soon-text">
                    Coming Soon
                  </Typography>
                </div>
              </div>
            </Grid>
            <div className="card-content">
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={5} className='text-code-container'>
                    <Typography component='h5' className='text-code' onClick={() => navigate(`/project/${dataListing[0].toLowerCase()}`)}>
                      {dataListing[0]}
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <div className="chip-category">
                      <Typography component='h5' className='text-category' onClick={() => navigate(`/project/${dataListing[0].toLowerCase()}`)}>
                        {dataListing[1]?.category}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography component='h2' className='text-bisnis' onClick={() => navigate(`/project/${dataListing[0].toLowerCase()}`)}>
                  {nameListing && nameListing[0]}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component='h5' className='text-company' onClick={() => navigate(`/project/${dataListing[0].toLowerCase()}`)}>
                  {nameListing && nameListing[1]}
                </Typography>
              </Grid>
            </div>
          </Grid>
        </div>)
    }
  }

  return (
    <>
      {showProject()}
    </>
  )
}

export default CardProjectMasterCuan

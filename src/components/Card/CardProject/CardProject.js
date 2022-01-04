import React, { useState, useEffect } from 'react'
import { Grid, Card, Chip, CardContent, LinearProgress, Button, CircularProgress } from '@mui/material';
import { toIDR } from '../../../utils/currency';
import { calculateRemainingDays } from '../../../utils/common';
import { navigate } from 'gatsby';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardProject.scss'

const CardProject = ({ data }) => {
  const [endDay, setEndDay] = useState('')

  useEffect(() => {
    handleEndDay()
  }, [data.launchProgress])

  const handleEndDay = () => {
    if (data.launchProgress === 1) {
      setEndDay(0)
    } else {
      setEndDay(calculateRemainingDays(data.settlementDate))
    }
  }

  const sliderOneImage = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Grid item xs={11} md={6} className='container-slider-center'>
        <Card className="card-project">
          <Slider {...sliderOneImage} className="container-slider-image">
            {data.previewImages.length > 0 ? data.previewImages.map((img, i) => {
              return (
                <div style={{ height: '195px', position: 'relative' }} key={i}>
                  {data.launchProgress === 1 ?
                    <img src="./images/habis-terjual.webp" alt="sold out" style={{ position: 'absolute', left: '-2px', top: '-2px' }} />
                    :
                    ''}
                  <img src={img} style={{ height: '195px' }} className='c-pointer' alt="preview" onClick={() => navigate(`/project/${data.token.symbol.toLowerCase()}`)} />
                </div>
              )
            })
              :
              <div style={{ height: '195px' }}>
                <CircularProgress color="success" />
              </div>
            }
          </Slider>
          <CardContent>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={9}>
              </Grid>
              <Grid item xs={3} className='btn-container-buy'>
                {data.launchProgress < 1 ?
                  <Button variant="contained" className="btn-buy" onClick={() => navigate(`/project/${data.token.symbol.toLowerCase()}`)}>
                    <span className='f-buy'>BELI</span>
                  </Button>
                  :
                  ''}
              </Grid>
            </Grid>

            <div className="card-code c-pointer" onClick={() => navigate(`/project/${data.token.symbol.toLowerCase()}`)}>{data.token.symbol}</div>
            <h2 className="card-title c-pointer" onClick={() => navigate(`/project/${data.token.symbol.toLowerCase()}`)}>{data.token.name}</h2>
            <Chip label={data.category} color="success" variant="outlined" className="chip-text" />

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={9} className='card-price'>
                {toIDR(data.launchProgress * data.totalPurchasePrice)}
              </Grid>
              <Grid item xs={3} className='card-price'>
                {endDay}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={8} className='card-text-detail'>
                dari {toIDR(data.totalPurchasePrice)} Total Pendanaan
              </Grid>
              <Grid item xs={3} className='card-text-detail'>
                Hari Lagi
              </Grid>
            </Grid>

            <LinearProgress variant="determinate" value={data.launchProgress * 100} />

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={6} className='card-text-detail'>
                <span>Harga Per Lot</span>
              </Grid>
              <Grid item xs={6} className='card-text-detail'>
                <span>Jumlah Lot</span>
              </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={6} className='card-title'>
                <span>{toIDR(data.initialTokenPrice)}</span>
              </Grid>
              <Grid item xs={6} className='card-title'>
                <span>{parseInt(data.tokenSupply, 10)}</span>
              </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={6} className='card-text-detail'>
                <span>Periode Dividen</span>
              </Grid>
              <Grid item xs={6} className='card-text-detail'>
                <span>Estimasi Dividen</span>
              </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={6} className='card-title'>
                <span>{data.dividendSchedule}</span>
              </Grid>
              <Grid item xs={6}>
                <span className='card-title'>{parseFloat(data.annualRentYield) * 100}-{parseFloat(data.annualRentYieldUpper) * 100}%</span> <span className='card-text-detail-2'>Per Tahun</span>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default CardProject

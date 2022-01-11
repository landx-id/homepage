import React, { useState, useEffect } from 'react'
import { Card, Grid, Typography } from '@mui/material'
import testThumbnail from '../../../../static/project/images/CAPT/1.webp'

import './CardListing.scss'


const CardListing = ({ code, data, timeUp }) => {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')

  useEffect(() => {
    handleTime()
  }, [timeUp])

  const handleTime = () => {
    setDays(Math.floor((timeUp) / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((timeUp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  }
  return (
    <div>
      <Grid item xs={11} className='container-slider-center'>
        <div className="container-card-listing">
          <Card className="card-listing">
            <img src={testThumbnail} alt="thumbnail" className='listing-img' />
            <img src="./images/soon-listing.webp" alt="soon listing" className='listing-soon' />
            <div className="text-contianer">
              <a href={data.link} style={{ textDecoration: 'none' }}>
                <Typography className="text-time" componen='h2'>
                  {days} Hari : {hours} Jam
                </Typography>
              </a>
              <a href={data.link} style={{ textDecoration: 'none' }}>
                <Typography className="text-read-more" componen='h2'>
                  Pelajari Lebih Lanjut
                </Typography>
              </a>
            </div>
          </Card>
        </div>
      </Grid>
    </div>
  )
}

export default CardListing

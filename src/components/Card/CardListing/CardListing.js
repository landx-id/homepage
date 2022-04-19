import React, { useState, useEffect } from 'react'
import { Card, Grid, Typography } from '@mui/material'
import './CardListing.scss'


const CardListing = ({ data, timeUp, dataCardListing }) => {
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
        <a href={data.link} style={{ textDecoration: 'none' }}>
          <div className="container-card-listing">
            <Card className="card-listing">
              <img src={data.thumbnail} alt="thumbnail" className='listing-img' />
              <img src="/images/soon-listing.webp" alt="soon listing" className='listing-soon' />
              <div className="text-contianer">
                <Typography className="text-time" componen='h2'>
                  {dataCardListing.hide_schedule ?
                    ''
                    :
                    <>
                      {days} Hari : {hours} Jam
                    </>
                  }
                </Typography>
                <Typography className="text-read-more" componen='h2'>
                  Pelajari Lebih Lanjut
                </Typography>
              </div>
            </Card>
          </div>
        </a>
      </Grid>
    </div>
  )
}

export default CardListing

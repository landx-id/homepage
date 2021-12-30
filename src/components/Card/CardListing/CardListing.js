import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import testThumbnail from '../../../../project/images/CAPT/thumbnail.webp'

import './CardListing.scss'


const CardListing = ({ code, data }) => {
  console.log('LISTs');
  console.log('LISTING', data);
  return (
    <div>
      <Grid item xs={11} className='container-slider-center'>
        <div className="container-card-listing">
          <Card className="card-listing">
            <img src={testThumbnail} alt="thumbnail" className='listing-img' />
            <img src="./images/soon-listing.webp" alt="soon listing" className='listing-soon' />
            <div className="text-contianer">
              <Typography className="text-time" componen='h2'>
                17 Jam : 10 Menit
              </Typography>
              <Typography className="text-read-more" componen='h2'>
                Pelajari Lebih Lanjut
              </Typography>
            </div>
          </Card>
        </div>
      </Grid>
    </div>
  )
}

export default CardListing

import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const CardLandxWork = ({ img, title, content, height = '72px', width = '72px' }) => {
  return (
    <Grid item xs={11} md={6} lg={3} className="container-slider-center">
      <Card className='card-landx-work'>
        <div className="container-img">
          <img src={img} alt={title} className='card-img' height={height} width={width} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="card-title">
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

export default CardLandxWork

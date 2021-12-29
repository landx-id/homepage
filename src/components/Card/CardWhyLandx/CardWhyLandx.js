import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const CardWhyLandx = ({ title, content, logo }) => {
  return (
    <Grid item xs={11} md={6} lg={4} className="container-slider-center">
      <Card className='card-why-landx'>
        <div>
          <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt={title} className="card-icon" />
          </div>
          <CardContent>
            <h2 className="title-icon">
              {title}
            </h2>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  )
}

export default CardWhyLandx
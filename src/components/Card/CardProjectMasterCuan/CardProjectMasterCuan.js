import React from 'react'
import { Grid, LinearProgress, Slider, Typography } from '@mui/material'
import './CardProjectMasterCuan.scss'

const CardProjectMasterCuan = ({ date, code, bisnisName, companyName, price, category }) => {
  return (
    <div className='card-project-master-container'>
      <Grid container>
        <Grid item xs={12}>
          <div className="img-container">
            <img src="/images/BBKB/1.webp" alt="image project" className="img-project" />
            <div className="chip-card">
              <Typography component='p' className="chip-text">
                {date}
              </Typography>
            </div>
          </div>
        </Grid>
        <div className="card-content">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={5} className='text-code-container'>
                <Typography component='h5' className='text-code'>
                  {code}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <div className="chip-category">
                  <Typography component='h5' className='text-category'>
                    {category}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography component='h2' className='text-bisnis'>
              {bisnisName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component='h5' className='text-company'>
              {companyName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component='h5' className='text-price'>
              {price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" value={100} className="progress-bar" color='success' />
          </Grid>
        </div>
      </Grid>
    </div>
  )
}

export default CardProjectMasterCuan

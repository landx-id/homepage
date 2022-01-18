import React from 'react'
import { Grid, Slider, Typography } from '@mui/material'
import './CardProjectMasterCuan.scss'

const CardProjectMasterCuan = () => {
  return (
    <div className='card-project-master-container'>
      <Grid container>
        <Grid item xs={12}>
          <div className="img-container">
            <img src="/images/BBKB/1.webp" alt="image project" className="img-project" />
          </div>
        </Grid>
        <Grid itemxs={12}>
          <div className="chip-card">
            <Typography component='p'>
              15 hari lagi
            </Typography>
          </div>
        </Grid>
        <Grid itemxs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography component='h5'>
                KODE
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component='h5'>
                INDUSTRI
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate rem repudiandae animi voluptatem suscipit.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate rem repudiandae animi voluptatem suscipit.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h5'>
            Rp. 00.0000.000
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Grid>
      </Grid>
    </div>
  )
}

export default CardProjectMasterCuan

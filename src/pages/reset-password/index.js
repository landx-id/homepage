import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import './reset-password.scss'

const ResetPassword = () => {
  const params = window.location.search.split('?id=')[1]
  return (
    <div className='verificaion-container'>
      <Container>
        <Grid container className='posisi-center'>
          <Grid item sm={6}>
            <img src="/images/verification-confirmation.png" alt="verification confirmation" className='img-verification' />
          </Grid>
          <Grid item sm={6}>
            <div className="text-container">
              <Typography variant='h1' paragraph={true} className='title-text'>
                Rubah Kata Sandi
              </Typography>
              <Typography className='text-content'>
                Anda bisa merubah kata sandi,
              </Typography>
              <Typography paragraph={true} className='text-content'>
                silakan membuka aplikasi & rubah kata sandi.
              </Typography>
              <a href={'app://store.numoney.landxapp/reset-password?id=' + params} className='btn-reset'>BUKA APLIKASI</a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ResetPassword
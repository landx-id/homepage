import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Card, Container, Typography } from '@mui/material';
import Seo from '../../components/seo/seo';

import './PaymentCompleted.scss'

const PaymentCompleted = () => {
  return (
    <div className='container-payment display-f-center'>
      <Seo title="Completed" />

      <Container className='display-f-center'>
        <Card className='card-payment display-f-center'>
          <CheckCircleOutlineIcon color='success' className='icon-payment' />
          <Typography component='h1' className='text-title'>
            Pembayaran Telah Berhasil
          </Typography>
          <Typography component='p' className='text-content'>
            Terima kasih sudah berinvestasi di LandX
          </Typography>
          <Typography component='p'>
            Yuk lihat proyek lainnya yang tersedia saat ini
          </Typography>
          <Button variant='contained' color='success' className='btn-project'>
            Lihat Proyek
          </Button>
        </Card>
      </Container>
    </div>
  )
}

export default PaymentCompleted

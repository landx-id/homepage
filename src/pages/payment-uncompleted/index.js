import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Card, Container, Typography } from '@mui/material';
import Seo from '../../components/seo/seo';

const PaymentUncompleted = () => {
  return (
    <div>
      <Seo title="Uncompleted" />

      <div className='container-payment display-f-center'>
        <Container className='display-f-center'>
          <Card className='card-payment display-f-center'>
            <InfoOutlinedIcon color='primary' className='icon-payment' />
            <Typography component='h1' className='text-title'>
              Hei..!!
            </Typography>
            <Typography component='p' className='text-content'>
              Terima kasih sudah memilih LandX sebagai plaform investasimu. Segera selesaikan pembelian lot ya!!
            </Typography>
            <Typography component='p'>
              Yuk lihat project lainnya yang tersedia saat ini
            </Typography>
            <Button variant='contained' color='primary' className='btn-project'>
              Lihat Proyek
            </Button>
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default PaymentUncompleted

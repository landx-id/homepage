import React from 'react'
import { Button, Card, Container, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Seo from '../../components/seo/seo';
import { Link } from 'gatsby';
import './PaymentError.scss'

const PaymentError = () => {
  return (
    <div>
      <Seo title="Error" />

      <div className='container-payment display-f-center'>
        <Container className='display-f-center'>
          <Card className='card-payment display-f-center'>
            <CancelOutlinedIcon color='error' className='icon-payment' />
            <Typography component='h1' className='text-title'>
              Ooops..!!
            </Typography>
            <Typography component='p'>
              Ada masalah di proses pembayaranmu.
            </Typography>
            <Typography component='p'>
              Segera hubungi Admin kami untuk keterangan lebih lanjut.
            </Typography>
            <Link href='https://wa.me/628119562878' style={{ textDecoration: 'none' }}>
              <Button variant='contained' color='success' className='btn-project'>
                WA Customer 1
              </Button>
            </Link>
            <Link href='https:/wa.me/6281381862878' style={{ textDecoration: 'none' }}>
              <Button variant='contained' color='success' className='btn-project'>
                WA Customer 2
              </Button>
            </Link>
            <Link href='https:/wa.me/628111622878' style={{ textDecoration: 'none' }}>
              <Button variant='contained' color='success' className='btn-project'>
                WA Consultant Representative
              </Button>
            </Link>
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default PaymentError

import React from 'react'
import { Grid, Typography } from '@mui/material'
import './CardValueInvestor.scss'

const CardValueInvestor = ({ number, content }) => {
  return (
    <Grid item className="container-value-investor">
      <Typography variant='h4' className="num-value" sx={{ marginBottom: '5px' }}>{number}</Typography>
      <p>{content}</p>
    </Grid>
  )
}

export default CardValueInvestor
import { Grid, Typography } from '@mui/material'
import React from 'react'

const CardValueInvestor = ({ number, content }) => {
  return (
    <Grid item className="container-value-investor">
      <Typography variant='h4' className="num-value" sx={{ marginBottom: '5px' }}>{number}</Typography>
      <p>{content}</p>
    </Grid>
  )
}

export default CardValueInvestor
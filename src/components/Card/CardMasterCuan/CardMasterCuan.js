import React from 'react'
import { Typography } from '@mui/material';
import './CardMasterCuan.scss'

const CardMasterCuan = ({ title, description }) => {
  return (
    <div className="card-why-container">
      <Typography component='h2' className="card-title">
        {title}
      </Typography>
      <Typography className="card-description">
        {description}
      </Typography>
    </div>
  )
}

export default CardMasterCuan

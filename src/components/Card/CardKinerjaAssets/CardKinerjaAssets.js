import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import './CardKinerjaAssets.scss'

const CardKinerjaAssets = ({ cardDesc, cardActive }) => {
  return (
    <>
      <Card className={`utils cursor-pointer card-kinerja-asset ${cardActive ? 'active' : ''}`}>
        <CardContent>
          <Typography className="utils flex center-start font-17 line-height-24 color-black-700">
            <img src="/assets/icons/checkbox-green.svg" alt="checkbox" className="utils mr-18" /> {cardDesc}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CardKinerjaAssets
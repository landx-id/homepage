import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const CardKinerjaAssets = ({ cardDesc }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography className="utils flex center-start font-17 line-height-24 color-black-700">
            <img src="assets/icons/checkbox-green.svg" alt="checkbox" className="utils mr-18" /> {cardDesc}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CardKinerjaAssets
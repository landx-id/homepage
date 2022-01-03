import { Grid } from '@mui/material'
import React from 'react'

import './CardTitleSection.scss'

const CardTitleSection = ({ title }) => {
  return (
    <div className='container-title-section'>
      <Grid container className='title-center'>
        <Grid item>
          <h2 className='title-section'>
            {title}
          </h2>
          <hr className='divider' />
        </Grid>
      </Grid>
    </div>
  )
}

export default CardTitleSection

import { Grid } from '@mui/material'
import React from 'react'

const CardTitleSection = ({ title }) => {
  return (
    <div>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
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

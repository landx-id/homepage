import * as React from 'react';
import { useState, useEffect } from 'react'
import { Alert, Collapse } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeaderAlerts = () => {
  const [open, setOpen] = useState(true);
  const [windowDimension, setwindowDimension] = useState('')

  useEffect(() => {
    setwindowDimension(window.innerWidth)
    window.addEventListener('resize', () => {
      setwindowDimension(window.innerWidth)
      handleAlert(windowDimension)
    })

  }, [windowDimension])

  const handleAlert = (windowDimension) => {
    if (windowDimension > 1160) {
      return <span style={{ display: 'flex', alignItems: 'center' }}>Hati-hati dengan segala jenis penipuan. LandX tidak memiliki grup Telegram! Akun resmi Customer Service LandX adalah <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span> 0811 9562 878</span>
    }
    else {
      return <span style={{ display: 'flex', alignItems: 'center' }}><marquee>Hati-hati dengan segala jenis penipuan. LandX tidak memiliki grup Telegram! Akun resmi Customer Service LandX adalah <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span> 0811 9562 878</marquee></span>
    }
  }

  return (
    <>
      <Collapse in={open}>
        <Alert sx={{ height: '50px', alignItems: 'center', fontSize: '16px' }} variant="filled" severity="info" onClose={() => { setOpen(false) }}>
          {handleAlert(windowDimension)}
        </Alert>
      </Collapse>
    </>
  )
}

export default HeaderAlerts
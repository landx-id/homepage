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

  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 30000);

  }, [])


  const handleAlert = (windowDimension) => {
    if (windowDimension > 1336) {
      return <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        Hati-hati dengan segala jenis penipuan. LandX tidak memiliki grup Telegram! Akun resmi Customer Service LandX adalah
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: '4px' }}>
          <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span> 0811 9562 878,
          <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span> 0813 813 8186 2878, dan
          <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span> 0811 1622 878 (Consultant Representative)
        </div >
      </span>
    }
    else {
      return (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <marquee>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              Hati-hati dengan segala jenis penipuan. LandX tidak memiliki grup Telegram! Akun resmi Customer Service LandX adalah
              <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span>
              0811 9562 878,
              <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span>
              0813 813 8186 2878, dan
              <span style={{ margin: '3px 5px 0' }}><WhatsAppIcon /></span>
              0811 1622 878 (Consultant Representative)
            </div>
          </marquee>
        </span>
      )
    }
  }

  return (
    <>
      <Collapse in={open}>
        <Alert sx={{ alignItems: 'center', fontSize: '16px', justifyContent: 'center', padding: '8px', background: '#1A86C0' }} variant="filled" severity="info" icon={false}>
          {handleAlert(windowDimension)}
        </Alert>
      </Collapse>
    </>
  )
}

export default HeaderAlerts
import React from 'react'
import { navigate } from 'gatsby';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, Slide } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import './CTAWhatsapp.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CTAWhatsapp = () => {
  const [open, setOpen] = React.useState(false);
  const [widthWindows, setWidthWindows] = React.useState('')

  React.useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='container-cta-whatsapp'>
      {widthWindows < 600 ?
        <a onClick={() => handleClickOpen()} className='img-cta-wa-mobile'>
          <CallIcon style={{ color: '#fff' }} />
        </a>
        :
        <Button variant='contained' className='btn-cta-wa' onClick={() => handleClickOpen()}>
          <img src="/images/schedule_call_icon_desktop.webp" alt="schedule_call_icon_desktop" className='img-cta-wa' /> <span className='text-cta-wa'>Konsultasi kebutuhan investasi? <br /> Jadwalkan panggilan</span>
        </Button>
      }

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth='sm'
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className='dialog-cta-wa'
      >
        <DialogTitle>{"Jadwalkan panggilan"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='text-content'>Mau konsultasi berapa lama?</div>
            <div><Button variant='contained' color='success' className='btn-time' onClick={() => navigate('https://calendly.com/hello-landx/15min?month=2022-01')}>15 menit</Button></div>
            <div><Button variant='contained' color='success' className='btn-time' onClick={() => navigate('https://calendly.com/hello-landx/30min?month=2022-01')}>30 menit</Button></div>
            <div><Button variant='contained' color='success' className='btn-time' onClick={() => navigate('https://calendly.com/hello-landx/60min?month=2022-01')}>60 menit</Button></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CTAWhatsapp

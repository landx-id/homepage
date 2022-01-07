import React, { useState, useEffect } from "react"
import { navigate } from "gatsby";
import { Grid, Container, Typography, Chip, LinearProgress, Button, Tooltip, ClickAwayListener, Dialog, DialogContent, DialogContentText } from "@mui/material"
import Layout from "../../components/layout/layout"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CalculateRemainingDays, FetchDetailProject, FetchIDProjetDetail } from '../../utils/common';
import { toIDR } from "../../utils/currency";
import { useLocation } from '@reach/router';
import { MobilePDFReader } from 'react-read-pdf';

import './detailProjects.scss'
import CarouselSingleProject from "../../components/Carousel/CarouselSingleProject/CarouselSingleProject";

const DetailProjects = () => {
  const [linkBtnLandx, setLinkBtnLandx] = useState('https://play.google.com/store/apps/details?id=store.numoney.landxapp')
  const [idProject, setIdProject] = useState('')
  const [dataProject, setDataProject] = useState('')
  const [endDay, setEndDay] = useState('')
  const [openTooltipDisc, setOpenTooltipDisc] = useState(false);
  const [openTooltipPeriode, setOpenTooltipPeriode] = useState(false)
  const [openProspektus, setOpenProspektus] = useState(false)

  let location = useLocation()
  let codeProject = location.pathname.split('/')[2].toUpperCase()

  useEffect(() => {
    detectDevice()
  }, [])

  useEffect(() => {
    handleEndDay()
  }, [dataProject.launchProgress])

  useEffect(() => {
    FetchIDProjetDetail('https://api.landx.id/encode_currency_id', codeProject).then(data => {
      setIdProject(data.result)
    })
  }, [codeProject])

  useEffect(() => {
    FetchDetailProject('https://api.landx.id/', idProject).then(data => {
      if (data.data.node !== null && data.data.node !== undefined) {
        setDataProject(data.data.node.landXProperty)
      }
    })
  }, [idProject])

  const detectDevice = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return setLinkBtnLandx('https://play.google.com/store/apps/details?id=store.numoney.landxapp')
    }

    if (/android/i.test(userAgent)) {
      return setLinkBtnLandx('https://play.google.com/store/apps/details?id=store.numoney.landxapp')
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return setLinkBtnLandx('https://apps.apple.com/id/app/landx-aplikasi-investasi/id1453823676?l=id')
    }

    return setLinkBtnLandx('https://play.google.com/store/apps/details?id=store.numoney.landxapp')
  }

  const handleEndDay = () => {
    if (dataProject.launchProgress === 1) {
      setEndDay(0)
    } else {
      setEndDay(CalculateRemainingDays(dataProject.settlementDate))
    }
  }

  const handleTooltipClose = (type) => {
    if (type === 'disclaimer') {
      setOpenTooltipDisc(false);
    }
    if (type === 'periode') {

      setOpenTooltipPeriode(false)
    }
  };

  const handleTooltipOpen = (type) => {
    if (type === 'disclaimer') {
      setOpenTooltipDisc(true);
    }
    if (type === 'periode') {

      setOpenTooltipPeriode(true)
    }
  };

  const handleCloseProspektus = () => {
    setOpenProspektus(false);
  };

  return (
    <>
      <Layout>
        <Container className="container-project-detail">
          <Grid container>
            <Grid item xs={12} className="back-to-project">
              <Button variant="text" onClick={() => navigate(`/project`)} style={{ textDecoration: 'none', cursor: 'pointer', color: '#5e798d' }} startIcon={<ArrowBackIcon color="success" className="arrow-back" />}>
                <span className='text-back'>Kembali ke Semua Proyek</span>
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

              {dataProject && <CarouselSingleProject data={dataProject} />}

            </Grid>

            <Grid item xs={12} md={6}>
              <Typography className='code'>
                {dataProject && dataProject.token.symbol}
              </Typography>
              <Typography className='text-title' component='h1'>
                {dataProject && dataProject.token.name}
              </Typography>
              <Chip label={dataProject && dataProject.category} color="success" variant="outlined" className="chip-text" />
              <Grid container>
                <Grid item xs={6} className='text-green-price' component='h3'>
                  {dataProject && toIDR(dataProject.launchProgress * dataProject.totalPurchasePrice)}
                </Grid>
                <Grid item xs={6} className='text-green-price' component='h3'>
                  {dataProject && endDay}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-secon'>
                  dari {dataProject && toIDR(dataProject.totalPurchasePrice)}
                </Grid>
                <Grid item xs={6} className='text-secon'>
                  Hari Lagi
                </Grid>
              </Grid>
              <LinearProgress variant="determinate" value={dataProject.launchProgress * 100} className="progress-bar" />
              <Grid container>
                <Grid item xs={6} className='text-secon'>
                  Harga Per Lot
                </Grid>
                <Grid item xs={6} className='text-secon'>
                  Jumlah Lot
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-price'>
                  {dataProject && toIDR(dataProject.initialTokenPrice)}
                </Grid>
                <Grid item xs={6} className='text-price'>
                  {dataProject && parseInt(dataProject.tokenSupply, 10)}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-secon'>
                  Periode Dividen
                  <ClickAwayListener onClickAway={() => handleTooltipClose('periode')}>
                    <div>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                          zIndex: 100
                        }}
                        onClose={() => handleTooltipClose('periode')}
                        open={openTooltipPeriode}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Periode dividen aktual akan tetap mengacu pada laporan keuangan dan persetujuan Rapat Umum Pemegang Saham (RUPS)."
                      >
                        <InfoOutlinedIcon color='success' className="icon-info" onClick={() => handleTooltipOpen('periode')} />
                      </Tooltip>
                    </div>
                  </ClickAwayListener>
                </Grid>

                <Grid item xs={6} className='text-secon'>
                  Estimasi Dividen

                  <ClickAwayListener onClickAway={() => handleTooltipClose('disclaimer')}>
                    <div>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                          zIndex: 100
                        }}
                        onClose={() => handleTooltipClose('disclaimer')}
                        open={openTooltipDisc}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan.
                        Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS). 
                        Estimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham."
                      >
                        <InfoOutlinedIcon color='success' className="icon-info" onClick={() => handleTooltipOpen('disclaimer')} />
                      </Tooltip>
                    </div>
                  </ClickAwayListener>

                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} className='text-price'>
                  {dataProject && dataProject.dividendSchedule}
                </Grid>
                <Grid item xs={6} className='text-price'>
                  {dataProject && parseFloat(dataProject.annualRentYield) * 100}-{dataProject && parseFloat(dataProject.annualRentYieldUpper) * 100}% Per Tahun
                </Grid>
              </Grid>
              <Grid container className='container-btn-project'>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color='success' className='btn-buy' onClick={() => window.location.href = `${linkBtnLandx}`}>BELI VIA APP</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="outlined" color='success' className='btn-pros'
                    onClick={() => setOpenProspektus(true)}
                  >SHOW PROSPEKTUS</Button>
                  <Dialog
                    fullWidth={true}
                    maxWidth='xl'
                    open={openProspektus}
                    onClose={handleCloseProspektus}
                  >
                    <DialogContent style={{ minHeight: '1000px' }}>
                      <DialogContentText>
                        <MobilePDFReader url={`/prospektus/${codeProject}.pdf`} overflow={'none'} scale={'auto'} isShowFooter={false} isShowHeader={false} />
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default DetailProjects

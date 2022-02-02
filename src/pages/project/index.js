import React, { useState, useEffect } from 'react'
import { Box, Button, Container, FormControl, Grid, NativeSelect, OutlinedInput, Typography, InputBase, Slider as MuiSlider, Divider, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles';
import Layout from "../../components/layout/layout"
import Seo from '../../components/seo/seo';
import { capitalizeTheFirstLetterOfEachWord, FetchData } from '../../utils/common';
import CardProject from '../../components/Card/CardProject/CardProject';
import { toIDR, fromIDR } from '../../utils/currency';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ShowAllProject.scss'

const ShowAllProject = () => {
  const [dataProjects, setDataProjects] = useState([])
  const [numPrev, setNumPrev] = useState(0)
  const [numNext, setNumNext] = useState(3)
  const [loadingCard, setLoadingCard] = useState(true)
  const [minPrice, setMinPrice] = useState(1000000)
  const [maxPrice, setMaxPrice] = useState(5000000)
  const [categories, setCategories] = useState('')
  const [category, setCategory] = useState('')
  const [chooseCategory, setchooseCategory] = useState('allCategory')
  const [valSort, setValSort] = useState('settlementDate')
  const [minHis, setMinHis] = useState(1000000)
  const [maxHis, setMaxHis] = useState(5000000)
  const [categoryHis, setCategoryHis] = useState('allCategory')
  const [valSortHis, setValSortHis] = useState('settlementDate')
  const [widthWindowVal, setWidthWindowVal] = useState(null);
  const [isSell, setIsSell] = useState([]);
  const [isSold, setIsSold] = useState([]);

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-root': {
      padding: '0 !important',
    },
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const cardProject = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    var hashUrl = window.location.hash;
    if (/^(#\/[a-z0-9])/.test(hashUrl)) {
      // get project code
      var code = hashUrl.replace(/[^a-z0-9]/gi, '');
      // redirect to proper url
      window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + code;
    } else {
      getDataProjects();
    }
  }, [])

  useEffect(() => {
    setDataProjects([...isSell, ...isSold])
  }, [isSold])

  useEffect(() => {
    if (dataProjects) {
      getCategory()
    }
  }, [dataProjects])

  useEffect(() => {
    if (categories) {
      setCategory(categories.filter((v, i) => categories.indexOf(v) === i))
    }
  }, [categories])

  useEffect(() => {
    setWidthWindowVal(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidthWindowVal(window.innerWidth)
    })
  }, [widthWindowVal])

  useEffect(() => {
    setNumNext(3)
    if (widthWindowVal < 1200 && widthWindowVal > 830 && widthWindowVal !== null) {
      setNumNext(2)
    }
    if (widthWindowVal <= 830 && widthWindowVal !== null) {
      setNumNext(1)
    }
  }, [widthWindowVal])

  const getCategory = () => {
    dataProjects.map(data => {
      if (data.landXProperty !== null) {
        if (categories !== data.landXProperty.category) {
          setCategories((prevArr) => [...prevArr, data.landXProperty.category])
        }
      }
    })
  }

  const hendleReset = () => {
    setMinPrice(1000000)
    setMaxPrice(5000000)
    setchooseCategory('allCategory')
    setValSort('settlementDate')
  }

  const getDataProjects = () => {
    FetchData('https://api.landx.id/').then(datas => {
      datas.data.currencies.map((data) => {
        if (data.landXProperty !== null) {
          if (data.landXProperty['launchProgress'] < 1) {
            setIsSell((prevData) => [...prevData, data])
          }
          if (data.landXProperty['launchProgress'] === 1) {
            setIsSold((prevData) => [...prevData, data])
          }
        }
      })
      setLoadingCard(false)
    })
  }

  const handlePrev = () => {
    if (numPrev > 0) {
      if (widthWindowVal < 1200 && widthWindowVal > 830 && widthWindowVal !== null) {
        setNumPrev(numPrev - 2)
        setNumNext(numNext - 2)
      } else if (widthWindowVal <= 830 && widthWindowVal !== null) {
        setNumPrev(numPrev - 1)
        setNumNext(numNext - 1)
      } else {
        {
          setNumPrev(numPrev - 3)
          setNumNext(numNext - 3)
        }
      }
    }
  }

  const handleNext = () => {
    if (numNext < dataProjects.length) {
      if (widthWindowVal < 1200 && widthWindowVal > 830 && widthWindowVal !== null) {
        setNumPrev(numPrev + 2)
        setNumNext(numNext + 2)
      } else if (widthWindowVal <= 830 && widthWindowVal !== null) {
        setNumPrev(numPrev + 1)
        setNumNext(numNext + 1)
      } else {
        setNumPrev(numPrev + 3)
        setNumNext(numNext + 3)
      }
    }
  }

  const handleChangeSlider = (e, newValue) => {
    setMinPrice(newValue[0])
    setMaxPrice(newValue[1])
  }

  const handleFilter = () => {
    let renderProjects = dataProjects.filter(property => {
      return (
        fromIDR(property.landXProperty['initialTokenPrice']) / 10 >= minPrice && fromIDR(property.landXProperty['initialTokenPrice']) / 10 <= maxPrice
      )
    })
    if (chooseCategory !== 'allCategory') {
      renderProjects = renderProjects.filter(property => {
        return (
          !chooseCategory.localeCompare(property.landXProperty["category"])
        )
      })
    }
    renderProjects = renderProjects.sort((a, b) => a[valSort] > b[valSort] ? -1 : 1)

    setDataProjects(renderProjects)

    setMinHis(minPrice)
    setMaxHis(maxPrice)
    setCategoryHis(chooseCategory)
    setValSortHis(valSortHis)
    if (minPrice < minHis || maxPrice > maxHis || chooseCategory !== categoryHis || valSort !== valSortHis) {
      getDataProjects()
    }
  }

  return (
    <>
      <Layout>
        <Seo title="Yuk Temukan Bisnis-bisnis Terbaik untuk Investasi Jangka Panjang Kamu di LandX" description="Yuk investasi ke berbagai bisnis potensial mulai dari franchise fnb terbaik, sektor jasa, dan berbagai bisnis potensial lainnya | Investasi online OJK" />

        <div className="container-all-project">
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <h1 className='title-section'>Pilih Proyek Favoritmu</h1>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='text-label'>Minimum Price</Typography>
                    <Box component="form" noValidate autoComplete="off">
                      <FormControl className='form-control-price'>
                        <OutlinedInput placeholder="Min Price" value={toIDR(minPrice)} onChange={(e) => setMinPrice(fromIDR(e.target.value))} style={{ border: '1px solid rgb(152 168 181' }} />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='text-label'>Maximum Price</Typography>
                    <Box component="form" noValidate autoComplete="off">
                      <FormControl className='form-control-price'>
                        <OutlinedInput placeholder="Max Price" value={toIDR(maxPrice)} onChange={(e) => setMaxPrice(fromIDR(e.target.value))} style={{ border: '1px solid rgb(152 168 181' }} />
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Box className='container-muislider'>
                      <MuiSlider
                        value={[minPrice, maxPrice]}
                        step={1000}
                        onChange={handleChangeSlider}
                        valueLabelDisplay="auto"
                        min={1000000}
                        max={5000000}
                      />
                    </Box>
                    <div className="container-range">
                      <span>
                        <small className="text-range">1 Juta</small>
                      </span>
                      <span>
                        <small className="text-range">5 Juta</small>
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Typography className='text-label'>Kategori</Typography>
                    <FormControl variant="standard" style={{ minWidth: '100%' }}>
                      <NativeSelect
                        value={chooseCategory}
                        onChange={e => setchooseCategory(e.target.value)}
                        input={<BootstrapInput />}
                      >
                        <option value="allCategory">Semua Kategori</option>
                        {category && category.map(data => {
                          return (
                            <option key={data} value={data}>{capitalizeTheFirstLetterOfEachWord(data)}</option>
                          )
                        })
                        }
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography className='text-label'>Urutkan</Typography>
                    <FormControl variant="standard" style={{ minWidth: '100%' }}>
                      <NativeSelect
                        value={valSort}
                        onChange={e => setValSort(e.target.value)}
                        input={<BootstrapInput />}
                      >
                        <option value="settlementDate">Sisa Hari</option>
                        <option value="name">Nama</option>
                        <option value="symbol">Kode Saham</option>
                        <option value="launchProgress">Perkembangan</option>
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <br />
                    <Button className='filter-btn' onClick={() => handleFilter()}>TERAPKAN FILTER</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Divider className='divider' />
          <Container>
            <Grid container>
              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Typography>{dataProjects.length} Project sesuai Filter <span className='btn-reset' onClick={() => hendleReset()}>RESET FILTER</span></Typography>
              </Grid>
            </Grid>{
              loadingCard ?
                <div className='container-load'><CircularProgress color="success" /></div>
                :
                <>
                  {dataProjects &&
                    <Slider {...cardProject} className='container-card-projects'>
                      {dataProjects && dataProjects.slice(numPrev, numNext).map(dataProject => {
                        if (dataProject.landXProperty !== null) {
                          return (
                            <CardProject data={dataProject.landXProperty} key={dataProject.landXProperty.id} />
                          )
                        }
                      })}
                    </Slider>}
                </>
            }
            <Grid container>
              <Grid item xs={12} className='btn-next-prev' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="contained" color='success' onClick={() => handlePrev()} className='prev-btn'>Sebelumnya</Button>
                <Button variant="contained" color='success' onClick={() => handleNext()}>Selanjutnya</Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default ShowAllProject

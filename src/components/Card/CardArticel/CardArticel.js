import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, Button, CardActions, CardContent, Typography, Grid } from '@mui/material'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./CardArticel.scss"
import { Link } from "gatsby"


const CardArticel = () => {
  const [dataBlogs, setDataBlogs] = useState([])

  useEffect(() => {
    getDataBlog()
  }, [])

  const getDataBlog = () => {
    fetch('https://landx.id/blog/rss/')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("item");
        items.forEach((e, i) => {
          let title = e.getElementsByTagName("title")[0] != undefined ? e.getElementsByTagName("title")[0].childNodes[0].nodeValue : "";
          let description = e.getElementsByTagName("description")[0] != undefined ? e.getElementsByTagName("description")[0].childNodes[0].nodeValue : "";
          let link = e.getElementsByTagName("link")[0] != undefined ? e.getElementsByTagName("link")[0].childNodes[0].nodeValue : "";
          let category = e.getElementsByTagName("category")[0] != undefined ? e.getElementsByTagName("category")[0].childNodes[0].nodeValue : "LandX";

          setDataBlogs((prevArr) => [...prevArr, { title: title, desc: description, category: category, link: link }])
        })
      })
  }

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  console.log('title', dataBlogs);

  return (
    <>
      <Slider {...settings} className='container-article'>
        <Grid item xs={11} md={6} lg={11} className='container-slider-center'>
          <CardContent className='card-body'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="card-tag">
              category
            </Typography>
            <Typography variant="h5" component="h2" className='card-title'>
              title
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" className="card-description">
              desc
            </Typography>
            <Link href='/' className="text-link">
              <Button variant="text" size="small">SELENGKAPNYA DI BLOG</Button>
            </Link>
          </CardContent>
        </Grid>
      </Slider>
    </>
  )
}

CardArticel.defaultProps = {
  datas: [],
  type: ``
}

CardArticel.propTypes = {
  datas: PropTypes.array,
  type: PropTypes.string
}

export default CardArticel


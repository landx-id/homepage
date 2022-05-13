import React, { useEffect, useState } from "react"
import { Button, CardContent, Typography, Grid, CircularProgress } from '@mui/material'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./CardArticel.scss"
import { Link } from "gatsby"


const CardArticel = () => {
  const [dataBlogs, setDataBlogs] = useState([])
  const [loadArticle, setLoadArticle] = useState(true)

  useEffect(() => {
    getDataBlog()
  }, [])

  const getDataBlog = () => {
    fetch('https://landx.id/blog/rss.xml')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("item");
        items.forEach((e, i) => {
          let title = e.getElementsByTagName("title")[0] !== undefined ? e.getElementsByTagName("title")[0]?.childNodes[0]?.nodeValue : "";
          let description = e.getElementsByTagName("description")[0] !== undefined ? e.getElementsByTagName("description")[0]?.childNodes[0]?.nodeValue : "";
          let link = e.getElementsByTagName("link")[0] !== undefined ? e.getElementsByTagName("link")[0]?.childNodes[0]?.nodeValue : "";
          let category = e.getElementsByTagName("category")[0] !== undefined ? e.getElementsByTagName("category")[0]?.childNodes[0]?.nodeValue : "LandX";
          let blogImg = e.getElementsByTagName("image")[0] !== undefined ? e.getElementsByTagName("image")[0]?.childNodes[0]?.nodeValue : "";

          setDataBlogs((prevArr) => [...prevArr, { title: title, desc: description, category: category, link: link, blogImg: blogImg }])
        })
        setLoadArticle(false)
      })
  }

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      {loadArticle ?
        <div className='container-load'><CircularProgress color="success" /></div>
        : <>
          {dataBlogs &&
            <Slider {...settings} className='container-article'>
              {dataBlogs.length > 0 && dataBlogs.slice(0, 5).map(data => {
                return (
                  <Grid item xs={11} md={6} lg={11} className='container-slider-center' key={data.title}>
                    <CardContent className='card-body'>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="card-tag">
                        {data.category}
                      </Typography>
                      <Typography variant="h5" component="h2" className='card-title'>
                        {data.title.substr(0, 53)}...
                      </Typography>
                      <div>
                        {data.blogImg && <img src={`https://thumbor.landx.id/unsafe/330x195/${data.blogImg}`} alt={data.title} className='card-img' style={{ margin: '0 auto 16px' }} />}
                      </div>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" className="card-description">
                        {data.desc.substr(0, 200)}...
                      </Typography>
                      <Link href={data.link} className="text-link" style={{ marginTop: '16px' }}>
                        <Button variant="text" size="small">SELENGKAPNYA DI BLOG</Button>
                      </Link>
                    </CardContent>
                  </Grid>
                )
              })}
            </Slider>
          }
        </>}
    </>
  )
}

export default CardArticel


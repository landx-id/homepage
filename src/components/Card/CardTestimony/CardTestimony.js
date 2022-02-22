import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardTestimony.scss"

const CardTestimony = () => {
  const sliderOneCard = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };

  const dummyTesti = [
    {
      'img': "./images/testimonyProfilePicture2.webp",
      'name': "Valerie",
      'testimony': "Akhirnya ada solusi untuk investasi properti bagi yang tidak punya waktu. Layanan LandX sangat baik, kinerja investasi sangat memuaskan, aplikasi mudah digunakan, plus saya dapat memeriksa investasi saya kapan saja!",
      'titleImg': "Pengalaman investor saat berinvestasi di LandX",
      'alt': "Review investor LandX"
    },
    {
      'img': "./images/testimonyProfilePicture.webp",
      'name': "Herbert",
      'testimony': "LandX memberikan solusi mudah dan cepat untuk mengembangkan uang saya. Lumayan ya terima hasil tiap bulan.",
      'titleImg': "Pengalaman investor berinvestasi di LandX",
      'alt': "LandX review, pengalaman investasi di LandX"
    }
  ];

  return (
    <>
      <Slider {...sliderOneCard} className='container-testimony'>
        {dummyTesti && dummyTesti.map((data, i) => {
          return (
            <Grid item xs={12} className="container-slider-center" key={i}>
              <Card className='card-testimony'>
                <div className="container-img">
                  <img src={data.img} alt={data.name} className='card-img' alt={data.alt} title={data.titleImg} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="card-title">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="secondary" className='card-content'>
                    {data.testimony}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Slider>
    </>
  )
}

export default CardTestimony

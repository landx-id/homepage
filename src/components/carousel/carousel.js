import * as React from "react"
import PropTypes from "prop-types"
import { Box, Typography } from '@mui/material'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carousel.scss"
import { Link } from "gatsby"


const Carousel = ({ datas }) => {

    const dummy = [
        {
            'tag': "PROMO LANDX",
            'title': "Promo Investasi Voucher Cashback Hingga Rp 100 Ribu Hanya di LandX Festival End Year CUAN",
            'description': "LandX mau ajak kamu investasi lebih cuan biar keuangan kamu nambah terus. Kamu bisa dapat voucher cashback hingga Rp 100 ribu pada 20-31 Desember 2021"
        },
        {
            'tag': "IPO BUKALAPAK",
            'title': "IPO Bukalapak: Menelusuri Penyebab Anjloknya Harga Saham Bukalapak Semenjak IPO",
            'description': "Walaupun sempat ARA di awal IPO (Initial Public Offering), saham Bukalapak kini terus mengalami ARB, membuat banyak investor merasa dirugikan oleh hal ini."
        },
        {
            'tag': "CARA INVESTASI SAHAM",
            'title': "Mau Mulai Investasi Saham? Yuk Cek Saham Blue Chip untuk Pemula",
            'description': "Apabila kamu pemula yang masih bingung cara berinvestasi ke dalam saham seperti apa yang bisa memberikan keuntungan, maka saham bluechip bisa jadi pilihan"
        }
    ];

    // var names = ['Jake', 'Jon', 'Thruster'];

    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {dummy.map(data => (
                <Box className="card-border" key={data.tag}>
                    <Box className="card-body">
                        <Typography color="secondary" style={{ fontSize: `11px` }}>
                            {data.tag}
                        </Typography>
                        <Typography color="secondary" className="article-title">
                            {data.title}
                        </Typography>
                        <Typography color="secondary">
                            {data.description}
                        </Typography>

                        <Box className="read-more">
                            <Link to="/">
                                <Typography color="primary" style={{ fontWeight: 600 }}>
                                    Selengkapnya di blog
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Slider>
    )
}

Carousel.defaultProps = {
    datas: []
}

Carousel.propTypes = {
    datas: PropTypes.array,
}

export default Carousel


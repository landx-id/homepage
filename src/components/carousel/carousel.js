import * as React from "react"
import PropTypes from "prop-types"
import { Box, Typography } from '@mui/material'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carousel.scss"
import { Link } from "gatsby"


const Carousel = ({ datas, type }) => {

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
		
		const dummyTesti = [
			{
					'img': "./images/testimonyProfilePicture2.webp",
					'name': "Valerie",
					'testimony': "Akhirnya ada solusi untuk investasi properti bagi yang tidak punya waktu. Layanan LandX sangat baik, kinerja investasi sangat memuaskan, aplikasi mudah digunakan, plus saya dapat memeriksa investasi saya kapan saja!"
			},
			{
					'img': "./images/testimonyProfilePicture.webp",
					'name': "Herbert",
					'testimony': "Walaupun sempat ARA di awal IPO (Initial Public Offering), saham Bukalapak kini terus mengalami ARB, membuat banyak investor merasa dirugikan oleh hal ini."
			}
	];

    const settings = {
        dots: true,
        arrows: type === 'artikel' ? false : true,
        slidesToShow: type === 'artikel' ? 3 : 1,
        autoplay: type === 'artikel' ? false : true,
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
            {type === 'artikel' ? 
                dummy.map(data => (  
                    <Box className="card-border" key={data.tag}>
                        <Box className="card-body">
                            <Typography color="secondary" style={{ fontSize: `11px`}}>
                                {data.tag}
                            </Typography>
                            <Typography color="secondary" className="article-title">
                                {data.title}
                            </Typography>
                            <Typography color="secondary" style={{ height:`9rem` }}>
                                {data.description}
                            </Typography>

                            <Box className="read-more">
                                <Link href="">
                                    <Typography color="primary" style={{ fontWeight: 600 }}>
                                        Selengkapnya di blog
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                ))
                : 
									dummyTesti.map(data => (  
										<Box className="card-border" key={data.name}>
											<Box style={{ borderRadius:`12px`, padding:`15px 15px`, textAlign:`-webkit-center`}}>
												<img 
													src={ data.img } 
													alt="Review keuntungan jangka panjang investasi di LandX" 
													title="Review keuntungan jangka panjang investasi di LandX" 
													style={{ width:`96px` }}
												/>

												<Box>
													<Typography color="secondary" style={{ fontWeight: 600 }}>
														{ data.name }
													</Typography>
													<Typography color="secondary">
														{ data.testimony }
													</Typography>
												</Box>
											</Box>
										</Box>
									))
            }
        </Slider>
    )
}

Carousel.defaultProps = {
    datas: [],
    type:``
}

Carousel.propTypes = {
    datas: PropTypes.array,
    type: PropTypes.string
}

export default Carousel


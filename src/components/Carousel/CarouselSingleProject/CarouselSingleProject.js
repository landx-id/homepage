import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselSingleProject.scss';

const CarouselSingleProject = ({ data }) => {
  const [caraousel1, setCaraousel1] = useState('')
  const [caraousel2, setCaraousel2] = useState('')
  const [nameProject, setNameProject] = useState()

  useEffect(() => {
    spiltNameProject()
  }, [data?.token])

  const spiltNameProject = () => {
    setNameProject(data?.token?.name.split('-'))
  }

  return (
    <div className='container-carousel-project'>
      <Slider
        asNavFor={caraousel2}
        ref={slider1 => setCaraousel1(slider1)}
        arrows={false}
      >
        {data && data.previewImages.map((prevImage, i) => {
          return (
            <img src={prevImage} alt="projects" key={i} style={{ cursor: 'pointer' }} />
          )
        })}
      </Slider>
      <Slider
        asNavFor={caraousel1}
        ref={slider2 => setCaraousel2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        arrows={false}
        focusOnSelect={true}
      >
        {data && data.previewImages.map((prevImage, i) => {
          return (
            <img src={prevImage} key={i} style={{ cursor: 'pointer' }} alt={`Miliki bisnis ${nameProject && nameProject[0]} cuma dengan 1 jutaan aja`} title={`Cara jadi owner bisnis ${nameProject && nameProject[0]} hanya dengan modal 1 juta. Temukan bisnis terbaik dari berbagai sektor mulai dari fnb, jasa, ritel dan berbagai bisnis lainnya hanya di landx`} />
          )
        })}
      </Slider>
    </div>
  )
}

export default CarouselSingleProject

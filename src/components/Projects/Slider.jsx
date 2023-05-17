import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import ima1 from '../files/project_img/BAMXweb.png';
import ima2 from '../files/project_img/KAMA_KART.png';
import ima3 from '../files/project_img/BAMXapp.png';
import ima4 from '../files/project_img/minsait.png';
import ima5 from '../files/project_img/AMK.png';

let data = [
    {
        img : ima1,
        description: "BAMX webpage",
        disc : "A webpage to digitize and speed up the process of recollection of the food bank in Morelos ",
        viewing: "sa"
    },
    {
        img : ima2,
        description: "Project KAMA-Kart",
        disc : "Video game where the user interacts with AI serving as a moderator to keep the AI satisfied",
        viewing: ""
    },
    {
        img : ima3,
        description: "BAMX app",
        disc : "Mobile app for android users to digitize and facilitate the recollection of donated products to the food bank in Morelos.",
        viewing: "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png"

    },
    {
        img : ima4,
        description: "MINSAIT",
        disc : "Video game that evaluates the soft skills of an eligible candidate for a job in MINSAIT.",
        viewing: "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png"
    },
    {
        img : ima5,
        description: "Project AMK",
        disc : "Monitor a plant's humidity, temperature, and sun exposure through a web page.",
        viewing : "c"

    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #8377D1;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
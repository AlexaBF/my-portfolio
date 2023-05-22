import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import ima1 from '../files/project_img/BAMXweb.png';
import pdf1 from '../files/project_pdf/BAMXweb.pdf'
import ima2 from '../files/project_img/KAMA_KART.png';
import pdf2 from '../files/project_pdf/KAMA_KART.pdf';
import ima3 from '../files/project_img/BAMXapp.png';
import pdf3 from '../files/project_pdf/BAMXapp.pdf';
import ima4 from '../files/project_img/minsait.png';
import pdf4 from '../files/project_pdf/minsait.pdf';
import ima5 from '../files/project_img/AMK.png';
import pdf5 from '../files/project_pdf/AMK.pdf';

let data = [
    {
        img : ima1,
        description: "BAMX webpage",
        disc : "A webpage to digitize and speed up the process of recollection of the food bank in Morelos ",
        viewing: pdf1
    },
    {
        img : ima2,
        description: "Project KAMA-Kart",
        disc : "Video game where the user interacts with AI serving as a moderator to keep the AI satisfied",
        viewing: pdf2
    },
    {
        img : ima3,
        description: "BAMX app",
        disc : "Mobile app for android users to digitize and facilitate the recollection of donated products to the food bank in Morelos.",
        viewing: pdf3

    },
    {
        img : ima4,
        description: "MINSAIT",
        disc : "Video game that evaluates the soft skills of an eligible candidate for a job in MINSAIT.",
        viewing: pdf4
    },
    {
        img : ima5,
        description: "Project AMK",
        disc : "Monitor a plant's humidity, temperature, and sun exposure through a web page.",
        viewing : pdf5

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
        className='back'><IoIosArrowBack style={{width:'1.5rem',height:'1.5rem'}}/></button>
        <button
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward style={{width:'1.5rem',height:'1.5rem'}}/></button>
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
    background-color: rgba(80, 80, 80, 0.3);
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
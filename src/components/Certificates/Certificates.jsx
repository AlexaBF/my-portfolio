import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import CertificateSlider from './CertificateSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let certificates = [
    {
        name : "Extended Reality for Everybody",
        position : "Coursera: University of Michigan",
        img_url: "https://3.bp.blogspot.com/-e-LnrzDUjK8/VUNo_iO1NUI/AAAAAAAAAFc/CBpscZaPOtc/s1600/coursera.png",
        link : "https://coursera.org/share/3bb6651bfbcdcbe98902ddfb759b0fdf",
        disc: `This specialization is designed to be a broad learning experience around all things augmented, virtual, and mixed reality.
        The 3 courses cover the fundamental concepts of XR, how to design and develop XR applications, how to discuss the emerging key issues in the landscape of XR, and how to bring XR into instructional settings.`
    },
    {
        name : "CCNA: Introduction to Networks",
        position : "Cisco",
        img_url : "https://unitelformacion.com/wp-content/uploads/2014/02/Cisco_CCNA_Logo512.png",
        link: "https://www.credly.com/badges/a8ce7bda-58e6-40c9-8507-8cc24db704f5?source=linked_in_profile",
        disc : `An entry-level information technology (IT) certification issued by networking hardware company Cisco.
        The CCNA is designed to validate your knowledge on fundamental networking concepts often requested in networking roles in IT positions.`
    },
    {
        name : "Scrum Fundamentals Certified (SFC™)",
        position : "SCRUMstudy",
        img_url : "https://www.scrumstudy.com/Scrum-Images/brand-logo/badge-SFC.png",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=830612",
        disc : `Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum;
        learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.`
    },
    {
        name : "Python for Everybody",
        position : "Coursera: University of Michigan",
        img_url : "https://3.bp.blogspot.com/-e-LnrzDUjK8/VUNo_iO1NUI/AAAAAAAAAFc/CBpscZaPOtc/s1600/coursera.png",
        link:"https://coursera.org/share/0f2fb6ad19f40b3c52debf3df9e32b3e",
        disc : `This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures,
         networked application program interfaces, and databases, using the Python programming language.`
    },
    {
        name : "Object-Oriented Data Structures in C++",
        position : "Coursera: University of Illinois",
        img_url : "https://3.bp.blogspot.com/-e-LnrzDUjK8/VUNo_iO1NUI/AAAAAAAAAFc/CBpscZaPOtc/s1600/coursera.png",
        link: "https://coursera.org/share/b9809bce3958f8f4c13933384b069971",
        disc : `How to write a program in the C++ language, including how to set up a development environment for writing and debugging C++ code and how to implement data structures as C++ classes.`
    },
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Certificates = () => {
    const arrowRef = useRef(null);
    let certificateDisc = "";
    certificateDisc = certificates.map((item, i) => (
        <CertificateSlider item={item} key={i}/>
    ))
  return (
    <Container id='education'>
        <Slide direction="left">
            <span className="purple">Education</span>
            <h2>and Certificates</h2>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {certificateDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack style={{height:'1.25rem',width:'1.25rem'}}/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward style={{height:'1.25rem',width:'1.25rem'}}/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Certificates

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #8377D1;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #8377D1;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`
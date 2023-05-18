import React from 'react'
import styled from 'styled-components';
import Popup from 'reactjs-popup';

const Project = (props) => {
    const { img, description,disc,viewing } = props.item;
    var w = window.innerWidth;
    var h = window.innerHeight;

  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>{description}</h1>
            <p>{disc}
            <Popup trigger={<button className="button"> More Info </button>} modal>
                <div className="modal">
                    <div className="modalContent">
                        <iframe title="frame" src={viewing} style={{ width:w/2, height:h, border:'3px solid #8377D1'}} frameborder="1" ></iframe>
                    </div>
                </div>
            </Popup>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    .button{
        background:none;
        border:none;
        color:#8377D1;
        text-decoration:underline;
        cursor: pointer;
    }



    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

    

`
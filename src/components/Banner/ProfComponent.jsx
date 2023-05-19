import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Pdf from '../files/Resume.pdf';

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="purple">My name is</span>
          </h4>
          <h1 className="purple">Alexa Basurto Flores</h1>
          <h3>Engineer in Computer Science and Technology</h3>
          <p>
            I am pursuing a B.S. in Computer Science and Technology.
            I'm interested in creating VR and AR experiences as well as the creation of Apps for IOS and Android.
            📚 I’m currently studying at Instituto Tecnológico de Monterrey
            🌱 I’m currently learning about XR technologies
          </p>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            <button>My Resume</button>
          </a>
          
          <Social>
            <p>Check out my : </p>
            <div className="social-icons">

              <span>
                <a href="https://github.com/AlexaBF" target="_blank" rel="noopener noreferrer">
                  <AiOutlineGithub />
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/in/alexa-bf/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://media.licdn.com/dms/image/C4E03AQGpsRe3DeRJUg/profile-displayphoto-shrink_400_400/0/1648145491682?e=1689206400&v=beta&t=MnALh2QJdLk6uzKLnSHajx_Dx5P3qwZjS15xhBIXoco"
            alt="profile"
          />
        </Profile>
      </Slide>
     </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #8377D1;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #8377D151);
    :hover {
      filter: drop-shadow(0px 10px 10px #8377D170);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #8377D1;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #8377D170);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

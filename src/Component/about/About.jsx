import React from 'react'
import './about.css'
import Award from '../../img/award.png'
import { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ThemeContext } from '../../Contex';
const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



    return (
        <div id="about">
      <div className="about cen">
        <h1 id='abt' className="pt-3 text-center font-details pb-2 mb-5 mt-5 "  style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}>ABOUT ME</h1>
        <Container className='cen'>
          <Row className=" pb-5 align-items-center">
            <Col xs={1} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image id='img' className="profile justify-content-end " alt="profile" src={Profile}  />
              </Row>
            </Col>
            <Col xs={1} md={6}className='cen' >
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left cen " >
                <br />Web Developer with expertise of React.js, Redux, Cloud Firestore, HTML and CSS. currently learning  to expert full stack Development.
                <br /><br/>
                I am passionate programmer and a learner, born and brought up in Nagpur Maharashtra.Currently, I have one year of experience as react-js developer .
                <br />
                {/* <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br /> */}
                <Col md={12}  className="d-flex justify-content-center flex-wrap mt-5 cen ">
                  <div>
                    <a href="#c">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1e25LlMhkTPj4BwkhXXKHvZsziwsUDaTgU4gPsIHzKIY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/rohitrion" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/rohit-gajbhiye/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default About
import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aboutus from "../../../assets/Images/About/phil.webp";
import { BsDownload } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div id="About"></div>
      <div className="container">
        <div className="about heading " data-aos="fade-right">
          <Row className="about-main">
            <Col md={5}>
              <div className="about-img ">
                <Image
                  data-aos="flip-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  className="d-block img-fluid mx-auto rounded-circle"
                  src={Aboutus}
                  alt="Headshot of Phil Ernst"
                  width="804"
                  height="804"
                />
                <div className="text-center about-name">
                  <h2>Phil Ernst</h2>
                  <p>Software Engineer</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="abouttextbox">
              <div>
                <h2 className="about-title">About Me</h2>
                <p className="about-subtitle">
                  I'm a problem solver who builds web solutions that users enjoy
                  interacting with. At GitHub I launch web pages and hone the launch process. At CUED-In Inc, I redesigned marketing pages resulting in a 50% increase in user engagement using Tailwind UI components. As a Software Engineer at James Madison University, I collaborated with cross-functional teams to develop technical modules and features for enterprise ERP software.





                </p>
              </div>
              <div className="about-psl-info">
                <h3 className="about-sub-info">Personal Info</h3>
                <Row>
                  <Col lg={4} md={4} sm={4}>
                    <div className="about-list">
                      <span className="perName1">Name : </span>
                      <span className="perName2">Phil Ernst</span>
                    </div>
                    <div className=" about-list ">
                      <span className="perName1">Location : </span>
                      <span className="perName2">Virginia, USA</span>
                    </div>
                    <div className="about-list">
                      <span className="perName1">Ice Cream: </span>
                      <span className="perName2">Double Dunker</span>
                    </div>
                  </Col>
                  <Col>
                    <div className=" about-list">
                      <span className="perName1">LinkedIn : </span>
                      <span className="perName2">
                        <a href="https://www.linkedin.com/in/phil-ernst/">
                          linkedin.com/in/phil-ernst
                        </a>
                      </span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">GitHub : </span>
                      <span className="perName2">
                        <a href="https://github.com/philernst">
                          github.com/philernst
                        </a>
                      </span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">E-mail : </span>
                      <span className="perName2">
                        <a href="mailto:phil@philernst.com">
                          phil@philernst.com
                        </a>
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* <a href="./Phil_Ernst_resume.pdf" download>
                <button className="BtnView resumeButton">
                  Resume <BsDownload size={15} role="presentation" />
                </button>
              </a>  */}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;

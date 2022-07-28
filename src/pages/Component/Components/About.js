import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aboutus from "../../../assets/Images/About/phil.jpg";
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
                  alt='Headshot of Phil Ernst'
                />
                <div className="text-center About-name">
                  <h6>Phil Ernst</h6>
                  <p>Software Engineer</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="abouttextbox">
              <div>
                <h2 className="about-title">About Me</h2>
                <p className="about-subtitle">
                  Software Engineer with experience building beautiful software.
                  Skilled in React, NodeJS, JavaScript, HTML, CSS, PeopleCode
                  (Java-like language), SQL, SQR, and IT Service Management.
                  Strong information technology professional with an MBA from
                  James Madison University.
                </p>
              </div>
              <div className="about-psl-info">
                <h3 className="about-sub-info">Personal Info</h3>
                <Row>
                  <Col>
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
                        linkedin.com/in/phil-ernst
                      </span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">GitHub : </span>
                      <span className="perName2">github.com/ernstpf</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">E-mail : </span>
                      <span className="perName2">phil@philernst.com</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <a href="./Phil_Ernst_resume.pdf" download>
                <button className="BtnView">
                  Resume <BsDownload size={15} />
                </button>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Aboutus from "../../../assets/Images/About/phil.jpg";

const About = () => {
  return (
    <>
      <div className="container" id="About">
        <div className="about headding " data-aos="fade-right">
          <Row className="about-main">
            <Col md={5}>
              <div className="about-img ">
                <Image
                  data-aos="flip-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  className="d-block img-fluid mx-auto rounded-circle"
                  src={Aboutus}
                />
                <div className="text-center About-name">
                  <h6>Phil Ernst</h6>
                  <p>Software Engineer</p>
                </div>
              </div>
            </Col>
            <Col md={7} className="abouttextbox">
              <div>
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                  It is a long established fact that a reader will be distracted
                  by the eadable content of a page when looking at its layout.
                  The point of using Lorem Ipsum th that it has a ore-or-less
                  normal distributi.
                </p>

                <p className="about-subtitle">
                  content here', making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by
                  accident
                </p>
              </div>
              <div className="about-psl-info">
                <h1 className="about-sub-info">Personal Info</h1>
                <Row>
                  <Col>
                    <div className="about-list">
                      <span className="perName1">Name : </span>
                      <span className="perName2">Phil Ernst</span>
                    </div>

                    <div className="about-list">
                      <span className="perName1">Age : </span>
                      <span className="perName2">24 Years</span>
                    </div>
                    <div className="about-list">
                      <span className="perName1">Nationality : </span>
                      <span className="perName2">USA</span>
                    </div>
                    <div className="about-list">
                      <span className="perName1">Freelance : </span>
                      <span className="perName2">Available</span>
                    </div>
                  </Col>
                  <Col>
                    <div className=" about-list ">
                      <span className="perName1">Address : </span>
                      <span className="perName2"> California, USA</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">Phone : </span>
                      <span className="perName2">258-963-1472</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">Skype : </span>
                      <span className="perName2">Deteryplakson22</span>
                    </div>
                    <div className=" about-list">
                      <span className="perName1">E-mail : </span>
                      <span className="perName2">Plakson@gmail.com</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <button className="BtnView">Download CV</button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;

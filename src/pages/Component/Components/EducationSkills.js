import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const degrees = [
  {
    school: "James Madison University",
    type: "M.B.A.",
    concentrations: ["Concentration: Info. Security"],
  },
  {
    school: "James Madison University",
    type: "B.S.",
    concentrations: [
      "Major: Computer Science",
      "Major: Media Arts & Design",
    ],
  },
];

const EducationSkills = () => {
  return (
    <>
      <div className="educationSkill headding">
        <h1 className="text-center title">Education &amp; Skills</h1>
      </div>
      <div>
        <Container>
          <Row className="education-box-main">
            <Col lg={4} md={4} className="educationColBox">
              <div className="education-box">
                {degrees.map((degree, index) => (
                  <>
                    <div className="education">
                      <h6>{degree.school}</h6>
                      <h2>{degree.type}</h2>
                      {degree.concentrations.map((concentration) => (
                        <h3>{concentration}</h3>
                      ))}
                    </div>
                    {index !== degrees.length - 1 ? <hr /> : ""}
                  </>
                ))}
              </div>
            </Col>
            <Col lg={8} md={8}>
              <div className="skill-bar">
                <Row className="skill-box">
                  <Col xs={1}>
                    <span>90%</span>
                  </Col>
                  <Col>
                    <div className="bar">
                      <div className="info">
                        <span>HTML</span>
                      </div>
                      <div className="progress-line html">
                        <span></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="skill-bar">
                <Row className="skill-box">
                  <Col xs={1}>
                    <span>75%</span>
                  </Col>
                  <Col>
                    <div className="bar">
                      <div className="info">
                        <span>React js</span>
                      </div>
                      <div className="progress-line reactjs">
                        <span></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="skill-bar">
                <Row className="skill-box">
                  <Col xs={1}>
                    <span>85%</span>
                  </Col>
                  <Col>
                    <div className="bar">
                      <div className="info">
                        <span>Wordpress</span>
                      </div>
                      <div className="progress-line Wordpress">
                        <span></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="skill-bar">
                <Row className="skill-box">
                  <Col xs={1}>
                    <span>88%</span>
                  </Col>
                  <Col>
                    <div className="bar">
                      <div className="info">
                        <span>UI/UX</span>
                      </div>

                      <div className="progress-line ui-ux">
                        <span></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="skill-bar">
                <Row className="skill-box">
                  <Col xs={1}>
                    <span>70%</span>
                  </Col>
                  <Col>
                    <div className="bar">
                      <div className="info">
                        <span>Css3</span>
                      </div>
                      <div className="progress-line css3">
                        <span></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EducationSkills;

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

const skills = [
  {
    title: "HTML",
    percent: "90",
  },
  {
    title: "React.JS",
    percent: "80",
  },
  {
    title: "Node.JS",
    percent: "75",
  },
  {
    title: "JavaScript",
    percent: "90",
  },
  {
    title: "CSS3",
    percent: "75",
  },
];

const EducationSkills = () => {
  return (
    <>
    <div id="Skills"></div>
      <div className="educationSkill heading">
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
            {skills.map((skill) => (
              <div className="skill-bar">
                <Row className="skill-box">
                  <Col xs={1}>
                    <span>{skill.percent}%</span>
                  </Col>
                  <Col>
                    <div className="bar">
                      <div className="info">
                        <span>{skill.title}</span>
                      </div>
                      <div className={`progress-line width${skill.percent}`}>
                        <span></span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EducationSkills;

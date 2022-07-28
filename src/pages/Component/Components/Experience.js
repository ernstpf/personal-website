import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const jobs = [
  {
    title: "Front End/Full Stack Engineer",
    employer: "CUED-In Inc.",
    dates: "2020 - present",
    description:
      "Build job posting web app using React, Node for startup. Collaborate with engineers and designers to plan and code functionality. https://cuedin.us",
  },
  {
    title: "Software Engineer",
    employer: "James Madison University",
    dates: "2015 – present",
    description:
      "Support enterprise-wide software. Collaborate with business analysts, designers, and users to understand requirements to create or enhance features. Develop applications based on technical requirements using a Java-like language (PeopleCode), SQR, SQL, and shell scripting",
  },
  {
    title: "Web Developer",
    employer: "James Madison University",
    dates: "2012 – 2015",
    description:
      "Developed websites (10+ per year) using Cascade CMS with HTML, CSS, JavaScript, and Velocity. Collaborated with designers and users to build and maintain websites. Designed and coded reusable features used across multiple websites",
  },
];

const Experience = () => {
  return (
    <>
    <div id="Experience"></div>
      <div className="exp-main heading">
        <div className="exp">
          <h2 className="text-center title">Experience</h2>
        </div>
        <Container>
          <Row>
            {jobs.map((job) => (
              <Col lg={4} md={4} sm={4} key={job.title}>
                <div className="exp-card" data-aos="flip-left">
                  <Card className="exp-block">
                    <Card.Body className="exp-body">
                      <Card.Title className="exp-title" role="heading">
                        {job.title}
                        <p>
                          {job.dates} | {job.employer}
                        </p>
                      </Card.Title>
                      <hr />
                      <Card.Text className="exp-text">
                        {job.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Experience;

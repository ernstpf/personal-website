import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer heading" id="Contact">
          <div className="footer-head">
            <Container>
              <Row>
                <Col lg={6} md={12}>
                  <div className="f-left">
                    <div className="f-content">
                      <h1 className="F-contact">Contact Me</h1>
                    </div>
                    <div className="">
                      <h6 className="f-icon">
                        <i className="icon">
                          <BsEnvelope size={20} />
                        </i>
                        <a href="mailto:phil@philernst.com">
                          phil@philernst.com
                        </a>
                      </h6>
                      <h6 className="f-icon">
                        <i className="icon">
                          <BsLinkedin size={20} />
                        </i>
                        <a
                          href="https://www.linkedin.com/in/phil-ernst/"
                          target="_blank"
                        >
                          linkedin.com/in/phil-ernst
                        </a>
                      </h6>
                      <h6 className="f-icon">
                        <i className="icon">
                          <BsGithub size={20} />
                        </i>
                        <a href="https://github.com/ernstpf" target="_blank">
                          github.com/ernstpf
                        </a>
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} className="f-end">
                  <Row>
                    <Col xl={12} md={12} lg={12} sm={12}>
                      <div>
                        <form className="row g-3 needs-validation formContactus">
                          <div className="col-md-6  col-sm-6 col-6">
                            <input
                              type="text"
                              className="form-control inputbox "
                              id="validationCustom01"
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div className="col-md-6  col-sm-6 col-6">
                            <input
                              type="text"
                              className="form-control inputbox"
                              id="validationCustom01"
                              placeholder="Phone"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                            <input
                              type="text"
                              className="form-control inputbox"
                              id="validationCustom02"
                              placeholder="E-mail"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                            <input
                              type="text"
                              className="form-control inputbox "
                              id="validationCustom01"
                              placeholder="Subject"
                              required
                            />
                          </div>

                          <div className="col-md-12">
                            <textarea
                              type="text"
                              className="form-control inputboxmessage inputbox"
                              id="validationCustom03"
                              placeholder="Meassage*"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a Send Meassage.
                            </div>
                          </div>

                          <div className="col-12 ">
                            <button className="send-btn button float-start">
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
        <div className="f-link">Copyright © 2022. All Rights Reserved.</div>
      </>
    );
  }
}

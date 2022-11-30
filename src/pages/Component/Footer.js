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
                      <h2 className="f-contact">Contact Me</h2>
                    </div>
                    <div>
                      <h3 className="f-icon">
                        <i className="icon" role="presentation">
                          <BsEnvelope size={20} role="presentation" />
                        </i>
                        <a href="mailto:phil@philernst.com">
                          phil@philernst.com
                        </a>
                      </h3>
                      <h3 className="f-icon">
                        <i className="icon" role="presentation">
                          <BsLinkedin size={20} role="presentation" />
                        </i>
                        <a
                          href="https://www.linkedin.com/in/phil-ernst/"
                          target="_blank"
                          aria-label="Opens in new tab"
                        >
                          linkedin.com/in/phil-ernst
                        </a>
                      </h3>
                      <p className="f-icon">
                        <i className="icon" role="presentation">
                          <BsGithub size={20} role="presentation" />
                        </i>
                        <a
                          href="https://github.com/philernst"
                          target="_blank"
                          aria-label="Opens in new tab"
                        >
                          github.com/philernst
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} className="f-end">
                  <Row>
                    <Col xl={12} md={12} lg={12} sm={12}>
                      <div>
                        <form className="row g-3 needs-validation formContactus">
                          <div className="col-md-6 col-sm-6 col-12">
                            <label for="name" class="visuallyhidden">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control inputbox "
                              id="name"
                              placeholder="Name"
                              aria-required="true"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                          <label for="phone" class="visuallyhidden">Phone</label>
                            <input
                              type="text"
                              className="form-control inputbox"
                              id="phone"
                              placeholder="Phone"
                              aria-required="true"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                          <label for="email" class="visuallyhidden">E-mail</label>
                            <input
                              type="text"
                              className="form-control inputbox"
                              id="email"
                              placeholder="E-mail"
                              aria-required="true"
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                          <label for="subject" class="visuallyhidden">Subject</label>
                            <input
                              type="text"
                              className="form-control inputbox "
                              id="subject"
                              placeholder="Subject"
                              aria-required="true"
                              required
                            />
                          </div>

                          <div className="col-md-12">
                          <label for="message" class="visuallyhidden">Message</label>
                            <textarea
                              type="text"
                              className="form-control inputboxmessage inputbox"
                              id="message"
                              placeholder="Meassage*"
                              aria-required="true"
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

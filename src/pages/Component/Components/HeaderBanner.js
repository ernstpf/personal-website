import React, { useEffect } from 'react'
import Banner from '../../../assets/Images/Banner/Banner.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
const HeaderBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div id="Home">
                <div className="banner-img">
                    <span className=" ">
                        <div className="">
                            <img
                                src={Banner}
                                className="img-fluid  mx-auto width: 100% "
                                alt="Headshot of Phil Ernst"
                                width="1920"
                                height="800"
                            ></img>
                        </div>
                    </span>
                    <div className="img-bnr-text ">
                        <div>
                            <p className="job-title" data-aos="fade-down">
                                Web Producer
                            </p>

                            <h1 data-aos="flip-down">Phil Ernst</h1>

                            <Container>
                                <Row>
                                    <Col md={7} sm={12}>
                                        <p data-aos="fade-up">
                                            I&apos;m passionate about creating
                                            truly beautiful digital solutions.
                                            that give users a memorable digital
                                            experience.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>

                            <a href="#About">
                                <button data-aos="fade-up" className="BtnView">
                                    VIEW MORE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBanner

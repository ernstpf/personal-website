import React, { useEffect } from "react";
import Banner from "../../../assets/Images/Banner/Banner.png";
import Aos from "aos";
import "aos/dist/aos.css";
const HeaderBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="Home">
        <div className="banner-img">
          <span className=" ">
            <div className="">
              <img
                src={Banner}
                className=" img-fluid  mx-auto width: 100% "
                alt="Banner"
              ></img>
            </div>
          </span>
          <div className="img-bnr-text ">
            <div>
              <h5 data-aos="fade-down">Software Engineer</h5>

              <h1 data-aos="flip-down">Phil Ernst</h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod
                <br />
                tempor incididunt ut dolor the sit amet consectetur adipisicing
                <br />
                elit sed do consectetur labore et dolo...
              </p>
              <button data-aos="fade-up" className="BtnView">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;

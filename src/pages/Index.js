import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import HeaderBanner from "./Component/Components/HeaderBanner";
import Aboutus from "./Component/Components/About";
import "./../index.css";
import Experience from "./Component/Components/Experience";
import EducationSkills from "./Component/Components/EducationSkills";
import ScrollButton from "./Component/ScrollButton";
const Index = () => {
  return (
    <div className="App">
      <Header />
      <HeaderBanner />
      <Aboutus />
      <Experience/>
      <EducationSkills/>
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default Index;

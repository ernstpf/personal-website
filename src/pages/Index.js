import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import HeaderBanner from "./Component/Components/HeaderBanner";
import Aboutus from "./Component/Components/About";
import "./../index.css";
import Service from "./Component/Components/Service";
import Experience from "./Component/Components/Experience";
import EducationSkills from "./Component/Components/EducationSkills";
import MyPortfolio from "./Component/Components/MyPortfolio";
import RecentArtical from "./Component/Components/RecentArtical";
import CustomerReview from "./Component/Components/CustomerReview";
import ScrollButton from "./Component/ScrollButton";
const Index = () => {
  return (
    <div className="App">
      <Header />
      <HeaderBanner />
      <Aboutus />
      {/* <Service /> */}
      <Experience/>
      <EducationSkills/>
      {/* <MyPortfolio/> */}
      {/* <CustomerReview/> */}
      {/* <RecentArtical/> */}
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default Index;

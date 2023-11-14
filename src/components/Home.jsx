import React from "react";
import MyNavbar from "./Navbar";
import BannerComponent from "./BannerComponent";
import Whatislife from "./whatislife";
import Benefitsoflife from "./benefitsoflife";
import Footer from "./footer";

const Home = (props) => {
  return (
    <>
      <MyNavbar />
      <hr className="horizontal-line"/>
      <BannerComponent />
      <Whatislife />
      <Benefitsoflife />
      <Footer />
    </>
  );
};

export default Home;

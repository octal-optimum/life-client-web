import React from "react";
import MyNavbar from "./Navbar";
import BannerComponent from "./BannerComponent";
import Whatislife from "./whatislife";
import Benefitsoflife from "./benefitsoflife";
import Footer from "./footer";
import BasicExample from "./helpsupport";
import Helpsupport from "./helpsupport";

const Home = (props) => {
  return (
    <>
      <MyNavbar />
     
      <BannerComponent />
      <Whatislife />
      <Benefitsoflife />
    
     <Helpsupport />
      <Footer />
    </>
  );
};

export default Home;

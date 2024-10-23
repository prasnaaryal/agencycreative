import { Button } from "@/components/ui/button";
import Footer from "@/layout/Footer";

import Header from "@/layout/header";
import React from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import OurPortfolio from "./components/OurPortfolio";
import OurServices from "./components/OurServices";
import Testomonials from "./components/Testomonials";

const index = () => {
  return (
    <div>
      <Header />
      <main className="bg-white space-y-20">
        <Banner />
        <AboutUs />
        <OurServices />
        <OurPortfolio />
        <Testomonials />
      </main>
      <Footer />
    </div>
  );
};

export default index;

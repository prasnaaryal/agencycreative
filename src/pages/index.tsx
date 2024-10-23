import { Button } from "@/components/ui/button";
import Footer from "@/layout/Footer";

import Header from "@/layout/header";
import React from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import OurPortfolio from "./components/OurPortfolio";
import OurServices from "./components/OurServices";

const index = () => {
  return (
    <div>
      <Header />
      <main className="bg-white space-y-10">
       <Banner/>
       <AboutUs/>
       <OurServices/>
       <OurPortfolio/>
    </main>
      <Footer />
    </div>
  );
};

export default index;

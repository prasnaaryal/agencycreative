import { Button } from "@/components/ui/button";
import Footer from "@/layout/Footer";

import Header from "@/layout/header";
import React from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";

const index = () => {
  return (
    <div>
      <Header />
      <main className="bg-white">
       <Banner/>
       <AboutUs/>
    </main>
      <Footer />
    </div>
  );
};

export default index;

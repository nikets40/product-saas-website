import React from "react";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import OurExperts from "./components/OurExperts";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Header />

      <Hero />

      <Features />

      <Benefits/>

      <OurExperts/>

      <Blogs/>

      <Footer/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { DownloadApp } from "./components/downloadApp";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Team } from "./components/Team";
import { Hero } from "./components/hero";
import FAQPage from "./components/faq";
import { Awards } from "./components/awards";
import { Industries } from "./components/industries";
import { Cities } from "./components/cities";
import Widget from "./components/widget";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      {/* <Hero/> */}
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Awards />
      <Team data={landingPageData.Team} />
      <DownloadApp data={landingPageData.DownloadApp}/>
      <Industries />
      <Cities />
      <Testimonials data={landingPageData.Testimonials} />
      <FAQPage />
      <Contact data={landingPageData.Contact} />
      <Widget />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { DownloadApp } from "./components/downloadApp";
import { Contact } from "./components/contact";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import "./App.css";
import AllFeature from "./components/allFeature";
import Choose from "./components/choose";
import Common from "./components/common";
import { Industries } from "./components/industries";
import { Cities } from "./components/cities";
import { Testimonials } from "./components/testimonials";
import FAQPage from "./components/faq";
import Widget from "./components/widget";
import { Awards } from "./components/awards";

const App = () => {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  if (!landingPageData) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <About data={landingPageData.About} />
                <Choose data={landingPageData.Services} />

                <Features data={landingPageData.Features} />
                <Awards />

                <Gallery data={landingPageData.Gallery} />
                <Services data={landingPageData.Services} />

                <Team data={landingPageData.Team} />
                <DownloadApp data={landingPageData.DownloadApp} />
                <Industries />
                <Cities />
                <Testimonials data={landingPageData.Testimonials} />
                <FAQPage />
                <Contact data={landingPageData.Contact} />
                <Widget data={landingPageData.Widget}/>
              </>
            }
          />
          <Route
            path="/features"
            element={
              <AllFeature
                data={landingPageData.AllFeature}
                societyInfo={landingPageData.SocietyInfo}
              />
            }
          />
          <Route path="/common/:section" element={<Common />} /> {/* Moved inside Routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

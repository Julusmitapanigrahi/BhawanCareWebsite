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
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Choose data={landingPageData.Choose} />
                <Gallery data={landingPageData.Gallery} />
                <Team data={landingPageData.Team} />
                <DownloadApp data={landingPageData.DownloadApp} />
                <Contact data={landingPageData.Contact} />
              </>
            }
          />
          <Route
            path="/features"
            element={ <AllFeature
              data={landingPageData.AllFeature}
              societyInfo={landingPageData.SocietyInfo}
            />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

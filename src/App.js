import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import {
  getLocalThemeData,
  setLocalThemeData,
  updateSiteTheme,
} from "./utils/updateTheme";
import { localStorageKeys } from "./utils/constant";
import Display from "./pages/Display";

const App = () => {
  useState(() => {
    const currentSiteTheme = getLocalThemeData(localStorageKeys.selectedTheme);
    if (!currentSiteTheme) {
      const data = { theme: 0 };
      setLocalThemeData(data, true);
      updateSiteTheme();
    } else {
      updateSiteTheme();
    }
  }, []);
  return (
    <Layout>
      <>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/display" element={<Display />} />
          <Route element={<NotFound />} />
        </Routes>
      </>
    </Layout>
  );
};

export default App;

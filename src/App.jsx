import React, { Fragment, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ActionsPage from "./pages/ActionsPage";
import ThoughtsPage from "./pages/ThoughtsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import ContactPage from "./pages/ContactPage";

import Page404 from "./pages/Page404";
import { CommandLineInput } from "./globalstyles";
import LibraryPage from "./pages/LibraryPage";

const App = () => {
  const [showingCmdLn, toggleShowingCmdLn] = useState(false);

  return (
    <BrowserRouter style={{ position: "relative" }}>
      <Header />

      <Fragment>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/actions" element={<ActionsPage />} />
          <Route exact path="/thoughts" element={<ThoughtsPage />} />
          <Route exact path="/experiences" element={<ExperiencesPage />} />
          <Route exact path="/library" element={<LibraryPage />} />
          <Route exact path="/contact" element={<ContactPage />} />

          <Route exact path="/*" element={<Page404 />} />
        </Routes>
      </Fragment>

      {showingCmdLn && <CommandLineInput type="text" id="CmdLn" />}

      {document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "c" && e.ctrlKey && e.shiftKey) {
          e.preventDefault();
          e.Handled = true;
          toggleShowingCmdLn(!showingCmdLn);
          document.getElementById("CmdLn").focus();
          console.log(e);
        }
      })}
    </BrowserRouter>
  );
};

export default App;

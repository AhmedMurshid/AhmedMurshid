// === Patch: src/AppRoutes.js (wrap routes in SiteLayout) ===
// Replace the whole file with the following if you prefer the layout on all pages
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SiteLayout } from "./components";
import ParentComponent from "./ParentComponent";
import AssignmentTracker from "./nav/AssignmentTracker";
import NotesPage from "./nav/NotesPage";
import SearchPaper from "./nav/SearchPaper";
import Contact from "./nav/Contact.jsx";

export default function AppRoutes(){
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<ParentComponent />} />
          <Route path="/a1" element={<AssignmentTracker />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/search-paper" element={<SearchPaper />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
      </SiteLayout>
    </Router>
  );
}
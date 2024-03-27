import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./originalCode/pages/Home";
import Blogs from "./originalCode/pages/Blogs";
import NoPage from "./originalCode/pages/NoPage";
import Contact from "./originalCode/pages/Contact";
import {Animal} from "./originalCode/pages/Animal";

function App() {
  return (
      <BrowserRouter>
          <Routes>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="animal" element={<Animal/>} />
                  <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

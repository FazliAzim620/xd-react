import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChangeImage from "./components/ChangeImage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/change" element={<ChangeImage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

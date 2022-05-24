import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invoices } from "./routes/Invoices";
import Expenses from "./routes/Expenses";
import Invoice from "./routes/Invoice";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage";
import SinglePage from "./components/SinglePage/SinglePage";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/blog-website" element={<Homepage />}>
        <Route path="collection" element={<Expenses />} />
        <Route path="invoices"  element={<Invoices />} >
          <Route index element={
            <main style={{padding: '1rem'}}>
              <p>Select an Invoice</p>
            </main>
          } />
          <Route path=":invoiceID"  element={<Invoice />} />
        </Route>
        <Route
          path="*" 
          element={
            <main style={{ padding: '1rem'}}>
              <p>There's Nothing Here!</p>
            </main>
          } />
      </Route>
      <Route path="/blog-website/collection/:url" element={<SinglePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

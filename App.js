import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Nvabar/Navbar";
import { BrowserRouter } from "react-router";
import Router from "./src/routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./src/components/Footer/Footer";
import ScrollToTop from "./src/components/ScrollToTop";

const content = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
content.render(
  <div style={{ backgroundColor: "#F3F4F6", padding: "20px" }}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Router />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
);

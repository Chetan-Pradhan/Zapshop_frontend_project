import { useState } from "react";
import Navbar from "./Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Herosection from "./Herosection.jsx";
import Mainsection from "./Mainsection.jsx";
import ChatBot from "./chatBot.jsx";
import Footer from "./Footer.jsx";
import BacktoTop from "./BacktoTop.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Mainsection />
      <ChatBot />
      <BacktoTop />
      <Footer />
    </>
  );
}

export default App;

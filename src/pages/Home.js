import React, { useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import About from "../components/about";
import Demo from "../components/demo";

function Home() {
  return (
    <div id="app-wrapper">
      <Navbar />
      <Profile></Profile>
      <About></About>
      <Demo></Demo>
      <Footer id="footer"></Footer>
    </div>
  );
}

export default Home;

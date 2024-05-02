import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import About from "../components/about";
import Cv from "../components/cv";
import Demo from "../components/demo";

function Home() {
  return (
    <div>
      <Navbar />
      <Profile></Profile>
      <About></About>
      <Demo></Demo>
      <Cv></Cv>
      <Footer />
    </div>
  );
}

export default Home;

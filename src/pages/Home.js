import React from "react";
import Hero from "../components/Home/Hero";
import Specials from "../components/Home/Specials";
import Testimonials from "../components/Home/Testimonials";
import About from "../components/Home/About";

function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Home;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import SkillsSection from "./components/SkillsSection";
import Service from "./components/Service"
import Project from "./components/Projects"
import Hire from "./components/Hire"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import REVIEWS from "./components/REVIEWS"
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Service />
      <Project />
      <REVIEWS />
      <Hire />
      <Contact />
      <Footer />

    </>
  );
}

export default App;

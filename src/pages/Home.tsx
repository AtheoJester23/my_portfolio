import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { ReactLenis } from 'lenis/react'
import Cursor from "../components/cursor";
import AboutMe from "../components/Home_Sections/AboutMe";
import Introduction from "../components/Home_Sections/Introduction";
import Projects from "../components/Home_Sections/Projects";
import Backgrounds from "../components/Home_Sections/Background";
import DevKits from "../components/Home_Sections/DevKits";
import Contact from "../components/Home_Sections/Contact";

export const sectionHeight = 1500

const Home = () => {  
  return (
    <ReactLenis root>
      <motion.div>
        <Navbar/>
        <Cursor/>
        <AnimatePresence>
          <div>
              <section id="intro">
                <Introduction/>
              </section>

              <section id="about">
                <AboutMe/>
              </section>

              <section id="devKits">
                <DevKits/>
              </section>
              
              <section id="projects">
                <Projects/>
              </section>


              <section id="contact">
                <Contact/>
              </section>
          </div>

        </AnimatePresence>
      </motion.div>
    </ReactLenis>
  );
};

export default Home;

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react'
import Cursor from "../components/cursor";

export const sectionHeight = 1500

const Home = () => {
  const el = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: ["I'm Atheo Jester"],
      typeSpeed: 70,
      backSpeed: 25,
      loop: false,
      startDelay: 2023
    });

    return () => typed.destroy();
  }, []);
  
  return (
    <ReactLenis root>
      <motion.div>
        <Navbar/>
        <Cursor/>
        <AnimatePresence>
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[rgb(229,231,235)] h-[100vh] flex justify-center items-center max-sm:px-5 relative"
              id="intro"
            >
              <div className="flex flex-col">
                <div className="flex justfiy-center items-center">
                  <span ref={el} className="text-xl">
                    I'm Atheo Jester,
                  </span>
                </div>
                <motion.h1 className="text-3xl font-bold"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                    duration: 0.4,
                    delay: 4,
                    ease: "easeOut"
                  }}
                >
                  A full stack developer based on Bulacan, Philippines
                </motion.h1>
              </div>

              <div className="h-[20vh] "/>

              {/* <div className='absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-b from-zinc-950/0 to-[rgb(8,8,8)]'/> */}
            </motion.div>
            <div className="p-20 h-[200vh] bg-[rgb(8,8,8)]" id="about">
              <motion.h1 className="font-bold text-5xl text-white text-center p-10"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              >About Me</motion.h1>

              <div className="flex border border-white p-5">
                <p className="text-white text-3xl">I'm Atheo Jester -  Full-stack developer building fast, scalable, immersive digital experiences with creativity and engineering precision.</p>
                <div className="w-[50%] p-5 bg-white rounded text-[rgb(8,8,8)]">
                  <p>Name: Atheo Jester S. Baltazar</p>
                  <p>Email: atheojester@gmail.com</p>
                  <p>Age: 23</p>
                  <p>From: Bulacan, Philippines</p>
                  <button className="bg-[rgb(23,23,23)] text-white font-bold p-5 rounded w-full cursor-pointer">Download CV</button>              
                </div>
              </div>
            </div>
        </AnimatePresence>
      </motion.div>
    </ReactLenis>
  );
};

export default Home;

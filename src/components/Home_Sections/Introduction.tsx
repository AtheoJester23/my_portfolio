import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
 
const Introduction = () => {
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
            {/* <div className='absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-b from-zinc-950/0 to-[rgb(8,8,8)]'/> */}
        </motion.div>
    );
}
 
export default Introduction;
import { motion } from "framer-motion";

const navVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const DURATION = 0.15;
const STAGGER = 0.025;

const Navbar = () => {
    const opts = ["HOME", "ABOUT", "CONTACT"]

    return (  
        <motion.nav className="z-10 flex justify-between items-center py-7 px-10 bg-[rgb(229,231,235)] border-b border-b-[rgb(183,183,184)] fixed top-0 left-0 right-0 max-sm:flex-col"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            transition={
                {
                    stiffness: 50,
                    type: "spring",
                    duration: 0.7,
                    delay: 2,
                }
            }
        >
            <a href="/">
                <img src="/logo.png" alt="Logo" className="w-[50px] h-[50px]"/>
            </a>
            <ul className="flex gap-5">
                {/* HOME BUTTON */}
                <li className="flex justify-center items-center text-xl">
                    <motion.a
                        initial="initial"
                        whileHover="hovered"
                        className='relative block overflow-hidden whitespace-nowrap font-bold'
                        style={{
                            lineHeight: 1.35
                        }}
                        href='#intro'
                    >
                        <div className='flex'>
                            {opts[0].split('').map((item, index) => (
                                <motion.p key={index}
                                    variants={{
                                        initial: {y: "-100%"},
                                        hovered: {y: 0}
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * index
                                    }}
                                >{item}</motion.p>
                            ))}
                        </div>
                        <div className='absolute inset-0'>
                            {opts[0].split('').map((item, index) => (
                                <motion.p key={item}
                                    variants={{
                                        initial: {y: 0},
                                        hovered: {y: "100%"}
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * index
                                    }}
                                    className='inline-block'
                                >{item}</motion.p>
                            ))}
                        </div>
                    </motion.a>
                </li>

                {/* ABOUT BUTTON */}
                <li className="flex justify-center items-center text-xl">
                    <motion.a
                        initial="initial"
                        whileHover="hovered"
                        className='relative block overflow-hidden whitespace-nowrap font-bold'
                        style={{
                            lineHeight: 1.35
                        }}
                        href='#about'
                    >
                        <div className='flex'>
                            {opts[1].split('').map((item, index) => (
                                <motion.p key={item}
                                    variants={{
                                        initial: {y: "-100%"},
                                        hovered: {y: 0}
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * index
                                    }}
                                >{item}</motion.p>
                            ))}
                        </div>
                        <div className='absolute inset-0'>
                            {opts[1].split('').map((item, index) => (
                                <motion.p key={item}
                                    variants={{
                                        initial: {y: 0},
                                        hovered: {y: "100%"}
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * index
                                    }}
                                    className='inline-block'
                                >{item}</motion.p>
                            ))}
                        </div>
                    </motion.a>
                </li>
                <li className="flex justify-center items-center text-xl">
                    <motion.a
                        initial="initial"
                        whileHover="hovered"
                        className='relative block overflow-hidden whitespace-nowrap font-bold'
                        style={{
                            lineHeight: 1.35
                        }}
                        href='#contact'
                    >
                        <div className='flex'>
                            {opts[2].split('').map((item, index) => (
                                <motion.p key={index}
                                    variants={{
                                        initial: {y: "-100%"},
                                        hovered: {y: 0}
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * index
                                    }}
                                >{item}</motion.p>
                            ))}
                        </div>
                        <div className='absolute inset-0'>
                            {opts[2].split('').map((item, index) => (
                                <motion.p key={index}
                                    variants={{
                                        initial: {y: 0},
                                        hovered: {y: "100%"}
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * index
                                    }}
                                    className='inline-block'
                                >{item}</motion.p>
                            ))}
                        </div>
                    </motion.a>
                </li>
            </ul>
        </motion.nav>
    );
}
 
export default Navbar;
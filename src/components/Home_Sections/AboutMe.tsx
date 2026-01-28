import {motion} from 'framer-motion'
import { useParallaxRange } from '../useParallaxRange';
import FloatDiv from '../FloatDiv';
import Education from '../Education';
import FloatImg from '../FloatImg';
import Experience from '../Experience';

const sectionHeight = 1200

const AboutMe = () => {
    const speeds = useParallaxRange(
        { start: -500, end: 400 }, // desktop
        { start: -250, end: 150 }, // tablet
        { start: -500, end: 900 }    // mobile
    );

    const speeds2 = useParallaxRange(
        { start: -500, end: 500 }, // desktop
        { start: -150, end: 150 }, // tablet
        { start: -550, end: 1500 }    // mobile
    );

    console.log(speeds)

    return (  
        <div className="max-sm:p-5 p-20 h-[100vh] bg-[rgb(8,8,8)] relative" id="about"
            style={{height: `calc(${sectionHeight}px + 80vh)`}}
        >
            <motion.h1 
                className="font-bold max-sm:text-[24px] text-5xl text-white text-center p-10 mb-8"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: "easeInOut"
                }}
            >About Me</motion.h1>

            {/* Detail Box */}
            <div className='sticky top-50 h-screen w-full grid grid-cols-2'>
                <p className="text-white max-sm:text-xl text-3xl">I'm Atheo Jester -  Full-stack developer building fast, scalable, immersive digital experiences with creativity and engineering precision.</p>
            </div>

            <div className='w-full px-4 pt-[200px]'>
                <FloatDiv 
                    start={speeds.start}
                    end={speeds.end}
                    className='whitespace-normal break-words bg-white p-5 shadow-xl rounded max-sm:w-[50%] w-[40%] z-9 relative max-sm:ml-[165px] ml-auto mb-10 flex flex-col gap-1'
                />
                <Education 
                    start={speeds2.start}
                    end={speeds2.end}
                    className='bg-white mt-25 shadow-lg p-5 shadow-xl rounded max-sm:w-[60%] w-[40%] z-9 relative max-sm:mx-0 max-sm:ml-auto ml-[600px] mb-10'
                />
                <Experience
                    start={speeds2.start}
                    end={speeds2.end}
                    className='bg-white mt-[-85px] shadow-lg p-5 shadow-xl rounded max-sm:w-[60%] w-[40%] z-9 relative max-sm:mx-0 ml-auto max-sm:ml-[135px] mb-20'
                />

                
            </div>
        </div>
    );
}
 
export default AboutMe;
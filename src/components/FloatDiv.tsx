import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const FloatImg = ({className, alt, src, start, end}: {className?: string, alt?: string, src?: string, start: number, end: number}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${(end - 200) * -1}px`]
    })

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    
    const speed = 1; // try 1.3 – 2.5
    const y = useTransform(scrollYProgress, [0, 1], [start, end * (-speed)])

    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
    
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

    return (
        <motion.div
            style={{opacity, transform}}
            ref={ref}
            className={className}
        >
            <h1 className='max-sm:text-xl text-5xl font-bold text-red-500'>Info:</h1>
            <p className="max-sm:text-[11px] text-2xl"><strong>Name:</strong> Atheo Jester S. Baltazar</p>
            <p className="max-sm:text-[11px] text-2xl"><strong>Email:</strong> atheojester@gmail.com</p>
            <p className="max-sm:text-[11px] text-2xl"><strong>Age: </strong>23</p>
            <p className="max-sm:text-[11px] text-2xl"><strong>From: </strong>Bulacan, Philippines</p>
            <button className="max-sm:text-[11px] bg-[rgb(23,23,23)] text-white font-bold max-sm:p-2 p-5 rounded w-full cursor-pointer text-2xl mt-2">Download CV</button>
        </motion.div>
    )
}

export default FloatImg;
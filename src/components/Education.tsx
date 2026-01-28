import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const Education = ({className, alt, src, start, end}: {className?: string, alt?: string, src?: string, start: number, end: number}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${(end - 200) * -1}px`]
    })

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    
    const speed = 1.5; // try 1.3 – 2.5
    const y = useTransform(scrollYProgress, [0, 1], [start, end * (-speed)])

    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
    
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

    return (
        <motion.div
            style={{opacity, transform}}
            ref={ref}
            className={className}
        >
            <h1 className="max-sm:text-2xl text-5xl font-bold text-red-500">Education</h1>
            <p className="max-sm:text-[12px] text-2xl font-bold">Bulacan State University - Sarmiento Campus</p>
            <p className="max-sm:text-[12px] text-xl">Bachelor of Science in Information Technology</p>
            <p className="max-sm:text-[11px] text-xl">2021 - 2025</p>
        </motion.div>
    )
}

export default Education;
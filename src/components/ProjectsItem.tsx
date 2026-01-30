import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

export const ProjectItem = ({title, desc, img, link}: {title: string, desc: string, img: string, link: string}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0)
    }

    return ( 
        <Link to={link} target='_blank'>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className='shadow-lg relative max-sm:h-51 max-sm:w-40 h-96 w-72 rounded-xl bg-[rgb(244,244,244,0.3)]'
            >
                <div 
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d"
                    }}
                    className='absolute max-sm:p-2 p-5 max-sm:inset-2 inset-4 flex flex-col gap-2 rounded-xl bg-white shadow-lg'
                >
                    <div className=''>
                        <h1 className='max-sm:text-[11px] text-xl bg-white rounded-xl font-bold max-sm:text-left text-center'>{title}</h1>
                        <p className='max-sm:text-[9px] text-center'>{desc}</p>
                    </div>

                    <img src={img} alt="" className='rounded-b-lg border border-gray-300'/>
                </div>
            </motion.div>
        </Link>
    );
}
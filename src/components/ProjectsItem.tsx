import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const ProjectItem = ({title, desc, img}: {title: string, desc: string, img: string}) => {
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
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className='shadow-lg relative h-96 w-72 rounded-xl bg-[rgb(244,244,244,0.3)]'
        >
            <div 
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d"
                }}
                className='absolute p-5 inset-4 flex flex-col gap-2 rounded-xl bg-white shadow-lg'
            >
                <div className=''>
                    <h1 className='text-xl bg-white rounded-xl font-bold text-center'>{title}</h1>
                    <p className='text-center'>{desc}</p>
                </div>

                <img src={img} alt="" className='rounded-b-lg border border-gray-300'/>
            </div>
        </motion.div>
    );
}
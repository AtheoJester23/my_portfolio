import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Cursor from "../components/cursor";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { img } from "framer-motion/client";

const imgs = [
    "/slide1.png",
    "/slide2.png",
    "/slide3.png",
]

const DRAG_BUFFER = 50
const SPRING_OPTIONS = {
    type: 'spring',
    mass: 3, 
    stiffness: 400,
    damping: 50
} as const
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

export const Carousel = () => {

    const [dragging, setDrangging] = useState(false);
    const [imgIndex, setImgIndex] = useState(0)

    const dragX = useMotionValue(0)
    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) => {
        if(typeof latest == "number" && dragging){
            dragXProgress.set(latest)
        }else{
            dragXProgress.set(0)
        }
    })

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragXProgress.get()

            if(x === 0){
                setImgIndex(prev => {
                    if(prev === imgs.length - 1){
                        return 0
                    }
                    return prev + 1;
                })
            }
        }, AUTO_DELAY) 
    
        return () => clearInterval(intervalRef)
    }, [])

    const onDragStart = () => {
        setDrangging(true)
    }
    
    const onDragEnd = () => {
        setDrangging(false)
        const x = dragX.get();

        if(x <= DRAG_BUFFER && imgIndex < imgs.length - 1){
            setImgIndex(prev => prev + 1)
        } else if (x >= DRAG_BUFFER && imgIndex > 0){
            setImgIndex(prev => prev - 1)
        }
    }

    return (  
        <div className="flex flex-col h-auto">
            <div className="flex overflow-hidden w-full h-auto">
                {imgs.map((item,index) => (
                    <motion.div 
                        style={{
                            x: dragX
                        }}
                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0
                        }}
                        animate={{
                            translateX: `-${imgIndex * 100}%`,
                            scale: imgIndex === index ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        className="shrink-0 h-auto w-full bg-gray-500"
                    >
                        <img src={item} draggable={false} alt="" className="w-full h-full object-contain"/>
                    </motion.div>
                ))}
            </div>
            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex}/>
        </div>
    );
}
 
const Dots = ({imgIndex, setImgIndex}: {imgIndex: number, setImgIndex: Dispatch<SetStateAction<number>>}) => {
    return (
        <div className='mt-4 flex w-full justify-center gap-2'>
            {imgs.map((_, index) => {
                return (
                    <button 
                        onClick={() => setImgIndex(index)} 
                        key={index}
                        className={`h-3 w-3 rounded-full transition-colors ${index == imgIndex ? "bg-[rgb(8,8,8)]" : "bg-neutral-500"}`}
                    />
                ) 
            })}
        </div>
    )
}
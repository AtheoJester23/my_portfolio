import { motion } from "framer-motion";

const logos = [
  "MongoDB",
  "Express.js",
  "REACT",
  "Node.js",
  "Vue.js",
  "Next.js",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwindcss",
  "Firebase",
  "Supabase",
  "Sanity.io",
  "Oauth",
  "Git",
  "Github",
];

export default function LogoMarquee() {
    return (
        <div className="container mx-auto">
            <div className="flex blurSides border border-gray-300">
                
                <motion.div className="flex flex-shrink-0"
                    initial={{x: 0}}
                    animate={{x: "-100%"}}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {logos.map((subject, index) => {
                        return (
                            <div className="max-sm:py-2 py-5 flex">
                                <div key={index} className="max-sm:px-5 px-15 font-bold max-sm:text-[16px] text-2xl">{subject}</div>
                                <p>•</p>
                            </div>
                        )
                    })}
                </motion.div>

                <motion.div className="flex flex-shrink-0"
                    initial={{x: 0}}
                    animate={{x: "-100%"}}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {logos.map((subject, index) => {
                        return (
                            <div className="max-sm:py-2 py-5 flex">
                                <div key={index} className="max-sm:px-5 px-15 font-bold max-sm:text-[16px] text-2xl">{subject}</div>
                                <p>•</p>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    );
}

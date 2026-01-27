import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }: {onFinish: () => void}) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[rgb(8,8,8)] flex items-center justify-center"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-white text-7xl">Hello!</h1>
    </motion.div>
  );
}

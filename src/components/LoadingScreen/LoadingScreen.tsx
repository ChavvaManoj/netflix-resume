import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8
        }
      }}
    >
      <motion.h1
        initial={{
          scale: 0.3,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1,
          textShadow: [
            "0 0 0px #E50914",
            "0 0 20px #E50914",
            "0 0 60px #E50914",
            "0 0 100px #E50914"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="
        text-[120px]
        md:text-[180px]
        font-black
        text-red-600
        select-none
      "
      >
        M
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
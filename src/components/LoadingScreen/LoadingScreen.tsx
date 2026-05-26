import { motion } from "framer-motion";
import { useEffect } from "react";

const LoadingScreen = () => {

  useEffect(() => {

    const playAudio = () => {

      const audio =
        new Audio(
          "/netflix-intro.mp3"
        );

      audio.volume = 1;

      audio.play()
        .catch(() => {});

      document.removeEventListener(
        "click",
        playAudio
      );

    };

    document.addEventListener(
      "click",
      playAudio,
      { once:true }
    );

    return () => {

      document.removeEventListener(
        "click",
        playAudio
      );

    };

  }, []);

  return (

    <div
      className="
      fixed
      inset-0
      bg-black
      flex
      items-center
      justify-center
      overflow-hidden
      z-[999]
      "
    >

      {/* Glow */}

      <motion.div

        animate={{
          opacity:[0,.8,0]
        }}

        transition={{
          duration:2
        }}

        className="
        absolute
        w-[450px]
        h-[450px]
        rounded-full
        bg-red-600
        blur-[150px]
        "
      />

      {/* M */}

      <motion.h1

        initial={{
          opacity:0,
          scale:0.5
        }}

        animate={{
          opacity:1,
          scale:[1,1.3,0]
        }}

        transition={{
          duration:2.5
        }}

        className="
        text-red-600
        text-[180px]
        md:text-[260px]
        font-bold
        drop-shadow-[0_0_40px_red]
        "
      >
        M
      </motion.h1>

    </div>

  );

};

export default LoadingScreen;
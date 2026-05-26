import { motion } from "framer-motion";

interface Props {
  value: number;
  label: string;
}

const AchievementCounter = ({
  value,
  label
}: Props) => {

  return (

    <motion.div

      whileHover={{
        scale:1.05
      }}

      className="
      bg-[#181818]
      rounded-xl
      p-8
      text-center
      border
      border-transparent
      hover:border-red-500
      transition-all
      "
    >

      <motion.h2

        initial={{
          opacity:0,
          y:20
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        className="
        text-5xl
        font-bold
        text-red-500
        "
      >
        {value}+
      </motion.h2>

      <p
        className="
        mt-4
        text-gray-300
        "
      >
        {label}
      </p>

    </motion.div>

  );

};

export default AchievementCounter;
import { motion } from "framer-motion";

interface Props{
  skill:string;
}

const SkillCard = ({
  skill
}:Props)=>{

  return (

    <motion.div

      whileHover={{
        scale:1.08,
        y:-10
      }}

      className="
      bg-[#181818]
      min-w-[180px]
      h-[100px]
      rounded-xl
      flex
      items-center
      justify-center
      cursor-pointer
      border
      border-transparent
      hover:border-red-500
      transition-all
      "
    >

      <h3
        className="
        font-semibold
        text-lg
        "
      >
        {skill}
      </h3>

    </motion.div>

  );

};

export default SkillCard;
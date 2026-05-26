import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectProps {
  title: string;
  tech: string[];
  description: string;
}

const ProjectCard = ({
  title,
  tech,
  description
}: ProjectProps) => {

  const [expanded,setExpanded] =
    useState(false);

  return (

    <motion.div

      onHoverStart={() =>
        setExpanded(true)
      }

      onHoverEnd={() =>
        setExpanded(false)
      }

      animate={{
        scale: expanded ? 1.08 : 1,
        y: expanded ? -20 : 0
      }}

      transition={{
        duration: .3
      }}

      className="
      bg-[#181818]
      rounded-xl
      overflow-hidden
      cursor-pointer
      min-h-[250px]
      relative
      z-10
      "
    >

      {/* Banner */}

      <div
        className="
        h-[140px]
        bg-gradient-to-r
        from-red-700
        via-red-800
        to-black
        "
      />

      <div className="p-5">

        <h3
          className="
          text-xl
          font-bold
          "
        >
          {title}
        </h3>

        {expanded && (

          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

          >

            <p
              className="
              text-gray-400
              mt-4
              "
            >
              {description}
            </p>

            <div
              className="
              flex
              gap-2
              flex-wrap
              mt-5
              "
            >

              {tech.map((item)=>(

                <span
                  key={item}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-red-900/50
                  text-xs
                  "
                >
                  {item}
                </span>

              ))}

            </div>

            <div
              className="
              flex
              gap-4
              mt-6
              "
            >

              <button
                className="
                bg-white
                text-black
                px-4
                py-2
                rounded
                text-sm
                "
              >
                Demo
              </button>

              <button
                className="
                bg-gray-700
                px-4
                py-2
                rounded
                text-sm
                "
              >
                GitHub
              </button>

            </div>

          </motion.div>

        )}

      </div>

    </motion.div>

  );

};

export default ProjectCard;
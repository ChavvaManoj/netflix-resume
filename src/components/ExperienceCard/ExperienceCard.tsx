import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  company: string;
  duration: string;
  technologies: string[];
  achievements: string[];
}

const ExperienceCard = ({
  title,
  company,
  duration,
  technologies,
  achievements
}: Props) => {

  const [expanded, setExpanded] =
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
        scale: expanded ? 1.05 : 1
      }}

      className="
      bg-[#181818]
      rounded-xl
      p-6
      cursor-pointer
      min-h-[220px]
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        "
      >
        {title}
      </h2>

      <p className="text-red-500 mt-2">
        {company}
      </p>

      <p className="text-gray-400 mt-2">
        {duration}
      </p>

      {expanded && (

        <motion.div
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          className="mt-5"
        >

          <div
            className="
            flex
            gap-2
            flex-wrap
            "
          >

            {technologies.map((tech)=>(

              <span
                key={tech}
                className="
                px-3
                py-1
                rounded-full
                bg-red-900/40
                text-sm
                "
              >
                {tech}
              </span>

            ))}

          </div>

          <ul className="mt-5 space-y-2">

            {achievements.map((item)=>(

              <li
                key={item}
                className="text-gray-300"
              >
                • {item}
              </li>

            ))}

          </ul>

        </motion.div>

      )}

    </motion.div>

  );

};

export default ExperienceCard;
import { motion } from "framer-motion";

import {
  Code,
  Briefcase,
  GraduationCap,
  Cpu,
  User,
  MessageCircle
} from "lucide-react";

import { profileSections } from "../../data/profileSections";

const iconMap = {
  Code,
  Briefcase,
  GraduationCap,
  Cpu,
  User,
  MessageCircle
};

const profileColors = [
  "bg-blue-600",
  "bg-red-600",
  "bg-cyan-900",
  "bg-green-600",
  "bg-purple-600",
  "bg-orange-500"
];

interface Props {
  onSelect: (section: string) => void;
}

const ProfileSelector = ({
  onSelect
}: Props) => {

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col justify-center items-center px-6">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          text-4xl
          md:text-6xl
          font-light
          mb-16
        "
      >
        Who's Viewing?
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8">

        {profileSections.map((profile, index) => {

          const Icon =
            iconMap[
              profile.icon as keyof typeof iconMap
            ];

          return (

            <motion.div
              key={profile.id}

              onClick={() =>
                onSelect(profile.title)
              }

              whileHover={{
                scale: 1.08,
                y: -8
              }}

              whileTap={{
                scale: 0.95
              }}

              className="
                flex
                flex-col
                items-center
                cursor-pointer
                group
              "
            >

              <div
                className={`
                  w-[150px]
                  h-[150px]
                  md:w-[180px]
                  md:h-[180px]
                  rounded-md
                  flex
                  items-center
                  justify-center
                  border-4
                  border-transparent
                  transition-all
                  duration-300
                  group-hover:border-white
                  ${profileColors[index]}
                `}
              >

                <Icon
                  size={70}
                  className="text-white"
                />

              </div>

              <p
                className="
                  text-gray-400
                  mt-4
                  text-xl
                  transition-all
                  duration-300
                  group-hover:text-white
                "
              >
                {profile.title}
              </p>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
};

export default ProfileSelector;
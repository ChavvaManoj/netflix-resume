import { motion } from "framer-motion";

interface Props{
skill:string;
}

const SkillCard=({
skill
}:Props)=>{

return(

<motion.div

whileHover={{
y:-8,
scale:1.04
}}

transition={{
duration:.25
}}

className="

group

relative

bg-[#181818]

min-w-[200px]
h-[110px]

rounded-2xl

flex
items-center
justify-center

cursor-pointer

border
border-gray-800

hover:border-red-500

overflow-hidden

transition-all
duration-300

hover:shadow-[0_15px_40px_rgba(229,9,20,.25)]

"

>

{/* Glow Effect */}

<div
className="

absolute
inset-0

bg-gradient-to-br
from-red-600/10
to-transparent

opacity-0
group-hover:opacity-100

transition-opacity
duration-300

"
/>

{/* Skill Text */}

<h3
className="

relative
z-10

font-semibold
text-lg

text-gray-200
group-hover:text-white

tracking-wide

transition-colors
duration-300

"
>

{skill}

</h3>

</motion.div>

)

}

export default SkillCard;
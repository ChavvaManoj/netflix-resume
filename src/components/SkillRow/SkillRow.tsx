import { motion } from "framer-motion";

import { skills } from "../../data/skills";

const SkillRow=()=>{

return(

<section
id="skills"
className="
px-[6%]
py-24
"
>

<h2
className="
text-4xl
font-bold
mb-16
"
>

Engineering Stack

</h2>

<div
className="
space-y-12
"
>

{skills.map((skillGroup,index)=>(

<motion.div

key={skillGroup.category}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.08
}}

viewport={{
once:true
}}

className="
bg-[#141414]
border
border-gray-800

rounded-2xl

p-8

hover:border-red-600
hover:shadow-[0_10px_40px_rgba(229,9,20,.15)]

transition-all
duration-300
"

>

{/* Category */}

<div
className="
flex
items-center
gap-4
mb-8
"
>

<div
className="
w-2
h-10
bg-red-600
rounded-full
"
/>

<div>

<h3
className="
text-2xl
font-bold
"
>

{skillGroup.category}

</h3>


</div>

</div>

{/* Skills */}

<div
className="
flex
flex-wrap
gap-4
"
>

{skillGroup.items.map((skill)=>(

<motion.div

key={skill}

whileHover={{
scale:1.06,
y:-4
}}

className="
px-5
py-3

rounded-full

bg-[#1f1f1f]

border
border-gray-700

text-gray-200
font-medium

hover:border-red-500
hover:bg-red-600/10
hover:text-white

transition-all
duration-300

cursor-default
"

>

{skill}

</motion.div>

))}

</div>

</motion.div>

))}

</div>

</section>

)

}

export default SkillRow;
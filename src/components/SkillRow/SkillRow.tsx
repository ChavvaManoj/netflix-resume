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
mb-12
"
>

Skills

</h2>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>

{skills.map((skillGroup)=>(

<motion.div

key={skillGroup.category}

whileHover={{
scale:1.03,
y:-10
}}

className="
bg-[#181818]
rounded-xl
p-6
border
border-gray-700
hover:border-red-600
transition
"

>

<h3
className="
text-2xl
font-bold
mb-6
"
>

{skillGroup.category}

</h3>

<div className="space-y-5">

{skillGroup.items.map((skill)=>(

<div key={skill.name}>

<div
className="
flex
justify-between
mb-2
"
>

<span>

{skill.name}

</span>

<span
className="
text-red-500
"
>

{skill.level}%

</span>

</div>

<div
className="
w-full
h-3
bg-gray-700
rounded-full
overflow-hidden
"
>

<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill.level}%`
}}

transition={{
duration:1
}}

className="
h-full
bg-red-600
rounded-full
"

/>

</div>

</div>

))}

</div>

</motion.div>

))}

</div>

</section>

)

}

export default SkillRow;
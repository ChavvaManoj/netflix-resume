import { experiences } from "../../data/experience";
import { motion } from "framer-motion";

const ExperienceRow = () => {

return(

<section
id="experience"
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

Experience

</h2>

<div
className="
relative
max-w-4xl
mx-auto
"
>

{/* Single timeline line */}

<div
className="
absolute
left-[20px]
top-0
bottom-0
w-[3px]
bg-red-600
"
/>

{experiences.map((item,index)=>(

<motion.div

key={item.id}

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.6,
delay:index*.2
}}

viewport={{
once:true
}}

className="
relative
pl-16
mb-16
"

>

<div
className="
absolute
left-[8px]
top-3
w-7
h-7
rounded-full
bg-red-600
border-4
border-black
shadow-[0_0_20px_rgba(229,9,20,.7)]
"
/>

<div
className="
bg-[#181818]
rounded-xl
p-6
border
border-gray-700
hover:border-red-600
transition-all
"
>

<p
className="
text-red-500
font-semibold
mb-2
"
>

{item.duration}

</p>

<h3
className="
text-2xl
font-bold
"
>

{item.role}

</h3>

<p
className="
text-gray-400
mt-2
"
>

{item.company}

</p>

<ul
className="
mt-5
space-y-2
"
>

{item.points?.map((point)=>(

<li
key={point}
className="
text-gray-300
"
>

• {point}

</li>

))}

</ul>

</div>

</motion.div>

))}

</div>

</section>

)

}

export default ExperienceRow;
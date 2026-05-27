import { education }
from "../../data/education";

import { motion }
from "framer-motion";

const EducationRow = () => {

return(

<section

id="education"

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

Education

</h2>

<div
className="
relative
max-w-4xl
mx-auto
"
>

{/* Timeline line */}

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

{education.map((item,index)=>(

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

{/* Timeline dot */}

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

<motion.div

whileHover={{
scale:1.03,
y:-5
}}

className="
bg-[#181818]
rounded-xl
p-6
border
border-gray-700
hover:border-red-600
hover:shadow-[0_0_30px_rgba(229,9,20,.3)]
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

{item.year}

</p>

<h3
className="
text-2xl
font-bold
"
>

{item.degree}

</h3>

<p
className="
text-gray-400
mt-2
"
>

{item.institution}

</p>

<ul
className="
mt-5
space-y-2
"
>

{item.highlights.map(
(point)=>(

<li

key={point}

className="
text-gray-300
"

>

• {point}

</li>

)

)}

</ul>

</motion.div>

</motion.div>

))}

</div>

</section>

)

}

export default EducationRow;
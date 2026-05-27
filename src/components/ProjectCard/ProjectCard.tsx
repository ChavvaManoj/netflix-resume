import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Props{

title:string;

description:string;

tech:string[];

}

const ProjectCard=({

title,
description,
tech

}:Props)=>{

const [expanded,setExpanded]=
useState(false);

return(

<motion.div

onHoverStart={()=>
setExpanded(true)
}

onHoverEnd={()=>
setExpanded(false)
}

whileHover={{
scale:1.08,
y:-50,
zIndex:100
}}

transition={{
duration:.3
}}

className="
relative
bg-[#181818]
rounded-xl
overflow-hidden
cursor-pointer
shadow-xl
"

>

{/* Thumbnail */}

<div
className="
h-[180px]
bg-gradient-to-br
from-red-600
to-black
flex
items-center
justify-center
"
>

<h2
className="
text-2xl
font-bold
px-6
text-center
"
>

{title}

</h2>

</div>

{/* Expanded content */}

<motion.div

animate={{

height:
expanded
? "auto"
:80

}}

className="
p-5
overflow-hidden
"

>

<div
className="
flex
gap-2
mb-3
"
>

<span
className="
bg-green-600
px-2
rounded
text-sm
"
>

⭐ Featured

</span>

<span
className="
bg-red-600
px-2
rounded
text-sm
"
>

🚀 Latest

</span>

</div>

<p
className="
text-gray-300
text-sm
leading-6
"
>

{description}

</p>

<div
className="
flex
flex-wrap
gap-2
mt-4
"
>

{tech.map((item)=>(

<span

key={item}

className="
bg-gray-700
px-3
py-1
rounded-full
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
p-3
rounded-full
"
>

<Code2
size={18}
/>

</button>

<button
className="
bg-red-600
p-3
rounded-full
"
>

<ExternalLink
size={18}
/>

</button>

</div>

</motion.div>

</motion.div>

)

}

export default ProjectCard
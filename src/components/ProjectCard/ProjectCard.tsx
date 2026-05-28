import {
Code2
} from "lucide-react";

import { useState } from "react";

interface Props{
title:string;
description:string;
tech:string[];
achievements:string[];
github:string;
}

const ProjectCard=({
title,
description,
tech,
achievements,
github
}:Props)=>{

const [expanded,setExpanded]=
useState(false);

return(

<div

onMouseEnter={()=>
setExpanded(true)
}

onMouseLeave={()=>
setExpanded(false)
}

className="

bg-[#181818]

hover:-translate-y-3
hover:shadow-[0_25px_60px_rgba(229,9,20,.35)]

transition-all
duration-300

rounded-xl
overflow-hidden

shadow-xl
border
border-gray-800
hover:border-red-600

h-fit
"

>

{/* Banner */}

<div
className="
h-[180px]

bg-gradient-to-br
from-red-600
to-black

flex
flex-col
items-center
justify-center

px-6
text-center
"
>

<h2
className="
text-xl
md:text-2xl
font-bold
leading-relaxed
"
>

{title}

</h2>

<a

href={github}

target="_blank"

rel="noopener noreferrer"

className="
mt-5

inline-flex
items-center
gap-2

bg-white
text-black

px-4
py-2

rounded-md

text-sm
font-medium

hover:scale-105
transition

relative
z-[200]
pointer-events-auto
"

>

<Code2 size={16}/>

View Code

</a>

</div>

{/* Content */}

<div
className="
p-5
"
>
{/* Description */}

<p
className="
text-gray-300
leading-7
text-sm
"
>

{description}

</p>

{/* Tech Stack */}

<div
className="
flex
flex-wrap
gap-2
mt-5
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
hover:bg-red-600
transition
"

>

{item}

</span>

))}

</div>

{/* Auto Hover Highlights */}

<div

className={`

transition-all
duration-500
overflow-hidden

${expanded

?"max-h-[500px] opacity-100 mt-6"

:"max-h-0 opacity-0"

}

`}

>

<div
className="
border-t
border-gray-700
pt-5
"
>

<h3
className="
text-red-400
font-semibold
mb-4
"
>

Key Highlights

</h3>

<div
className="
max-h-[220px]
overflow-y-auto
pr-2
space-y-4

scrollbar-thin
scrollbar-thumb-red-600
scrollbar-track-transparent
"
>

{achievements.map((item)=>(

<div

key={item}

className="
text-gray-300
text-sm
leading-7
"

>

• {item}

</div>

))}

</div>

</div>

</div>

</div>

</div>

)

}

export default ProjectCard;
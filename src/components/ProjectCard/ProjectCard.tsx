import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink
} from "lucide-react";

interface Props{
title:string;
description:string;
tech:string[];
isHovered:boolean;
}

const ProjectCard=({
title,
description,
tech,
isHovered
}:Props)=>{

return(

<motion.div

animate={{

scale:isHovered?1.12:1,
y:isHovered?-20:0,
zIndex:isHovered?50:1

}}

transition={{
duration:.35
}}

className="
relative
bg-[#181818]
rounded-xl
overflow-hidden
cursor-pointer
shadow-xl
hover:shadow-[0_0_40px_rgba(229,9,20,.4)]
h-[500px]
flex
flex-col
"

>

<div
className="
h-[180px]
bg-gradient-to-br
from-red-600
to-black
flex
items-center
justify-center
px-6
"
>

<h2
className="
text-xl
md:text-2xl
font-bold
text-center
leading-relaxed
break-words
"
>

{title}

</h2>

</div>

<div
className="
p-5
flex-1
flex
flex-col
"
>

<div
className="
flex
gap-2
mb-4
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
leading-7
text-sm
flex-1
overflow-auto
"
>

{description}

</p>

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
hover:scale-110
transition
"
>
<Code2 size={18}/>
</button>

<button
className="
bg-red-600
p-3
rounded-full
hover:scale-110
transition
"
>
<ExternalLink size={18}/>
</button>

</div>

</div>

</motion.div>

)

}

export default ProjectCard;
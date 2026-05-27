import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

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

return(

<motion.div

whileHover={{
  scale:1.05,
  y:-15
}}

transition={{
  duration:.25
}}

className="
relative
bg-[#181818]
rounded-xl
overflow-visible
cursor-pointer
shadow-xl
hover:shadow-[0_0_30px_rgba(229,9,20,.3)]
h-[420px]
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
px-5
overflow-y-auto
"
>

<h2
className="
text-lg
md:text-xl
font-bold
text-center
leading-relaxed
break-words
w-full
"
>

{title}

</h2>

</div>

{/* Content */}

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
line-clamp-3
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
mt-auto
pt-5
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
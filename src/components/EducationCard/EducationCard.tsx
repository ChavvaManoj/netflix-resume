import { motion } from "framer-motion";
import { useState } from "react";

interface Props{

  degree:string;

  institution:string;

  year:string;

  highlights:string[];

}

const EducationCard = ({
  degree,
  institution,
  year,
  highlights
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
scale:1.05,
y:-10
}}

className="
bg-[#181818]
rounded-xl
p-6
cursor-pointer
min-h-[220px]
"
>

<h2
className="
text-2xl
font-bold
"
>
{degree}
</h2>

<p className="text-red-500 mt-2">
{institution}
</p>

<p className="text-gray-400 mt-2">
{year}
</p>

{expanded && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

className="mt-5"
>

<ul className="space-y-2">

{highlights.map((item)=>(

<li
key={item}
className="text-gray-300"
>

• {item}

</li>

))}

</ul>

</motion.div>

)}

</motion.div>

)

}

export default EducationCard;
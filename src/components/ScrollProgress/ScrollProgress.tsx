import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollProgress=()=>{

const [progress,setProgress]=
useState(0);

const [show,setShow]=
useState(false);

useEffect(()=>{

const handleScroll=()=>{

const totalHeight=

document.documentElement
.scrollHeight-

window.innerHeight;

const current=

window.scrollY;

const value=
(current/totalHeight)
*100;

setProgress(value);

setShow(
window.scrollY>400
);

};

window.addEventListener(
"scroll",
handleScroll
);

return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};

},[]);

return(

<>

<motion.div

className="
fixed
top-0
left-0
h-[3px]
bg-red-600
z-[100]
origin-left
"

style={{
width:`${progress}%`
}}

/>

{show&&(

<motion.button

initial={{
opacity:0,
scale:.5
}}

animate={{
opacity:1,
scale:1
}}

whileHover={{
scale:1.1
}}

onClick={()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

}}

className="
fixed
bottom-8
right-8
bg-red-600
p-4
rounded-full
shadow-lg
z-50
"

>

<ChevronUp
size={25}
/>

</motion.button>

)}

</>

)

}

export default ScrollProgress;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow=()=>{

const [position,setPosition]=
useState({
x:0,
y:0
});

useEffect(()=>{

const move=(e:MouseEvent)=>{

setPosition({

x:e.clientX,
y:e.clientY

});

};

window.addEventListener(
"mousemove",
move
);

return()=>{

window.removeEventListener(
"mousemove",
move
);

};

},[]);

return(

<motion.div

animate={{

x:position.x-100,
y:position.y-100

}}

transition={{
type:"spring",
damping:25,
stiffness:200
}}

className="
fixed
w-[200px]
h-[200px]
rounded-full
pointer-events-none
z-[1]
bg-red-600/10
blur-[100px]
"

/>

)

}

export default CursorGlow;
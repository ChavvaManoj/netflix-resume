import { motion } from "framer-motion";

interface Props{
children:React.ReactNode;
}

const Reveal=({
children
}:Props)=>{

return(

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true,
amount:.2
}}

>

{children}

</motion.div>

)

}

export default Reveal;
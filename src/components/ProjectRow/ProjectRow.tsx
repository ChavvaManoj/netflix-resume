import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectRow=()=>{

const [hovered,setHovered]=
useState<number|null>(null);

return(

<section
id="projects"
className="section-padding"
>

<h2
className="
text-4xl
font-bold
"
>

Continue Watching

</h2>

<p
className="
text-gray-400
mt-2
mb-8
"
>

Featured Projects

</p>

<Swiper

spaceBetween={30}

slidesPerView={1.2}

breakpoints={{

640:{
slidesPerView:2
},

1024:{
slidesPerView:4
},

1440:{
slidesPerView:5
}

}}

className="
overflow-visible
py-10
"

>

{projects.map((project,index)=>(

<SwiperSlide
key={project.id}
className="
overflow-visible
"
>

<motion.div

onHoverStart={()=>
setHovered(index)
}

onHoverEnd={()=>
setHovered(null)
}

animate={{

x:

hovered!==null

?

index<hovered

?-40

:

index>hovered

?40

:0

:0

}}

transition={{

duration:.35,
ease:"easeInOut"

}}

style={{

transformOrigin:

index===0

?"left center"

:

index===projects.length-1

?"right center"

:

"center center"

}}

className="
overflow-visible
"

>

<ProjectCard

title={project.title}

tech={project.tech}

description={
project.description
}

isHovered={
hovered===index
}

/>

</motion.div>

</SwiperSlide>

))}

</Swiper>

</section>

)

}

export default ProjectRow;
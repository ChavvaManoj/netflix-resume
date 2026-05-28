import {
Swiper,
SwiperSlide
} from "swiper/react";

import "swiper/css";

import {
projects
} from "../../data/projects";

import ProjectCard
from "../ProjectCard/ProjectCard";

const ProjectRow=()=>{

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

spaceBetween={16}

slidesPerView={1.1}

breakpoints={{

480:{
slidesPerView:1.3,
spaceBetween:20
},

640:{
slidesPerView:2,
spaceBetween:20
},

1024:{
slidesPerView:3,
spaceBetween:30
},

1440:{
slidesPerView:4,
spaceBetween:30
}

}}

className="
overflow-visible
py-20
px-2

relative
z-0
"

>

{projects.map((project)=>(

<SwiperSlide

key={project.id}

className="
overflow-visible
relative
z-0
"
>

<ProjectCard

title={project.title}

tech={project.tech}

description={
project.description
}

achievements={
project.achievements
}

github={
project.github
}

/>

</SwiperSlide>

))}

</Swiper>

</section>

)

}

export default ProjectRow;
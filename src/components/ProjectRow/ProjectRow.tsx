import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { projects } from "../../data/projects";

import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectRow = () => {

  return (

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
        spaceBetween={20}
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
      >

        {projects.map((project)=>(

          <SwiperSlide
            key={project.id}
          >

            <ProjectCard
              title={project.title}
              tech={project.tech}
              description={project.description}
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );

};

export default ProjectRow;
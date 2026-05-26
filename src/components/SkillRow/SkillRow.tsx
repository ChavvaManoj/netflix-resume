import { Swiper, SwiperSlide }
from "swiper/react";

import "swiper/css";

import { skills }
from "../../data/skills";

import SkillCard
from "../SkillCard/SkillCard";

const SkillRow = () => {

  return (

    <section
      id="skills"
      className="section-padding"
    >

      <h2
        className="
        text-4xl
        font-bold
        mb-8
        "
      >
        Skills
      </h2>

      {Object.entries(skills)
      .map(([category,list])=>(

        <div
          key={category}
          className="mb-12"
        >

          <h3
            className="
            text-2xl
            mb-5
            "
          >
            {category}
          </h3>

          <Swiper
            spaceBetween={20}
            slidesPerView={2}

            breakpoints={{
              768:{
                slidesPerView:4
              }
            }}
          >

            {list.map((skill)=>(

              <SwiperSlide
                key={skill}
              >

                <SkillCard
                  skill={skill}
                />

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      ))}

    </section>

  );

};

export default SkillRow;
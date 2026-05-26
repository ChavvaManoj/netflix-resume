import { experiences } from "../../data/experience";

import ExperienceCard from
"../ExperienceCard/ExperienceCard";

const ExperienceRow = () => {

  return (

    <section
      id="experience"
      className="section-padding"
    >

      <h2
        className="
        text-4xl
        font-bold
        mb-8
        "
      >
        Experience
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        gap-6
        "
      >

        {experiences.map((exp)=>(

          <ExperienceCard
            key={exp.id}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            technologies={
              exp.technologies
            }
            achievements={
              exp.achievements
            }
          />

        ))}

      </div>

    </section>

  );

};

export default ExperienceRow;
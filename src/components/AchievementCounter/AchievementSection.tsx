import AchievementCounter from "./AchievementCounter";

const AchievementSection = () => {

  const stats = [

    {
      value:15,
      label:"Projects Completed"
    },

    {
      value:25,
      label:"Technologies Learned"
    },

    {
      value:500,
      label:"GitHub Contributions"
    },

    {
      value:6,
      label:"Certifications"
    }

  ];

  return (

    <section
      className="
      section-padding
      "
    >

      <h2
        className="
        text-4xl
        font-bold
        mb-8
        "
      >
        Achievements
      </h2>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        "
      >

        {stats.map((item)=>(

          <AchievementCounter
            key={item.label}
            value={item.value}
            label={item.label}
          />

        ))}

      </div>

    </section>

  );

};

export default AchievementSection;
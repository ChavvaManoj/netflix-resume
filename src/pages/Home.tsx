import { useEffect, useState } from "react";

import ProfileSelector from "../components/ProfileSelector/ProfileSelector";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ProjectRow from "../components/ProjectRow/ProjectRow";
import ExperienceRow from "../components/ExperienceRow/ExperienceRow";
import SkillRow from "../components/SkillRow/SkillRow";
import AchievementSection from "../components/AchievementCounter/AchievementSection";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";
import EducationRow from"../components/EducationRow/EducationRow";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import Reveal from "../components/Reveal/Reveal";


const Home = () => {

  const [
    selectedProfile,
    setSelectedProfile
  ] = useState(false);

  const [
    selectedSection,
    setSelectedSection
  ] = useState("");

  const handleProfileSelect = (
    section:string
  ) => {

    setSelectedSection(section);

    setSelectedProfile(true);

  };

  useEffect(() => {

    if(
      selectedProfile &&
      selectedSection
    ){

      setTimeout(()=>{

        const id =
          selectedSection
          .toLowerCase()
          .replace(/\s/g,"");

        const section =
          document.getElementById(
            id
          );

        section?.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      },1000);

    }

  },[
    selectedProfile,
    selectedSection
  ]);

  return (

    <main
      className="
      bg-black
      text-white
      min-h-screen
      "
    >

      {!selectedProfile ? (

        <ProfileSelector
          onSelect={
            handleProfileSelect
          }
        />

      ) : (

        <>

          <Navbar

  onLogoClick={() => {

    setSelectedProfile(false);

    setSelectedSection("");

  }}

/>
        <ScrollProgress/>

          <HeroBanner />

<Reveal>
  <ProjectRow />
</Reveal>

<Reveal>
  <ExperienceRow />
</Reveal>

<Reveal>
  <EducationRow />
</Reveal>

<Reveal>
  <SkillRow />
</Reveal>

<Reveal>

<section
id="aboutme"
className="
section-padding
"
>

<h2
className="
text-4xl
font-bold
"
>

About Me

</h2>

</section>

</Reveal>

<Reveal>
  <AchievementSection />
</Reveal>

<Reveal>
  <ContactSection />
</Reveal>

<Footer />

        </>

      )}

    </main>

  );

};

export default Home;
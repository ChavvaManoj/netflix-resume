import { useState } from "react";

import ProfileSelector from "../components/ProfileSelector/ProfileSelector";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ProjectRow from "../components/ProjectRow/ProjectRow";
import ExperienceRow from "../components/ExperienceRow/ExperienceRow";
import SkillRow from "../components/SkillRow/SkillRow";
import AchievementSection from "../components/AchievementCounter/AchievementSection";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer/Footer";

const Home = () => {

  const [selectedProfile, setSelectedProfile] =
    useState(false);

  const [selectedSection, setSelectedSection] =
    useState("");

  const handleProfileSelect = (
    section: string
  ) => {

    setSelectedSection(section);

    setSelectedProfile(true);

  };

  return (

    <main className="bg-black text-white min-h-screen">

      {!selectedProfile ? (

        <ProfileSelector
          onSelect={handleProfileSelect}
        />

      ) : (

<div className="min-h-screen">

  <Navbar />

  <HeroBanner />

  <ProjectRow />

  <ExperienceRow />

  <section
    id="education"
    className="section-padding"
  >
    <h2 className="text-4xl font-bold">
      Education
    </h2>
  </section>

  <SkillRow />

  <AchievementSection />

  <ContactSection />

<Footer />

</div>

      )}

    </main>

  );
};

export default Home;
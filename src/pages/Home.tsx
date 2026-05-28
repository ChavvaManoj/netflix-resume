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
import EducationRow from "../components/EducationRow/EducationRow";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import Reveal from "../components/Reveal/Reveal";
import CursorGlow from "../components/CursorGlow/CursorGlow";
import FloatingFooter from "../components/FloatingFooter/FloatingFooter";

const Home=()=>{

const [
selectedProfile,
setSelectedProfile
]=useState(false);

const [
selectedSection,
setSelectedSection
]=useState("");

const handleProfileSelect=(
section:string
)=>{

setSelectedSection(section);

setSelectedProfile(true);

};

useEffect(()=>{

if(
selectedProfile &&
selectedSection
){

setTimeout(()=>{

const id=
selectedSection
.toLowerCase()
.replace(/\s/g,"");

const section=
document.getElementById(id);

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

return(

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

<CursorGlow/>

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

{/* About Section */}

<Reveal>

<section
id="aboutme"
className="
px-[6%]
py-24
"
>

<div
className="
max-w-6xl
mx-auto
"
>

<h2
className="
text-4xl
font-bold
mb-10
"
>

About Me

</h2>

<div
className="
bg-[#141414]

border
border-gray-800

rounded-3xl

p-8
md:p-14

hover:border-red-600
hover:shadow-[0_10px_40px_rgba(229,9,20,.15)]

transition-all
duration-300

relative
overflow-hidden
"
>

{/* Background Glow */}

<div
className="
absolute
top-[-100px]
right-[-100px]

w-[300px]
h-[300px]

bg-red-600/10

blur-[120px]
rounded-full
"
/>

<div
className="
relative
z-10
grid
md:grid-cols-2
gap-14
items-center
"
>

{/* Left Content */}

<div>

<p
className="
text-red-500
uppercase
tracking-[4px]
text-sm
mb-5
"
>

Systems • AI • Full Stack

</p>

<h2
className="
text-4xl
md:text-6xl
font-bold
leading-tight
"
>

Building
Scalable Digital
Systems

</h2>

<p
className="
text-gray-300
mt-8
leading-9
text-base
"
>

I’m a Full Stack Engineer focused on
building scalable backend systems,
AI-powered platforms, and modern
distributed applications.

My work spans enterprise payroll systems,
real-time communication platforms,
multi-modal AI infrastructure,
and microservices-based architectures
designed for scalability and operational reliability.

I enjoy engineering systems where performance,
architecture, and developer experience intersect —
from optimizing PostgreSQL workflows
to building intelligent RAG pipelines and
real-time WebSocket infrastructures.

</p>

{/* Tech Tags */}

<div
className="
flex
flex-wrap
gap-3
mt-10
"
>

{[
"Spring Boot",
"React",
"AI Infrastructure",
"Distributed Systems",
"System Design",
"Microservices",
"RAG Pipelines",
"WebSockets"
].map((item)=>(

<span

key={item}

className="
bg-red-900/20

border
border-red-800

px-4
py-2

rounded-full

text-sm

hover:bg-red-600/10
hover:border-red-500

transition
"

>

{item}

</span>

))}

</div>

</div>

{/* Right Stats */}

<div
className="
grid
grid-cols-2
gap-5
"
>

{[
{
number:"6+",
label:"Production Systems"
},
{
number:"3K+",
label:"Enterprise Users"
},
{
number:"4+",
label:"Major Projects"
},
{
number:"65%",
label:"AI Cost Reduction"
}
].map((item)=>(

<div

key={item.label}

className="
bg-black/40

border
border-gray-800

rounded-2xl

p-6

backdrop-blur-md

hover:border-red-600
hover:-translate-y-2

transition-all
duration-300
"

>

<h3
className="
text-4xl
font-bold
text-red-500
"
>

{item.number}

</h3>

<p
className="
text-gray-400
mt-3
leading-6
"
>

{item.label}

</p>

</div>

))}

</div>

</div>

</div>

</div>

</section>

</Reveal>

<Reveal>
<AchievementSection />
</Reveal>

<Reveal>
<ContactSection />
</Reveal>

<Footer />

<FloatingFooter/>

</>

)}

</main>

)

}

export default Home;
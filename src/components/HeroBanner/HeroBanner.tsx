import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import heroBanner from "../../assets/banners/hero-banner.jpg";
import profileImage from "../../assets/images/manoj-profile.jpg";

const HeroBanner=()=>{

const scrollToProjects=()=>{

document
.getElementById("projects")
?.scrollIntoView({

behavior:"smooth"

});

};

return(

<section
id="home"
className="
relative
h-screen
overflow-hidden
flex
items-center
px-[6%]
"
>

<img

src={heroBanner}

alt="banner"

className="
absolute
inset-0
w-full
h-full
object-cover
opacity-40
scale-110
"

/>

<div
className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/90
to-black/40
"
/>

<div
className="
absolute
bottom-0
left-0
right-0
h-[300px]
bg-gradient-to-t
from-black
to-transparent
"
/>

<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
relative
z-10
max-w-6xl
flex
flex-col
md:flex-row
items-center
gap-16
"

>

<motion.img

animate={{
y:[0,-8,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

whileHover={{
scale:1.05
}}

src={profileImage}

alt="profile"

className="
w-[180px]
h-[180px]
rounded-full
object-cover
border-4
border-red-500
shadow-[0_0_50px_rgba(229,9,20,.6)]
hidden
md:block
"

/>

<div
className="
bg-black/30
backdrop-blur-md
p-8
rounded-2xl
border
border-gray-700
max-w-3xl
"
>

<div
className="
inline-flex
items-center
gap-2
bg-green-500/20
text-green-400
px-4
py-2
rounded-full
text-sm
mb-5
"
>

<div
className="
w-2
h-2
rounded-full
bg-green-400
animate-pulse
"
/>

Open to Opportunities

</div>

<h1
className="
text-5xl
md:text-7xl
font-bold
"
>

Manoj Chavva

</h1>

<div
className="
text-red-400
text-xl
mt-5
h-[40px]
"
>

<TypeAnimation

sequence={[
"Full Stack Developer",1500,
"Spring Boot Developer",1500,
"React Engineer",1500,
"AI Builder",1500
]}

wrapper="span"

speed={50}

repeat={Infinity}

/>

</div>

<p
className="
text-gray-300
mt-6
leading-8
max-w-2xl
"
>

Building scalable applications,
AI-powered systems,
and modern user experiences.

</p>

<div
className="
flex
gap-6
mt-6
text-gray-300
"
>

<span className="hover:text-red-500 transition">
GitHub
</span>

<span className="hover:text-red-500 transition">
LinkedIn
</span>

<span className="hover:text-red-500 transition">
Email
</span>

</div>

<div
className="
flex
flex-wrap
gap-4
mt-8
"
>

<button

onClick={scrollToProjects}

className="
bg-white
text-black
px-8
py-3
rounded-md
font-semibold
hover:scale-105
transition
"

>

▶ View Projects

</button>

<a

href={`${import.meta.env.BASE_URL}resume.pdf`}

target="_blank"

rel="noopener noreferrer"

className="
bg-gray-700
px-8
py-3
rounded-md
hover:bg-gray-600
hover:scale-105
transition
"

>

📄 View Resume

</a>

</div>

<div
className="
mt-10
text-gray-500
animate-bounce
"
>

↓ Scroll to Explore

</div>

</div>

</motion.div>

</section>

)

}

export default HeroBanner;
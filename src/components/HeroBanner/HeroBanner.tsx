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
min-h-screen
py-28
overflow-hidden
flex
items-center
px-6
md:px-[6%]
"
>

{/* Background */}

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

{/* Overlay */}

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

{/* Bottom fade */}

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

{/* Content */}

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
w-full
mx-auto
flex
flex-col
md:flex-row
items-center
justify-center
gap-10
md:gap-16
text-center
md:text-left
"

>

{/* Profile Image */}

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
rounded-full
object-cover
border-4
border-red-500
shadow-[0_0_50px_rgba(229,9,20,.6)]

w-[140px]
h-[140px]

sm:w-[160px]
sm:h-[160px]

md:w-[180px]
md:h-[180px]

block
mx-auto
md:mx-0
"

/>

{/* Text Content */}

<div
className="
bg-black/30
backdrop-blur-md
p-6
sm:p-8
rounded-2xl
border
border-gray-700
max-w-3xl
w-full
"
>

{/* Status */}

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

{/* Name */}

<h1
className="
text-4xl
sm:text-5xl
md:text-7xl
font-bold
leading-tight
"
>

Manoj Chavva

</h1>

{/* Typing animation */}

<div
className="
text-red-400
text-base
sm:text-lg
md:text-xl
mt-5
min-h-[40px]
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

{/* Description */}

<p
className="
text-gray-300
mt-6
leading-7
sm:leading-8
max-w-2xl
mx-auto
md:mx-0
text-sm
sm:text-base
"
>

Building scalable applications,
AI-powered systems,
and modern user experiences.

</p>

{/* Socials */}

<div
className="
flex
justify-center
md:justify-start
gap-6
flex-wrap
mt-6
text-gray-300
"
>

<a

href="https://github.com/ChavvaManoj"

target="_blank"

rel="noopener noreferrer"

className="
hover:text-red-500
transition
cursor-pointer
"

>

GitHub

</a>

<a

href="https://www.linkedin.com/in/manoj-chavva-b26548217/"

target="_blank"

rel="noopener noreferrer"

className="
hover:text-red-500
transition
cursor-pointer
"

>

LinkedIn

</a>

<a

href="mailto:chavva.manoj@gmail.com"

className="
hover:text-red-500
transition
cursor-pointer
"

>

Email

</a>

</div>

{/* Buttons */}

<div
className="
flex
flex-col
sm:flex-row
gap-4
mt-8
items-center
md:items-start
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
w-full
sm:w-auto
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
w-full
sm:w-auto
text-center
"

>

📄 View Resume

</a>

</div>

{/* Scroll indicator */}

<div
className="
mt-10
text-gray-500
animate-bounce
text-sm
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
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

const contacts = [

{
  icon:FaEnvelope,

  title:"Email",

  value:"chavva.manoj@gmail.com",

  link:"mailto:chavva.manoj@gmail.com"
},

{
  icon:FaGithub,

  title:"GitHub",

  value:"github.com/ChavvaManoj",

  link:"https://github.com/ChavvaManoj"
},

{
  icon:FaLinkedin,

  title:"LinkedIn",

  value:"linkedin.com/in/manoj-chavva",

  link:"https://www.linkedin.com/in/manoj-chavva-b26548217/"
},

{
  icon:FaGlobe,

  title:"Portfolio",

  value:"manoj-chavva-resume.vercel.app",

  link:"https://manoj-chavva-resume.vercel.app"
}

];

const ContactSection = () => {

return(

<section
id="contact"
className="
px-[6%]
py-20
"
>

<h2
className="
text-4xl
font-bold
mb-10
"
>

Contact

</h2>

<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-6
"
>

{contacts.map((item)=>{

const Icon=item.icon;

return(

<motion.a

key={item.title}

href={item.link}

target="_blank"

rel="noopener noreferrer"

whileHover={{
scale:1.05,
y:-10
}}

transition={{
duration:.3
}}

className="
bg-[#181818]
rounded-xl
p-6
flex
flex-col
gap-4
border
border-gray-700
hover:border-red-600
hover:shadow-[0_0_30px_rgba(229,9,20,.4)]
transition-all
"

>

<Icon
size={35}
className="
text-red-600
"
/>

<h3
className="
text-xl
font-semibold
"
>

{item.title}

</h3>

<p
className="
text-gray-400
break-all
"
>

{item.value}

</p>

</motion.a>

)

})}

</div>

</section>

)

}

export default ContactSection;
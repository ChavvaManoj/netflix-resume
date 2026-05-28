import { useEffect, useState } from "react";

const sections = [
  "Home",
  "Projects",
  "Experience",
  "Education",
  "Skills",
  "Contact"
];

interface Props{
  onLogoClick:()=>void
}

const Navbar = ({
  onLogoClick
}:Props)=>{

const [scrolled,setScrolled]=
useState(false);

const [active,setActive]=
useState("Home");

useEffect(()=>{

const handleScroll=()=>{

setScrolled(
window.scrollY>50
);

const ids=[

"home",
"projects",
"experience",
"education",
"skills",
"contact"

];

for(const id of ids){

const section=
document.getElementById(
id
);

if(section){

const top=
section.offsetTop-200;

const height=
section.offsetHeight;

if(

window.scrollY>=top &&

window.scrollY<
top+height

){

setActive(

id.charAt(0)
.toUpperCase()

+

id.slice(1)

);

break;

}

}

}

};

window.addEventListener(
"scroll",
handleScroll
);

handleScroll();

return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};

},[]);

return(

<nav

className={`

fixed
top-0
left-0
w-full
z-50
px-[6%]
py-5
flex
justify-between
items-center
transition-all
duration-500

${scrolled

?`
bg-black/80
backdrop-blur-md
shadow-lg
`

:`
bg-transparent
`
}

`}

>

{/* Logo */}

<h1

onClick={onLogoClick}

className="
text-red-600
text-4xl
font-bold
cursor-pointer
hover:scale-110
transition
"

>

MC

</h1>

{/* Nav items */}

<div
className="
hidden
md:flex
gap-8
"
>

{sections.map((item)=>(

<button

key={item}

onClick={()=>{

document
.getElementById(
item.toLowerCase()
)
?.scrollIntoView({

behavior:
"smooth"

});

}}

className={`

relative
transition-all
duration-300

${
active===item

?`
text-white
`

:`
text-gray-400
hover:text-white
`
}

`}

>

{item}

{active===item && (

<div

className="
absolute
left-0
bottom-[-6px]
w-full
h-[2px]
bg-red-600
rounded-full
"

/>

)}

</button>

))}

</div>

</nav>

)

}

export default Navbar;
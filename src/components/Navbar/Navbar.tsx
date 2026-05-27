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

ids.forEach((id)=>{

const section=
document.getElementById(id);

if(section){

const top=
section.offsetTop-150;

const height=
section.offsetHeight;

if(

window.scrollY>=top &&
window.scrollY<
top+height

){

setActive(

id.charAt(0)
.toUpperCase()+
id.slice(1)

);

}

}

});

};

window.addEventListener(
"scroll",
handleScroll
);

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
item
.toLowerCase()
)
?.scrollIntoView({

behavior:
"smooth"

});

}}

className="
relative
text-gray-300
hover:text-white
transition
"

>

{item}

{active===item && (

<div

className="
absolute
w-full
h-[2px]
bg-red-600
bottom-[-6px]
left-0
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

export default Navbar
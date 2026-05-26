import { education }
from "../../data/education";

import EducationCard
from "../EducationCard/EducationCard";

const EducationRow=()=>{

return(

<section
id="education"
className="section-padding"
>

<h2
className="
text-4xl
font-bold
mb-8
"
>
Education
</h2>

<div
className="
grid
md:grid-cols-2
gap-6
"
>

{education.map((edu)=>(

<EducationCard

key={edu.id}

degree={edu.degree}
institution={edu.institution}
year={edu.year}
highlights={edu.highlights}

/>

))}

</div>

</section>

)

}

export default EducationRow
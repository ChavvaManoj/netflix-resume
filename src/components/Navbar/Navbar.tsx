const Navbar = () => {

  const navigateToSection = (
    sectionId:string
  ) => {

    const section =
      document.getElementById(
        sectionId
      );

    section?.scrollIntoView({
      behavior:"smooth"
    });

  };

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-black/80
      backdrop-blur-md
      px-[6%]
      py-5
      flex
      items-center
      justify-between
      border-b
      border-gray-800
      "
    >

      <div className="flex items-center gap-10">

        <h1
          className="
          text-red-600
          text-3xl
          font-bold
          cursor-pointer
          "
          onClick={() =>
            navigateToSection(
              "home"
            )
          }
        >
          MC
        </h1>

        <div className="hidden md:flex gap-6">

          {[
            {
              name:"Projects",
              id:"projects"
            },

            {
              name:"Experience",
              id:"experience"
            },

            {
              name:"Skills",
              id:"skills"
            },

            {
              name:"Contact",
              id:"contact"
            }

          ].map((item)=>(

            <button
              key={item.id}

              onClick={() =>
                navigateToSection(
                  item.id
                )
              }

              className="
              hover:text-red-500
              transition
              "
            >
              {item.name}
            </button>

          ))}

        </div>

      </div>

      <div className="flex gap-5">

        <a
        href="https://github.com/ChavvaManoj"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition"
        >
        GitHub
        </a>

                <a
        href="https://www.linkedin.com/in/manoj-chavva-b26548217/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition"
        >
        LinkedIn
        </a>

        <a
          href="/resume.pdf"
          download
          className="
          hover:text-red-500
          "
        >
          Resume
        </a>

      </div>

    </nav>

  );

};

export default Navbar;
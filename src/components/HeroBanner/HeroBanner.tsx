import { motion } from "framer-motion";

import heroBanner from
"../../assets/banners/hero-banner.jpg";

import profileImage from
"../../assets/images/manoj-profile.jpg";

const HeroBanner = () => {

  return (

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
        "
      />

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black
        via-black/80
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
        max-w-5xl
        flex
        items-center
        gap-10
        "
      >

        <img
          src={profileImage}
          alt="profile"

          className="
          w-[180px]
          h-[180px]
          rounded-full
          object-cover
          border-4
          border-red-500
          hidden
          md:block
          "
        />

        <div>

          <p
            className="
            text-red-500
            uppercase
            tracking-[6px]
            mb-3
            "
          >
            Featured Developer
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            Manoj Chavva
          </h1>

          <p
            className="
            text-red-400
            text-xl
            mt-5
            "
          >
            Full Stack Developer |
            Spring Boot |
            React |
            AI Applications
          </p>

          <p
            className="
            text-gray-300
            mt-6
            leading-8
            "
          >
            Building scalable
            applications,
            AI-powered systems,
            and modern user experiences.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
              bg-white
              text-black
              px-8
              py-3
              rounded-md
              font-semibold
              "
            >
              ▶ View Projects
            </button>

            <button
              className="
              bg-gray-700
              px-8
              py-3
              rounded-md
              "
            >
              Download Resume
            </button>

          </div>

        </div>

      </motion.div>

    </section>

  );

};

export default HeroBanner;
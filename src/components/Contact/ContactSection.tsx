const ContactSection = () => {

  return (

    <section
      id="contact"
      className="
      section-padding
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
        md:grid-cols-2
        gap-6
        "
      >

        <div
          className="
          bg-[#181818]
          rounded-xl
          p-8
          "
        >

          <h3 className="text-xl font-bold">
            Email
          </h3>

          <p className="text-gray-400 mt-3">
            chavva.manoj@example.com
          </p>

        </div>

        <div
          className="
          bg-[#181818]
          rounded-xl
          p-8
          "
        >

          <h3 className="text-xl font-bold">
            LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/manoj-chavva-b26548217/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-gray-400
            mt-3
            block
            hover:text-red-500
            "
            >
            linkedin.com/in/manoj-chavva
            </a>

        </div>

        <div
          className="
          bg-[#181818]
          rounded-xl
          p-8
          "
        >

          <h3 className="text-xl font-bold">
            GitHub
          </h3>

          <a
  href="https://github.com/ChavvaManoj"
  target="_blank"
  rel="noopener noreferrer"
  className="
  text-gray-400
  mt-3
  block
  hover:text-red-500
  transition
  "
>
  github.com/ChavvaManoj
</a>

        </div>

        <div
          className="
          bg-[#181818]
          rounded-xl
          p-8
          "
        >

          <h3 className="text-xl font-bold">
            Portfolio
          </h3>

          <p className="text-gray-400 mt-3">
            portfolio-coming-soon.com
          </p>

        </div>

      </div>

    </section>

  );

};

export default ContactSection;
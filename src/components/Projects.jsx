import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/img/Fake.png",
      subtitle: "Fake Image Detector",
      title: "Tempered Detect",
      description:
        "A machine learning-based web app that analyzes uploaded images and documents, detects manipulation, and highlights edited regions with detailed forensic insights.",
      tags: ["Machine Learning", "Image Forensics", "React + TailwindCSS", "ExpressJs"],
      link: "",
      git: "https://github.com/AyushM198/Fake_Image_Detection"
    }
    ,
    {
      id: 2,
      image: "/img/cour_ss.png",
      subtitle: "ONLINE LEARNING PLATFORM",
      title: "A2Z LearningPlatform",
      description:
        "Comprehensive online course platform offering interactive learning paths for students across multiple domains.",
      tags: ["API Integration", "UI Design", "React", "Web Application", "ExpressJs"],
      link: "",
      git: "https://github.com/AyushM198/Online-Course-Platform"
    }
    ,
    {
      id: 3,
      image: "/img/zentry.png",
      subtitle: "Web Development",
      title: "Zentry",
      description:
        "Recreated the Zentry game landing page using TailwindCSS and GSAP for responsive animations.",
      tags: ["GSAP Animation", "Interactive Design", "React.js", "TailwindCSS"],
      link: "https://zentry-web-five.vercel.app/",
      git: "https://github.com/AyushM198/Zentry_Web"
    },
    {
      id: 4,
      image: "/img/moji_ss.png",
      subtitle: "ED-TECH PLATFORM",
      title: "Mojito",
      description:
        "Created a fun Mojito-themed webpage with smooth GSAP animations using TailwindCSS",
      tags: ["React", "TailwindCSS", "UI/UX", "GSAP", "Web App"],
      link: "https://mojito-gsap-jl4b.vercel.app/",
      git: "https://github.com/AyushM198/Mojito_gsap"
    },
  ]

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="relative w-full">
      <div className=" py-35 bg-[#f7f6f4] w-full md:px-12 lg:px-35 ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight relative inline-block">
            My Work
          </h2>
          <p className="max-w-[700px] text-secondary/80 text-base mb-20 sm:text-lg md:text-xl/relaxed font-body mt-8">
            Deep dives into design challenges, research methodologies, and creative solutions that drive meaningful user experiences.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-16 space-y-16 md:space-y-38 ">
          {projects.map((project, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, amount: 0.3 })

            return (
              <motion.div
                key={project.id}
                ref={ref}
                className={`flex flex-col md:flex-row border-t border-gray-200 items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse border-t border-gray-200" : ""
                  }`}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* Image Section */}
                <div
                  className={`relative w-full md:w-1/2 rounded-xl  overflow-hidden bg-[#cbcbc3] group 
    ${project.link ? "cursor-pointer" : "cursor-not-allowed"}`}
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, "_blank");
                    } else {
                      alert("🚧 This project is not hosted yet! View GitHub Code");
                    }
                  }}
                >
                  <div className="relative w-full h-64 sm:h-80 md:h-90 aspect-video md:aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                    {/* Dark Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

                    {/* Visit Icon */}
                    <div className="absolute bottom-8 right-10 flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center 
          opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
          transition-all duration-300 delay-100 
          ${project.link ? "bg-white/20 cursor-pointer" : "bg-gray-400/40 cursor-not-allowed"}`}
                      >
                        <FiExternalLink
                          size={22}
                          className={`text-white transition-all duration-300 ease-out delay-300
            ${project.link ? "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0" : "opacity-50"}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="bg-[#f7f6f4] text-black w-full md:w-1/2 text-center md:text-left">
                  <h4 className="uppercase font-PatrickHand tracking-wider mb-2 text-gray-800 text-sm sm:text-base md:text-lg font-medium">
                    {project.subtitle}
                  </h4>

                  {/* Title clickable */}
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 transition 
      ${project.link ? "cursor-pointer hover:text-gray-900" : "cursor-not-allowed text-gray-700"}`}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, "_blank");
                      } else {
                        alert("🚧 This project is not hosted yet!");
                      }
                    }}
                  >
                    {project.title}
                  </h2>

                  <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mb-6">
                    {project.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full border border-gray-600 text-gray-700 text-xs sm:text-sm hover:bg-gray-700/10 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link (only triggers git) */}
                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm sm:text-base text-gray-700 hover:text-black underline underline-offset-4"
                    >
                      View GitHub code ↗
                    </a>
                  )}
                </div>
              </motion.div>

            )
          })}
        </div>
      </div>
    </section>
  )
}

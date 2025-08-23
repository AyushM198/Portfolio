import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/img/course.jpeg",
      subtitle: "E-COMMERCE PLATFORM",
      title: "Shoe CA",
      description:
        "Modern shoe e-commerce website featuring comprehensive product categories, seamless shopping experience, and engaging visual design for footwear enthusiasts.",
      tags: ["E-commerce Design", "UI Design", "Web Design", "Product Showcase"],
      link: "#",
    },
    {
      id: 2,
      image: "/img/portfolio.jpeg",
      subtitle: "PORTFOLIO WEBSITE",
      title: "Creative Folio",
      description:
        "A sleek personal portfolio site with smooth scroll animations, project showcases, and responsive design optimized for all devices.",
      tags: ["Portfolio", "Frontend", "GSAP Animations", "Responsive Design"],
      link: "#",
    },
    {
      id: 3,
      image: "/img/dashboard.jpeg",
      subtitle: "ANALYTICS DASHBOARD",
      title: "Insight Pro",
      description:
        "Data-driven analytics dashboard featuring interactive charts, real-time metrics, and dark/light theme toggle for business insights.",
      tags: ["Dashboard", "Data Visualization", "React.js", "TailwindCSS"],
      link: "#",
    },
    {
      id: 4,
      image: "/img/learning.jpeg",
      subtitle: "ED-TECH PLATFORM",
      title: "Learnly",
      description:
        "Online learning platform with course management, progress tracking, and a modern UI designed for engaging digital education.",
      tags: ["EdTech", "UI/UX", "Course Management", "Web App"],
      link: "#",
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
      <div className="py-35 bg-[#f7f6f4] w-full px-6 md:px-12 lg:px-30">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight relative inline-block">
            My Work
          </h2>
          <p className="max-w-[700px] text-secondary/80 text-base mb-12 sm:text-lg md:text-xl/relaxed font-body mt-4">
            Deep dives into design challenges, research methodologies, and creative solutions that drive meaningful user experiences.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-16 space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, amount: 0.3 })

            return (
              <motion.div
                key={project.id}
                ref={ref}
                className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden bg-[#cbcbc3] group cursor-pointer">
                  <div className="relative w-full h-64 sm:h-80 md:h-100 aspect-video md:aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                    {/* Dark Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>


                    {/* Visit Icon */}
                    <div className="absolute bottom-8 right-10 flex flex-col items-center">
                      {/* Glass Circle with Icon inside */}
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center 
                  opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-300 delay-100">
                        <FiExternalLink
                          size={22}
                          className="text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-300 ease-out delay-300"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Text Section */}
                <div className="bg-[#f7f6f4] text-black w-full md:w-1/2 text-center md:text-left">
                  <h4 className="uppercase tracking-wider mb-2 text-gray-800 text-sm sm:text-base md:text-lg font-medium">
                    {project.subtitle}
                  </h4>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm sm:text-base text-gray-700 hover:text-black underline underline-offset-4"
                    >
                      View Case Study ↗
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

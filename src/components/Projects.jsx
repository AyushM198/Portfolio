import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import ProjectCard from "./ProjectsCard"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
}

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className=" relative w-full  ">
      <div className=" py-20   bg-white w-full px-30 ">
        {/* Heading */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className=" mt-5 mb-20">


            <h2 className="text-8xl md:text-7xl mb-4 font-bold  font-heading tracking-tight relative inline-block">
              My Work
              
            </h2>
            <p className="max-w-[700px] text-secondary/80 md:text-xl/relaxed font-body mt-4">
              Deep dives into design challenges, research methodologies, and creative solutions that drive meaningful user experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Projects List */}
        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row items-center h-105 gap-10  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Image */}
              <div className="relative w-full h-full md:w-1/2 rounded-b-2xl overflow-hidden bg-gray-100">
                {/* Image wrapper */}
                <div className="relative w-full h-full aspect-square overflow-hidden  translate-y-[-20px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </div>




              {/* data */}
              {/* Text */}
              <div className="bg-white text-black pt-4 pr-20  w-full md:w-1/2 text-center md:text-left h-full">
                {/* Subtitle */}
                <h4 className="uppercase tracking-wider mb-2 text-gray-800 text-lg font-medium">
                  {project.subtitle}
                </h4>

                {/* Title */}
                <h2 className=" md:text-5xl font-bold mb-7">{project.title}</h2>

                {/* Description */}
                <p className="text-gray-800 leading-relaxed mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full border border-gray-600 text-gray-300 text-sm hover:bg-gray-700/40 transition"
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
                    className="inline-block mt-6 text-gray-300 hover:text-white underline underline-offset-4"
                  >
                    View Case Study ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

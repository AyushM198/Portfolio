// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Card } from "./ui/card"; // ✅ correct if you're using shadcn/ui
// import { cn } from "../lib/utils"
// import CountUp from "react-countup"; // ✅ using react-countup directly

// export default function ProjectCard({ project, index }) {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         delay: index * 0.1,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//   };

//   return (
//     <motion.div
//       variants={cardVariants}
//       whileHover={{
//         y: -10,
//         boxShadow:
//           "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//         transition: { duration: 0.3 },
//       }}
//     >
//       <Card className="overflow-hidden border-0 bg-white/5 backdrop-blur-sm relative group">
//         {/* Gradient hover effects */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg" />
//           <div className="absolute inset-0 border border-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
//         </div>

//         {/* Image */}
//         <div className="relative h-[240px] w-full overflow-hidden">
//           <img
//             src={project.image || "/placeholder.svg"}
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <h3 className="text-2xl font-bold font-heading mb-2">
//             {project.title}
//           </h3>
//           <p className="text-secondary/80 mb-4 font-body">
//             {project.description}
//           </p>

//           {/* Stats */}
//           {project.stats && (
//             <div className="flex items-center mb-6 bg-white/10 p-3 rounded-lg">
//               <div className="text-sm font-body">
//                 <span className="block text-secondary/60">
//                   {project.stats.label}
//                 </span>
//                 <div className="flex items-baseline">
//                   <span className="text-xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//                     <CountUp end={project.stats.value} duration={2} />
//                   </span>
//                   <span className="ml-1 text-secondary/80">%</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Button */}
//           <button
//             onClick={handleClick}
//             disabled={isLoading}
//             className="w-full relative overflow-hidden group/button rounded-full"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 group-hover/button:opacity-100 transition-opacity duration-300" />
//             <div className="relative px-6 py-3 flex items-center justify-center">
//               {isLoading ? (
//                 <div className="flex space-x-1">
//                   {["0s", "0.2s", "0.4s"].map((delay, i) => (
//                     <motion.div
//                       key={i}
//                       className="w-2 h-2 rounded-full bg-white"
//                       animate={{ y: [0, -5, 0] }}
//                       transition={{
//                         repeat: Infinity,
//                         duration: 0.6,
//                         delay: i * 0.2,
//                       }}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <span className="text-white font-medium font-body">
//                   View Case Study
//                 </span>
//               )}
//             </div>
//             {/* Shimmer effect */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full opacity-30">
//               <motion.div
//                 className="absolute top-0 -left-[100%] w-[200%] h-full bg-white/30"
//                 animate={{ left: ["0%", "100%"] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 2,
//                   ease: "linear",
//                   repeatDelay: 1,
//                 }}
//               />
//             </div>
//           </button>
//         </div>
//       </Card>
//     </motion.div>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { Card } from "./ui/card";

// export default function ProjectCard({ project, index = 0 }) {
//   // Safe defaults so you never get "Cannot read properties of undefined"
//   const {
//     image = "/placeholder.svg",
//     title = "Project Title",
//     description = "Short description of the project goes here.",
//     category = "",                // e.g. "Vacation Booking App"
//     tags = [],                    // e.g. ["UI Design","UX Research","Mobile App"]
//     href = "#"                    // case study link
//   } = project || {};

//   // Fallback: if no tags were provided but you still have stats.label, show that as a chip
//   const chipTags =
//     tags && tags.length
//       ? tags
//       : project?.stats?.label
//       ? [project.stats.label]
//       : [];

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         delay: index * 0.1,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//   };

//   return (
//     <motion.div
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover={{ y: -6, transition: { duration: 0.25 } }}
//       className="w-full"
//     >
//       {/* Use Card only as a container; no border/background to match the screenshot */}
//       <Card className="border-0 bg-transparent p-0 group">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left: Image */}
//           <div className="rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
//             />
//           </div>

//           {/* Right: Content */}
//           <div>
//             {category && (
//               <p className="uppercase text-sm tracking-widest text-white/50 mb-2">
//                 {category}
//               </p>
//             )}

//             <h3 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-4">
//               {title}
//             </h3>

//             <p className="text-white/70 md:text-lg leading-relaxed mb-6">
//               {description}
//             </p>

//             {/* Pills */}
//             {chipTags.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {chipTags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-white/80"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* View Case Study link */}
//             <a
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium"
//             >
//               View Case Study
//               <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </a>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   );
// }



// src/components/ProjectsCard.jsx
import { motion } from "framer-motion"

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-neutral-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold font-heading">{project.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm font-body">
          {project.description}
        </p>

        {/* Stats */}
        {project.stats && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium">
            <span className="text-primary">{project.stats.value}%</span>
            <span className="text-gray-500">{project.stats.label}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

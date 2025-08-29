// "use client";

// import React from "react";
// import { Dock, DockIcon } from "./magicui/dock";
// import { FaXTwitter } from "react-icons/fa6";
// import { GiSpiderWeb } from "react-icons/gi";

// import {
//     Home,
//     Github,
//     Linkedin,
//     Mail,
//     Sun,
// } from "lucide-react"; // using lucide-react for clean stroke icons

// export function DockDemo() {
//     // Function to scroll to project section
//     const scrollToProjects = () => {
//         const section = document.getElementById("projects"); // make sure your Projects section has id="projects"
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <div className="relative flex w-full justify-center bg-transparent">
//             <Dock direction="middle" className="rounded-2xl px-4 py-2 shadow-lg backdrop-blur-md">

//                 {/* Home */}
//                 <DockIcon>
//                     <a href="#home">
//                         <Home className="size-6" />
//                     </a>
//                 </DockIcon>

//                 {/* Projects (scroll) */}
//                 <DockIcon onClick={scrollToProjects} className="cursor-pointer">
//                     <GiSpiderWeb className="size-6" />
//                 </DockIcon>

//                 <Divider />

//                 {/* Github */}
//                 <DockIcon>
//                     <a href="https://github.com/AyushM198" target="_blank" rel="noopener noreferrer">
//                         <Github className="size-6" />
//                     </a>
//                 </DockIcon>

//                 {/* LinkedIn */}
//                 <DockIcon>
//                     <a href="https://www.linkedin.com/in/ayush-mandawgade-67a359329/" target="_blank" rel="noopener noreferrer">
//                         <Linkedin className="size-6" />
//                     </a>
//                 </DockIcon>

//                 {/* X (Twitter) */}
//                 <DockIcon>
//                     <a href="https://x.com/Ayush_manx" target="_blank" rel="noopener noreferrer">
//                         <FaXTwitter className="size-6" />
//                     </a>
//                 </DockIcon>

//                 {/* Mail */}
//                 <DockIcon>
//                     <a href="mailto:ayushmandawgade123@gmail.com">
//                         <Mail className="size-6" />
//                     </a>
//                 </DockIcon>


//                 <Divider />

//                 {/* Toggle theme or sun action */}
//                 <DockIcon>
//                     <Sun className="size-6" />
//                 </DockIcon>
//             </Dock>
//         </div>
//     );
// }

// // simple divider component
// function Divider() {
//     return <div className="mx-2 h-6 w-px bg-gray-300" />;
// }

"use client";

import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { FaXTwitter } from "react-icons/fa6";
import { GiSpiderWeb } from "react-icons/gi";

import { Home, Github, Linkedin, Mail, Sun } from "lucide-react";

export function DockDemo() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex justify-center w-full bg-transparent md:w-full ">
      {/* Make Dock horizontally scrollable on small screens */}
      <div className="overflow-x-auto lg:overflow-visible w-full lg:w-auto px-0 ">
        <Dock direction="middle" className="rounded-2xl px-2 py-2 lg:px-4 lg:py-2 shadow-lg backdrop-blur-md flex-nowrap">

          {/* Home */}
          <DockIcon>
            <a href="#home">
              <Home className="size-5 lg:size-6" />
            </a>
          </DockIcon>

          {/* Projects */}
          <DockIcon onClick={scrollToProjects} className="cursor-pointer">
            <GiSpiderWeb className="size-5 lg:size-6" />
          </DockIcon>

          <Divider />

          {/* Github */}
          <DockIcon>
            <a href="https://github.com/AyushM198" target="_blank" rel="noopener noreferrer">
              <Github className="size-5 lg:size-6" />
            </a>
          </DockIcon>

          {/* LinkedIn */}
          <DockIcon>
            <a href="https://www.linkedin.com/in/ayush-mandawgade-67a359329/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-5 lg:size-6" />
            </a>
          </DockIcon>

          {/* X (Twitter) */}
          <DockIcon>
            <a href="https://x.com/Ayush_manx" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="size-5 lg:size-6" />
            </a>
          </DockIcon>

          {/* Mail */}
          <DockIcon>
            <a href="mailto:ayushmandawgade123@gmail.com">
              <Mail className="size-5 lg:size-6" />
            </a>
          </DockIcon>

          <Divider />

          {/* Theme / Sun */}
          <DockIcon>
            <Sun className="size-5 lg:size-6" />
          </DockIcon>

        </Dock>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="mx-1 lg:mx-2 h-6 w-px bg-gray-300" />;
}

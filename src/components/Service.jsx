import { Palette, Cpu, Code, Sparkles } from "lucide-react";

export default function Services() {
 const services = [
  {
    icon: <Code className=" w-8 h-8 mx-auto mb-10 mt-6 text-gray-500" />,
    title: "Web Development",
    description:
      "Building responsive, scalable, and high-performance web applications using modern frameworks and clean code practices.",
    points: [
      "React.js Development",
      "Tailwind CSS Styling",
      "GSAP Animations",
      "Secure Authentication (OAuth/JWT)",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8 mx-auto mb-10 mt-6 text-gray-500" />,
    title: "AI & Machine Learning",
    description:
      "Exploring AI-driven solutions and integrating ML models into applications to create intelligent digital experiences.",
    points: [
      "AI/ML Projects",
      "Data-Driven Solutions",
      "Model Integration",
      "AI-Powered Applications",
    ],
  },
  {
    icon: <Palette className="w-8 h-8 mx-auto mb-10 mt-6 text-gray-500" />,
    title: "Design & Creative Engineering",
    description:
      "Merging UI/UX principles with creative engineering to craft visually appealing, interactive, and user-friendly experiences.",
    points: [
      "UI/UX Design",
      "Interactive Prototypes",
      "Responsive Layouts",
      "Creative Web Animations",
    ],
  },
];

  return (
   <section
  className="text-black py-20 px-6 md:px-12 lg:py-24 relative z-20"
  style={{
    backgroundImage: "url('/img/paper_bg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  }}
>
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className="md:text-[80px] text-5xl mb-6 font-PatrickHand">
      Services I Provide
    </h2>
    <p className="text-gray-500 text-base md:text-2xl">
      Exploring the intersection of AI and web design to turn concepts into powerful, user-driven experiences.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-12">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-black/5 p-8 rounded-xl shadow-xl text-center flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out hover:bg-black/10"
      >
        {service.icon}
        <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="text-black font-semibold text-sm space-y-2">
          {service.points.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

  );
}

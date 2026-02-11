import { useEffect } from "react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiRedis,
  SiFirebase,
  SiPython,
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiExpress,
  SiSpringboot,
  SiApachemaven,
  SiGithub,
  SiNextdotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <section
      id="skills"
      className="bg-portfolio-background px-4 py-12 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="section-title animate-item">
          <span className="mr-2">02.</span> SKILLS
        </h2>

        {/* Compact Bento Grid with Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 md:auto-rows-fr">
          
          {/* Large - Java/Spring */}
          <div className="col-span-2 md:row-span-2 border-4 border-black bg-white p-3 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item">
            <div className="h-full flex flex-col">
              <span className="text-[15px] font-black uppercase tracking-wider opacity-60">Backend</span>
              <div className="flex-1 flex items-center">
                <div className="flex items-center gap-2 md:gap-3">
                  <FaJava size={80} /> <h3 className="text-4xl md:text-7xl font-black">Java</h3>
                </div>
              </div>
              <div className="flex gap-1 mt-2 flex-wrap">
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">CORE JAVA</span>
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">OOPS</span>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="col-span-2 border-4 border-black bg-white p-2.5 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item">
            <span className="text-[9px] font-black uppercase opacity-60">Frontend</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <SiReact size={20} /> 
              <h3 className="text-lg font-black">REACT</h3>
              <br/>
              <SiJavascript size={28} />
              <h3 className="text-lg font-black">Javascript</h3>
            </div>
          </div>

          {/* HTML5 */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiHtml5 size={24} />
            <span className="text-[20px] font-black">HTML5</span>
          </div>

          {/* CSS3 */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiCss3 size={24} />
            <span className="text-[20px] font-black">CSS3</span>
          </div>

          {/* Node.js */}
          <div className="col-span-2 border-4 border-black bg-white p-2.5 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item">
            <span className="text-[9px] font-black uppercase opacity-60">Backend</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <SiNodedotjs size={25} />
              <h3 className="text-2lg font-black">NODE.JS</h3>
            </div>
          </div>

          {/* Tailwind */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiTailwindcss size={20} />
            <span className="text-[20px] font-black text-center">TAILWIND</span>
          </div>

          {/* Git */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiGit size={20} />
            <span className="text-[25px] font-black">GIT</span>
          </div>

          {/* Large - Springboot */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 border-4 border-black bg-white p-3 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-[box-shadow,transform] duration-150 ease-out animate-item">
            <div className="h-full flex flex-col">
              <span className="text-[15px] font-black uppercase tracking-wider opacity-60">Backend</span>
              <div className="flex-1 flex items-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <SiSpringboot size={70} /> <h3 className="text-xl md:text-4xl font-black">Springboot</h3>
                </div>
              </div>
              <div className="flex gap-1 mt-2 flex-wrap">
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">SPRING</span>
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">JPA</span>
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">SECURITY</span>
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">Hibernate</span>
                <span className="px-1.5 py-0.5 bg-black text-white text-[12px] font-bold">REST APIs</span>
              </div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="col-span-2 border-4 border-black bg-white p-2.5 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item">
            <span className="text-[9px] font-black uppercase opacity-60">Database</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <SiMongodb size={30} />
              <h3 className="text-2lg font-black">MONGODB</h3>
            </div>
          </div>

           {/* PostgreSQL */}
          <div className="col-span-2 border-4 border-black bg-white p-2.5 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item">
            <span className="text-[9px] font-black uppercase opacity-60">Database</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <SiPostgresql size={40} />
              <h3 className="text-2lg font-black">POSTGRESQL</h3>
            </div>
          </div>

          {/* Express */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiExpress size={20} />
            <span className="text-[25px] font-black text-center">EXPRESS</span>
          </div>

          {/* Docker */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiDocker size={25} />
            <span className="text-[25px] font-black">DOCKER</span>
          </div>
          {/* Firebase */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiNextdotjs size={25} />
            <span className="text-[25px] font-black text-center">NEXT.JS</span>
          </div>

         

          {/* Redis */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiRedis size={20} />
            <span className="text-[25px] font-black">REDIS</span>
          </div>

          {/* Firebase */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiFirebase size={20} />
            <span className="text-[25px] font-black text-center">FIREBASE</span>
          </div>

          

          {/* Python */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiPython size={20} />
            <span className="text-[25px] font-black">PYTHON</span>
          </div>

           {/* Maven */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiApachemaven size={20} />
            <span className="text-[25px] font-black">MAVEN</span>
          </div>

           {/* GitHub */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiGithub size={20} />
            <span className="text-[20px] font-black">GITHUB</span>
          </div>



          {/* C++ */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiCplusplus size={20} />
            <span className="text-[25px] font-black">C++</span>
          </div>

          {/* C */}
          <div className="border-4 border-black bg-white p-2 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item flex flex-col items-center justify-center gap-1">
            <SiC size={20} />
            <span className="text-[30px] font-black">C</span>
          </div>

          {/* Wide - Tools */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 border-4 border-black bg-white p-4 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all animate-item">
            <span className="text-lg font-black uppercase mb-3 block opacity-60">Also Working With</span>
            <div className="flex flex-wrap gap-2">
              {["Kafka","Microservices", "JWT", "Vite", "Vercel", "Render", "Postman", "RabbitMQ", "Mongoose"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 border-2 border-black bg-white text-black font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

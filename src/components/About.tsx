
import { useEffect } from "react";

const About = () => {
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
    <section id="about" className="px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4">
            <p className="animate-item">
              Hello! I'm Ajay Lohith Kulla, a dedicated professional with a background in Electrical Engineering, currently developing skills in Java and MERN technologies. I'm passionate about software development with experience in projects like object detection and task-based learning.
            </p>
            <p className="animate-item">
              My journey into software development started during my engineering studies, where I discovered my passion for creating digital solutions. I'm particularly interested in web development and have been focusing on building my skills in both frontend and backend technologies.
            </p>
            <p className="animate-item">
              I'm currently seeking an entry-level role to apply my technical skills and contribute to innovative solutions in the software development industry.
            </p>
            <p className="animate-item">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "HTML & CSS", "Java"].map((tech) => (
                <li key={tech} className="flex items-center animate-item">
                  <span className="text-portfolio-green mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2 animate-item">
            <div className="relative group mx-auto max-w-xs">
              <div className="absolute inset-0 border-2 border-portfolio-green rounded transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="relative z-10 bg-portfolio-navy">
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-portfolio-lightNavy flex items-center justify-center text-portfolio-green">
                    {/* This would be replaced with an actual image in production */}
                    <span className="text-6xl">AK</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-portfolio-green opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

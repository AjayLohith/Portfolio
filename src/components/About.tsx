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
    <section id="about" className="px-6" style={{ backgroundColor: "#edf4f7" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">01.</span> About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 md:flex-row-reverse gap-10">
          {/* Photo Placeholder */}
          <div className="md:col-span-0 animate-item">
            {/* <div className="relative group mx-auto w-[360px] h-[360px]"> */}
              {/* Outer Circle */}
              {/* <div className="absolute inset-0 border-4 border-portfolio-green rounded-full transform translate-x-5 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div> */}
              {/* Inner Circle */}
              {/* <div className="relative z-10 bg-portfolio-navy rounded-full overflow-hidden w-full h-full"> */}
                {/* <img */}
                  {/* src="/ajay2.png" // Replace with your actual image path
                  alt="Your Photo"
                  className="w-full h-full object-cover rounded-full" */}
                {/* /> */}
              {/* </div> */}
            {/* </div> */}
          </div>

          {/* About Text */}
          <div className="md:col-span-8 space-y-4">
            <p className="animate-item text-portfolio-textPrimary">
              Hello! I'm Ajay, a dedicated professional with a background in Electrical Engineering, currently developing skills in Java and MERN technologies.
            </p>
            <p className="animate-item text-portfolio-textPrimary">
              My journey into software development started during my engineering studies, where I discovered my passion for creating digital solutions. I'm particularly interested in web development and have been focusing on building my skills in both frontend and backend technologies.
            </p>
            {/* <p className="animate-item text-portfolio-textPrimary">
              I'm currently seeking an entry-level role to apply my technical skills and contribute to innovative solutions in the software development industry.
            </p> */}
            <p className="animate-item text-portfolio-textPrimary">
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
        </div>
      </div>
    </section>
  );
};

export default About;


import { useEffect } from "react";

const educations = [
  {
    degree: "B.E., Electrical Engineering",
    period: "2022 – Present",
    institution: "Vignan Institute of Information and Technology, Visakhapatnam",
    gpa: "GPA-8.2"
  },
  {
    degree: "Intermediate (MPC)",
    period: "2020 – 2022",
    institution: "Sri Chaitanya Junior College, Visakhapatnam",
    gpa: "GPA-8.3"
  }
];

const certifications = [
  {
    title: "Python Essentials by CISCO",
    period: "Jan 2024 – Feb 2024"
  },
  {
    title: "Node.js and Express Fundamentals",
    period: "Nov 2024 – Dec 2024"
  },
  {
    title: "Introduction to Web Development with HTML5, CSS3, and JavaScript",
    period: "Feb 2024 - Mar 2024"
  }
];

const Education = () => {
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

    const elements = document.querySelectorAll("#education .animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="education" className="px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">05.</span> Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-item">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-green">Academic Education</h3>
            <div className="space-y-8">
              {educations.map((edu, index) => (
                <div key={index} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-portfolio-green">
                  <div className="absolute w-3 h-3 bg-portfolio-green rounded-full -left-[6px] top-1"></div>
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <p className="text-portfolio-green text-sm mb-1">{edu.period}</p>
                  <p className="text-portfolio-slate">{edu.institution}</p>
                  <p className="font-semibold">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-item">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-green">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-portfolio-green">
                  <div className="absolute w-3 h-3 bg-portfolio-green rounded-full -left-[6px] top-1"></div>
                  <h4 className="text-lg font-medium">{cert.title}</h4>
                  <p className="text-portfolio-green text-sm">{cert.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

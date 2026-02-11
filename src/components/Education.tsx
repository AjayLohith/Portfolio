
import { useEffect } from "react";

const educations = [
  {
    degree: "B.Tech - Electrical Engineering",
    period: "2022 – 2026",
    institution: "Vignan Institute of Information and Technology, Visakhapatnam",
    gpa: "GPA-8.0"
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
    title: "SQL and Relational Databases 101",
    period: "Dec 2025 – Jan 2026"
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
    <section id="education" className="section bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="mr-2">05.</span> EDUCATION
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Academic Education Card */}
          <div className="animate-item border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <h3 className="text-xl font-black uppercase mb-6 border-b-4 border-black pb-2">ACADEMIC</h3>
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-4 border-black">
                  <div className="absolute w-4 h-4 bg-black -left-[10px] top-0"></div>
                  <h4 className="text-lg font-black uppercase">{edu.degree}</h4>
                  <p className="text-black font-bold text-sm mb-1">{edu.period}</p>
                  <p className="text-gray-600 font-semibold">{edu.institution}</p>
                  <span className="inline-block mt-2 px-3 py-1 border-2 border-black font-black text-sm">{edu.gpa}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Card */}
          <div className="animate-item border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <h3 className="text-xl font-black uppercase mb-6 border-b-4 border-black pb-2">CERTIFICATIONS</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-6 border-l-4 border-black">
                  <div className="absolute w-4 h-4 bg-black -left-[10px] top-0"></div>
                  <h4 className="text-base font-black">{cert.title}</h4>
                  <p className="text-gray-600 font-bold text-sm">{cert.period}</p>
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

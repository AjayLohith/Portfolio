
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-0 px-6">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <p 
            className={`text-portfolio-green font-mono text-lg transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-100`}
          >
            Hi, my name is
          </p>
          <h1 
            className={`text-portfolio-lightestSlate transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-200`}
          >
            Ajay Lohith Kulla.
          </h1>
          <h2 
            className={`text-portfolio-slate text-3xl md:text-5xl lg:text-6xl transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-300`}
          >
            I build things for the web.
          </h2>
          <p 
            className={`max-w-xl text-portfolio-slate text-lg md:text-xl transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-400`}
          >
            I'm a software developer specializing in Java and MERN technologies. With a background in Electrical Engineering, I'm passionate about creating innovative solutions and expanding my skills in web development.
          </p>
          <div 
            className={`pt-8 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-500`}
          >
            <a 
              href="#projects" 
              className="button text-lg px-7 py-4"
            >
              Check out my projects
            </a>
          </div>
        </div>
        
        {/* Profile image */}
        <div 
          className={`relative order-first lg:order-last mx-auto max-w-md transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-300 delay-600`}
        >
          <div className="bg-portfolio-green/10 border-2 border-portfolio-green rounded-md w-64 h-64 md:w-80 md:h-80 relative mx-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Developer" 
              className="object-cover w-full h-full rounded-md transition-all duration-300"
            />
            <div className="absolute inset-0 border-2 border-portfolio-green rounded-md transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

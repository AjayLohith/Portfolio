import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-0 px-6 bg-white">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Hero Text */}
        <div className="space-y-5">
          <p
            className={`text-black font-black text-lg uppercase transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-100`}
          >
            Hi, my name is
          </p>
          <h1
            className={`text-black font-black text-5xl md:text-6xl lg:text-7xl uppercase transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-200`}
          >
            Ajay Lohith Kulla.
          </h1>
          <h2
            className={`text-gray-700 font-black text-2xl md:text-3xl lg:text-4xl transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-300`}
          >
            I build things for the web.
          </h2>
          {/* <p
            className={`max-w-xl text-black font-semibold text-lg md:text-xl transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-400`}
          >
            {/* I'm a software developer specializing in Java and MERN technologies. */}
          {/* </p>  */}
          <div
            className={`pt-8 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-500`}
          >
            <a href="#projects" className="inline-block px-8 py-4 border-4 border-black bg-white text-black font-black uppercase text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
              Check out my projects
            </a>
          </div>
        </div>

        {/* Right Side: Pixel Art Setup */}
        <div 
          className={`relative ml-auto mr-1 transform translate-x-9 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } transition-all duration-500 delay-300`}
        >
          {/* Neobrutalist frame - stretched horizontally */}
          <div 
            className="relative border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
            style={{ transform: "scaleX(1.25)" }}
          >
            <img
              src="/desk-setup.gif"
              alt="Pixel Art Developer Setup"
              className="w-full max-w-[450px] h-auto"
              style={{ 
                imageRendering: "pixelated",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

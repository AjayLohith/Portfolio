
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 px-6 py-4 transition-all duration-300",
        isScrolled ? "bg-portfolio-navy/90 backdrop-blur shadow-md" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-2xl text-portfolio-green">
          AL
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {menuItems.map((item, i) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="nav-link"
                >
                  <span className="text-portfolio-green mr-1">{i + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button ml-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-[72px] right-0 bottom-0 w-3/4 bg-portfolio-lightNavy transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col space-y-6 text-center">
              {menuItems.map((item, i) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-lg block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-portfolio-green block text-sm mb-1">{i + 1}.</span> 
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [typedName, setTypedName] = useState("");

  const fullName = "Ajay";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeName = async () => {
      for (let i = 0; i < fullName.length; i++) {
        setTypedName((prev) => prev + fullName[i]);
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay 0.5s per character
      }
    };

    // Start typing effect after 0.5s
    setTypedName(""); // Clear the name initially
    timeoutRef.current = setTimeout(() => typeName(), 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 137 && rect.bottom >= 137) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
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

  const handleMenuClick = (href: string) => {
    setIsSidebarOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 60;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 px-6 py-4 transition-all duration-300",
        isScrolled
          ? "bg-portfolio-background/95 backdrop-blur shadow-md"
          : "bg-portfolio-background/50 backdrop-blur-sm"
      )}
    >
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-underscore {
          animation: blink 1s step-end infinite;
          color: white;
        }
      `}</style>

      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-portfolio-textPrimary font-heading font-bold text-2xl flex items-center"
        >
          <span>{typedName}</span>
          <span className="blinking-underscore">_</span>
        </a>
        <style>{`
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
              .blinking-underscore {
                animation: blink 1s step-end infinite;
                color: #10b981;
              }
            `}</style>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-lg text-portfolio-textSecondary hover:text-portfolio-green transition-all duration-300",
                    activeSection === item.href.slice(1)
                      ? "underline underline-offset-4 text-portfolio-green"
                      : ""
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Java_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button ml-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-portfolio-textPrimary inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-portfolio-gray focus:outline-none focus:ring-2 focus:ring-portfolio-gray"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-0 right-0 z-40 w-64 h-screen transition-transform bg-portfolio-card border-l border-portfolio-gray",
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          )}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 text-portfolio-textSecondary hover:text-portfolio-textPrimary"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <ul className="space-y-2 font-medium">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center p-2 text-portfolio-textPrimary rounded-lg hover:bg-portfolio-gray group"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/ajayResume (1).pdf" // Update with your actual resume path
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button mt-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </nav>
    </header>
  );
};

export default Header;

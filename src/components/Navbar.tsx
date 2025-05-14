
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 10);
      
      // Find the current active section
      const sections = navLinks.map((link) => document.querySelector(link.href));
      
      const current = sections.findIndex((section) => {
        if (!section) return false;
        
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      
      if (current !== -1) {
        setActiveSection(navLinks[current].href.substring(1));
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-bold">
          Portfolio<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative px-2 py-1 transition-colors hover:text-primary focus-ring",
                    activeSection === link.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 focus-ring"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span 
              className={cn(
                "w-6 h-0.5 bg-foreground transition-transform", 
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )} 
            />
            <span 
              className={cn(
                "w-6 h-0.5 bg-foreground transition-opacity", 
                isMobileMenuOpen && "opacity-0"
              )} 
            />
            <span 
              className={cn(
                "w-6 h-0.5 bg-foreground transition-transform", 
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )} 
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <nav
        className={cn(
          "fixed inset-x-0 bg-background/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "top-[60px] opacity-100" 
            : "-top-full opacity-0"
        )}
      >
        <ul className="container flex flex-col py-6 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "block py-3 px-2 transition-colors hover:text-primary",
                  activeSection === link.href.substring(1)
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

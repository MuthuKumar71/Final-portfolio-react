import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-semibold">Muthukumar</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors duration-500 ease-out hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors duration-500 ease-out hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-foreground hover:text-primary transition-colors duration-500 ease-out hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-primary transition-colors duration-5000 ease-out hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors duration-5000 ease-out hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/15 rounded"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-left text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-left text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/10 rounded"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-fit">
              Get In Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
import { Button } from "./ui/button";
import { ArrowDown, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const resumeUrl = new URL("../files/resume.pdf", import.meta.url).href;
export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Muthukumar
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground">
                  UI/UX Designer
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Fresh graduate passionate about creating intuitive and beautiful digital experiences. 
                I combine creative thinking with user-centered design principles to solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto"
                >
                  View My Work
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href={resumeUrl} download aria-label="Download resume">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748801583998-c693323e6305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NTg0NDE5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="UI/UX Design Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
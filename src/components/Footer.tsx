import { Heart, Mail, Linkedin, Github, Dribbble } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:muthumkumar01@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/muthu-kumar-430930280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bp6Uy5nGpTKG3CWKP2jpi8w%3D%3D",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/sarah-chen-design",
      label: "GitHub"
    },
    {
      icon: <Dribbble className="h-4 w-4" />,
      href: "https://dribbble.com/sarah-chen-design",
      label: "Dribbble"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sarah Chen</h3>
            <p className="text-sm text-muted-foreground">
              UI/UX Designer passionate about creating meaningful digital experiences 
              that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={scrollToTop}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg hover:bg-accent transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Open to freelance opportunities and full-time positions
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Muthukumar. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
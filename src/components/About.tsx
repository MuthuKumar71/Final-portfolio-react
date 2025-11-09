import { Card, CardContent } from "./ui/card";
import { User, GraduationCap, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better - my background, education, and what drives my passion for design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
                I recently graduated with a degree in Design and have been passionate about UI/UX design 
                since discovering how thoughtful design can transform user experiences. During my studies, 
                I worked on various projects that helped me understand the importance of user research, 
                wireframing, and iterative design processes.
              </p>
              <p className="text-muted-foreground">
                While I'm new to the professional world, I've dedicated countless hours to learning 
                industry-standard tools and staying updated with the latest design trends and best practices. 
                I believe in designing with empathy and always putting the user at the center of every decision.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">User-Centered</h4>
                  <p className="text-sm text-muted-foreground">Always designing with users in mind</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Passionate</h4>
                  <p className="text-sm text-muted-foreground">Love for creating beautiful experiences</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Master of Computer Application
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Nehru Institute of Information Technology and Management • 2024-2026
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Specialized in Digital Design with focus on UI/UX, User Research, and Design Systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="text-sm">Coimbatore,TamilNadu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-sm">Fresh Graduate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <span className="text-sm">Open to opportunities</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Languages</span>
                    <span className="text-sm">English,Tamil</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
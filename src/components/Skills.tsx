import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Palette, Monitor, Search, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Sketch", level: 75 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Adobe Photoshop", level: 70 }
      ]
    },
    {
      title: "Prototyping",
      icon: <Monitor className="h-5 w-5" />,
      skills: [
        { name: "Interactive Prototypes", level: 85 },
        { name: "Wireframing", level: 90 },
        { name: "User Flows", level: 88 },
        { name: "Information Architecture", level: 82 }
      ]
    },
    {
      title: "Research & Testing",
      icon: <Search className="h-5 w-5" />,
      skills: [
        { name: "User Research", level: 80 },
        { name: "Usability Testing", level: 75 },
        { name: "User Interviews", level: 85 },
        { name: "A/B Testing", level: 70 }
      ]
    },
    {
      title: "Development",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript Basics", level: 65 },
        { name: "React Basics", level: 60 },
        { name: "Design Systems", level: 80 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving", "Creative Thinking", "Attention to Detail", 
    "Communication", "Collaboration", "Adaptability", "Time Management", 
    "Critical Thinking", "Empathy", "Continuous Learning"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and design capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
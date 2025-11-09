import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const soundoraCaseStudy = new URL("../files/Soundora Case Study.pdf", import.meta.url).href;

export function Projects() {
  const projects = [
    {
      title: "Soundora",
      description: "Soundora is a modern, minimalistic music experience app designed to blend emotion, rhythm, and simplicity.",
      image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU4NDE2MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile Design", "User Research", "Prototyping", "Figma"],
      type: "Student Project",
      duration: "1 month"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my design work, including academic projects and case studies that demonstrate my design process and problem-solving abilities
          </p>
        </div>

        <div className={
          projects.length === 1
            ? "grid gap-8 grid-cols-1 justify-items-center"
            : "grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
        }>
          {projects.map((project, index) => (
            <Card
              key={index}
              className={
                `group hover:shadow-lg transition-all duration-300 overflow-hidden ${projects.length === 1 ? 'w-full max-w-2xl mx-auto' : ''}`
              }
            >
              <div className="relative overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{project.type}</Badge>
          </div>
              </div>

              <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <span className="text-xs text-muted-foreground">{project.duration}</span>
          </div>
          <CardDescription className="text-sm">
            {project.description}
          </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button asChild size="sm" className="flex-1">
              <a href={soundoraCaseStudy} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Case Study
              </a>
            </Button>
            <Button size="sm" variant="outline">
              <Github className="h-4 w-4" />
            </Button>
          </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button size="lg" variant="outline">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
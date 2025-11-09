import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Linkedin, Github, Dribbble } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "muthumkumar01@email.com",
      href: "mailto:smuthumkumar01@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9943702802",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Coimbatore,TamilNadu",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muthu-kumar-430930280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bp6Uy5nGpTKG3CWKP2jpi8w%3D%3D"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/sarah-chen-design"
    },
    {
      icon: <Dribbble className="h-5 w-5" />,
      label: "Dribbble",
      href: "https://dribbble.com/sarah-chen-design"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just chat about design. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Other ways to reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h4 className="font-semibold">Ready to start a project?</h4>
                  <p className="text-sm text-muted-foreground">
                    I'm available for freelance work and full-time opportunities
                  </p>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Let's Work Together
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:kevin.michael0911@gmail.com",
      value: "kevin.michael0911@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/kevin-michael0911/",
      value: "linkedin.com/in/kevinmichael",
    },
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/Kev-911",
      value: "github.com/kevinmichael",
    },
    // {
    //   name: "Resume",
    //   icon: <FileText className="w-4 h-4" />,
    //   href: "#",
    //   value: "Download Resume",
    // },
  ];

  return (
    <section id="contact" className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl md:text-left text-center mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-muted-foreground mb-8">
            Interested in working together or have a project in mind? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap gap-y-4 gap-x-8 md:justify-start justify-center">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group transition-colors hover:text-primary"
                aria-label={`Contact me via ${link.name}`}
              >
                <div className="flex items-center justify-center">
                  {link.icon}
                </div>
                <span className="ml-2 text-sm group-hover:underline transition-all">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

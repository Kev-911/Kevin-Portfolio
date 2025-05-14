
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Kev-911",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/kevin-michael0911/",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:kevin.michael0911@gmail.com",
    },
  ];
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kevin Michael. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors focus-ring"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              <span>📍 Vilnius, Lithuania</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

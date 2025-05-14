
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary font-semibold mb-4">Hello, I'm</p>
            <h1 className="font-extrabold leading-tight mb-4">
              Kevin Michael
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Student | Aspiring Data Analyst | Sports Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              I'm a uni student who’s into sports and tech-balancing classes, kickabouts, and building smart solutions that actually help people.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:opacity-90 focus-ring"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors hover:bg-secondary/80 focus-ring"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center max-w-md lg:max-w-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-4xl font-bold">
                 <img src="/media/Final2.JPG" alt="Profile"  className="w-full h-full object-cover object-top translate-y-[px] translate-x-[px]"
/>
                </div>
              </div>
              <div className={cn(
                "absolute -top-6 -right-6 w-24 h-24 rounded-lg bg-background",
                "flex items-center justify-center shadow-lg transform rotate-12",
                "border border-border"
              )}>
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

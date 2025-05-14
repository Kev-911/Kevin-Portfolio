
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";


interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

function ProjectCard({
  title,
  description,
  tech,
  imageUrl,
  liveUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <div 
      className="group bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-video bg-muted overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/30 flex items-center justify-center text-4xl font-bold text-muted-foreground/50">
            {title.substring(0, 2)}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span 
              key={i}
              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View ${title} code on GitHub`}
            >
              <Github size={16} />
              <span>Github Link</span>
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors ml-4"
              aria-label={`View ${title} live demo`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Hotel Data Analysis: Optimizing Revenue Strategies",
      description: "Analyzed hotel booking data to uncover patterns, cancellation trends, pricing strategies, and guest behavior to help improve revenue and operations.",
      tech: ["Python", "Jupyter Notebook", "Data Analysis", "Data cleaning", "Data Visualization" , "SQL",],
      githubUrl: "https://github.com/Kev-911/Data-Analysis---Project-Jupyter_notebook",
      imageUrl: "/media/data1.jpg"
      // liveUrl: "https://example.com",
    },
    {
      title: "Spotify Dashboard",
      description: "Visualized Spotify data to track song trends, artist stats, and music attributes using Power BI.",
      tech: ["Power BI", "Spotify", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/Kev-911/Power-BI---Projects-Spotify",
       imageUrl: "/media/Spotify1.jpg"
    },
    {
      title: "Vintage Clothing Store (E-commerce)",
      description: "An e-commerce site where users can browse items, manage carts, and checkout securely using Stripe.",
      tech: ["NextJS", "Tailwind CSS", "MongoDB", "Clerk", "Stripe", "Cloudinary", "HTML"],
      githubUrl: "https://github.com/Kev-911/Vintage-Clothing",
      imageUrl: "/media/th.png"
      // liveUrl: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A professional portfolio website with dark/light mode, smooth animations, and responsive design.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      githubUrl: "https://github.com",
       imageUrl: "/media/portfolio.jpg"
      // liveUrl: "https://example.com",
    },
    // {
    //   title: "Recipe Finder",
    //   description: "A web application that helps users find recipes based on available ingredients in their pantry.",
    //   tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    //   githubUrl: "https://github.com",
    // },
    // {
    //   title: "Fitness Tracker",
    //   description: "A mobile-friendly fitness tracking app that logs workouts and visualizes progress over time.",
    //   tech: ["React Native", "Redux", "Firebase", "Victory Charts"],
    //   githubUrl: "https://github.com",
    // },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              // liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
              delay={Math.min(i * 0.1, 0.5) + 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

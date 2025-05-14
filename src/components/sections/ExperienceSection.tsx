
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isActive?: boolean;
  delay?: number;
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  isActive = false,
  delay = 0,
}: ExperienceItemProps) {
  return (
    <div 
      className="relative pl-8 pb-8 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div 
        className={cn(
          "absolute left-0 top-2 w-4 h-4 rounded-full -translate-x-1/2 border-2",
          isActive 
            ? "bg-primary border-primary" 
            : "bg-background border-muted-foreground"
        )} 
      />
      
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        
        <p className="text-primary font-medium">{company}</p>
        
        <ul className="space-y-2 mt-4">
          {description.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Project Management Office (PMO)",
      company: "Accenture Baltics",
      period: "Feb 2025 - May 2025",
      description: [
        "Provided support with internal PMO activities and resource management.",
        "Managed expense reporting and analyzed billable expenses",
        "Handled timesheet reconciliation and tracked team resources",
        "Maintained internal Wiki pages and shared guides for internal processes",
        "Monitored social budget and assisted with budgeting tasks",
      ],
      isActive: true,
    },
    {
      title: "Data Analyst Intern",
      company: "Maritronics - Centena Group Company",
      period: "July 2024",
      description: [
        "Specializing in analyzing, scraping, filtering, and visualizing maritime data from ship heading and rate of turn (ROT) logs.",
        "Expertise in leveraging data to optimize maritime electronics (Maritronics) systems. ",
        "Additionally, skilled in managing office inventory through comprehensive data analysis.",
      ],
    },
    // {
    //   title: "Junior Web Developer",
    //   company: "Digital Creations",
    //   period: "2018 - 2019",
    //   description: [
    //     "Created interactive websites using HTML, CSS, and JavaScript.",
    //     "Implemented responsive designs that work across multiple devices.",
    //     "Assisted in transitioning legacy applications to modern frameworks.",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <div className="mt-12">
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={i}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isActive={exp.isActive}
              delay={i * 0.1 + 0.2}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/media/Kevin-Resume.pdf"
            className="inline-flex items-center gap-2 text-primary hover:underline"
            aria-label="Download Resume"
          >
            <span className="font-medium">Download Full Resume</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

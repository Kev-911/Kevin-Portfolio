
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface SkillProps {
  name: string;
  icon?: string;
  level?: number;
  proficiency: "Advanced" | "Intermediate" | "Basic";
}

interface SkillCategoryProps {
  title: string;
  skills: SkillProps[];
  delay?: number;
}

function ProficiencyBadge({ proficiency }: { proficiency: string }) {
  const colorMap = {
    Advanced: "bg-primary hover:bg-primary/80",
    Intermediate: "bg-secondary/80 text-secondary-foreground hover:bg-secondary/60",
    Basic: "bg-muted hover:bg-muted/80 text-muted-foreground",
  };

  return (
    <Badge className={cn("mt-2", colorMap[proficiency as keyof typeof colorMap])}>
      {proficiency}
    </Badge>
  );
}

function SkillCategory({ title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <div 
            key={i} 
            className="bg-background rounded-lg p-5 flex flex-col border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                {skill.icon && (
                  <span className="text-xl">{skill.icon}</span>
                )}
                <span className="font-medium">{skill.name}</span>
              </div>
              <ProficiencyBadge proficiency={skill.proficiency} />
            </div>
            {skill.level !== undefined && (
              <div className="mt-2 w-full">
                <Progress value={skill.level} className="h-2 w-full" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Beginner</span>
                  <span className="text-xs text-muted-foreground">Expert</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "Python",  level: 70, proficiency: "Intermediate" },
        { name: "HTML & CSS",  level: 80, proficiency: "Intermediate" },
        { name: "Attlasian Jira & Confluence",  level: 65, proficiency: "Basic" },
        { name: "SQL", level: 75, proficiency: "Intermediate" }, 
        { name: "OOP",  level: 70, proficiency: "Intermediate" },
        { name: "Microsoft Office Suite",  level: 85, proficiency: "Intermediate" },
        { name: "Power BI", level: 80, proficiency: "Intermediate" },
        { name: "Data Analysis and Visualization",  level: 70, proficiency: "Intermediate" },
        { name: "JavaScript",  level: 40, proficiency: "Basic" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub",  level: 70, proficiency: "Intermediate" },
        { name: "Visual Studio Code",  level: 75, proficiency: "Intermediate" },
        { name: "Power BI",  level: 70, proficiency: "Intermediate" },
        { name: "Jupyter Notebook",  level: 70, proficiency: "Basic" },
        { name: "IDE (Pycharm)",  level: 60, proficiency: "Basic" },
        { name: "Excel/Dashboards",  level: 70, proficiency: "Intermediate" },
        { name: "MongoDB",  level: 65, proficiency: "Basic" },
        { name: "Slack & Teams", level: 85, proficiency: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 dark:bg-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {skillCategories.map((category, i) => (
            <SkillCategory
              key={i}
              title={category.title}
              skills={category.skills}
              delay={i * 0.1 + 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

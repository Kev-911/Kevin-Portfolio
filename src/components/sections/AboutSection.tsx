
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg mb-6">
            Enthusiastic IT Bachelor student with a strong interest in data analysis, tech, and building smart, practical solutions. 
            I’ve worked on real projects during my internship-like cleaning and visualizing data, automating tasks, and creating tools that make life easier for teams.
            </p>
            <p className="text-lg mb-6">
            I enjoy learning by doing, and I’m excited to keep growing as a future data analyst. Outside of tech, I’m into sports and like keeping things balanced.
            </p>
            <p className="text-lg">
            Currently pursuing a Bachelor's degree in Information Technology at Vilnius Tech, Vilnius.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <ul className="space-y-2">
                  <li>
                    <p className="font-medium">B.S. Information Technologies</p>
                    <p className="text-muted-foreground">Vilnius Tech University, final year</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Interests</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Fitness & Well-being</li>
                  <li>Coding & Problem-Solving</li>
                  <li>Football </li>
                  <li>Music - Guitar</li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm md:col-span-2">
                <h3 className="text-xl font-bold mb-2">Languages</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">English</p>
                    <p className="text-muted-foreground text-sm">Professional</p>
                  </div>
                  <div>
                    <p className="font-medium">Tamil</p>
                    <p className="text-muted-foreground text-sm">Native</p>
                  </div>
                  <div>
                    <p className="font-medium">French</p>
                    <p className="text-muted-foreground text-sm">Elementary</p>
                  </div>
                  {/* <div>
                    <p className="font-medium">Growth</p>
                    <p className="text-muted-foreground text-sm">Always learning</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

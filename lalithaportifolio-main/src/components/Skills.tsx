import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: ['Java', 'C++', 'C', 'Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['SQL', 'Database Design', 'CRUD Operations'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal className="w-8 h-8" />,
      skills: ['VS Code', 'Git', 'GitHub', 'Figma', 'Canva'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="glow-text">Skills</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elevated group hover:scale-105 transition-all duration-500">
              <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <div className="card-elevated max-w-2xl mx-auto">
            <div className="p-2 bg-primary/20 rounded-xl w-fit mx-auto mb-4">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-foreground-muted">
              Always exploring new technologies and frameworks to stay current with industry trends. 
              Currently focusing on advanced React patterns, cloud technologies, and AI/ML integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { ExternalLink, Github, Brain, Calendar, Users, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Invoice Analyzer',
      description: 'AI-powered tool for invoice extraction, translation, fraud detection, and analytics with OCR + ML model trained on 500+ invoices.',
      features: [
        'OCR + ML model trained on 500+ invoices',
        'Real-time fraud detection algorithms',
        'Multi-language translation support',
        'Streamlit dashboard with 5+ visualizations',
        'Reduced reporting time by 40%'
      ],
      technologies: ['Python', 'Machine Learning', 'OCR', 'Streamlit', 'Data Analytics'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'AI/ML Project',
      githubLink: 'https://github.com/lalithadwarapureddi/smart_invoice_Analyzer'
    },
    {
      title: 'Vaccine Hint',
      description: 'Vaccination reminder system for parents built during internship. Features interactive UI and holiday scheduling module.',
      features: [
        'Interactive React.js user interface',
        'Automated vaccination reminders',
        'Holiday scheduling module',
        '25% faster deployment with Git collaboration',
        'Parent-friendly notification system'
      ],
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Git'],
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Internship Project',
      githubLink: 'https://github.com/lalithadwarapureddi/Vaccine-Hint'
    },
    {
  title: 'Campus Recruitment Management System',
  description: 'Web-based recruitment management system to streamline campus placements with real-time job application tracking.',
  features: [
    'Managed 100+ student and company records with complete CRUD operations',
    'Automated application workflow with status updates (Applied, Selected, Rejected)',
    'OOP-based modular design using JSP/Servlets, JDBC, and SQL',
    'Normalized relational database schema with foreign key constraints',
    'Cascading deletes ensuring data integrity across students, companies, and applications'
  ],
  technologies: ['Java', 'JSP/Servlets', 'JDBC', 'SQL', 'OOP', 'Database Design'],
  icon: <Users className="w-8 h-8" />,
  color: 'from-blue-500 to-cyan-500',
  category: 'Academic Project',
  githubLink: 'https://github.com/lalithadwarapureddi/CampusRecruitmentWeb'
}

  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="card-project group">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Project Icon & Category */}
                <div className="text-center lg:text-left">
                  <div className={`p-6 bg-gradient-to-r ${project.color} rounded-2xl w-fit mx-auto lg:mx-0 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground-muted text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero-outline flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '3+', label: 'Projects Completed', icon: <Database className="w-6 h-6" /> },
            { number: '500+', label: 'Training Data Points', icon: <Brain className="w-6 h-6" /> },
            { number: '40%', label: 'Performance Improvement', icon: <Calendar className="w-6 h-6" /> },
            { number: '100+', label: 'Records Managed', icon: <Users className="w-6 h-6" /> },
          ].map((stat, index) => (
            <div key={index} className="text-center card-elevated">
              <div className="p-3 bg-primary/20 rounded-xl w-fit mx-auto mb-3">
                <div className="text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold glow-text mb-2">{stat.number}</div>
              <div className="text-foreground-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elevated max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-foreground-muted mb-6">
              These projects represent my journey in software development and problem-solving. 
              I'm always excited to take on new challenges and create innovative solutions.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

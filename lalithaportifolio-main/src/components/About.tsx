import { GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Get to know more about my journey, education, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 slide-up">
            <div className="card-elevated">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Passion</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    I am a motivated professional with strong technical skills and a keen interest in solving 
                    real-world problems through technology. Passionate about AI and innovation, I enjoy applying 
                    my knowledge to create impactful solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Goals</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    My career goal is to grow continuously while contributing to challenging projects that 
                    drive efficiency and add value to organizations. I aim to become a skilled full stack 
                    developer who can bridge the gap between innovative ideas and practical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="scale-in">
            <div className="card-elevated">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-foreground-muted">My academic journey in Computer Science</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
                    <span className="text-primary font-semibold">2021 - 2025</span>
                  </div>e
                  <p className="text-primary font-medium mb-2">University College of Engineering Narasaraopet, JNTUK</p>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground-muted">CGPA:</span>
                    <span className="text-primary font-semibold text-lg">7.8/10</span>
                  </div>
                  <p className="text-foreground-muted mt-2">
                   Completed B.Tech in Computer Science and Engineering, gaining strong foundations in programming, software development, and problem-solving through academic learning and real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '3+', label: 'Projects Completed' },
            { number: '7.8', label: 'CGPA' },
            { number: '2025', label: 'Graduation Year' },
            { number: '10+', label: 'Technologies' },
          ].map((stat, index) => (
            <div key={index} className="text-center card-elevated">
              <div className="text-3xl lg:text-4xl font-bold glow-text mb-2">
                {stat.number}
              </div>
              <div className="text-foreground-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
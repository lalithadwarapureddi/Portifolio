import { ArrowRight, Download, Github, Linkedin, Code } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center fade-in">
            <div className="mb-6">
              <p className="text-primary text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="glow-text">Lalitha Dwarapureddi</span>
               
              </h1>
              <p className="text-xl lg:text-2xl text-foreground-muted mb-6 max-w-2xl">
                Aspiring Java Full Stack Developer | Passionate about AI & Innovation
              </p>
              <p className="text-lg text-foreground-muted max-w-2xl">
                Motivated professional with strong technical skills and a keen interest in solving 
                real-world problems through technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mb-8">
              <button onClick={scrollToContact} className="btn-hero group">
                Hire Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToContact} className="btn-hero-outline">
                Let's Talk
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-center">
              <a href="https://linkedin.com/in/lalitha-dwarapureddi-bb0676232" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/lalithadwarapureddi" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/6304726776" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-glow">
                <Code className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
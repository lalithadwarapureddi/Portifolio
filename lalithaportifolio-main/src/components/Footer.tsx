import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold glow-text mb-2">
              Lalitha Dwarapureddi
            </div>
            <p className="text-foreground-muted flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & TypeScript
            </p>
            <p className="text-foreground-muted text-sm mt-1">
              © 2024 Lalitha Dwarapureddi. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-8">
            <nav className="flex gap-6">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground-muted hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary-glow transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-muted">
            Aspiring Java Full Stack Developer passionate about creating innovative solutions through technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
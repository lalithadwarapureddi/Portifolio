import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'lalithadwarapureddi8@gmail.com',
      href: 'mailto:lalithadwarapureddi8@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 6304726776',
      href: 'tel:+916304726776'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/lalitha-dwarapureddi-bb0676232',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/lalithadwarapureddi',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: <Code className="w-6 h-6" />,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/6304726776',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="glow-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and make something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button type="submit" className="btn-hero w-full group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-elevated">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground-muted">{info.label}</div>
                      <div className="text-foreground font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-elevated">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`p-3 bg-gradient-to-r ${social.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{social.label}</div>
                      <div className="text-foreground-muted">Connect on {social.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-elevated">
              <h3 className="text-2xl font-bold mb-4">Availability</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-foreground-muted">
                I'm currently open to internship and full-time opportunities in software development. 
                Feel free to reach out for collaborations, projects, or just to connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
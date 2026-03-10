import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary py-12 md:py-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
          Vanajotshna Srigakolapu
        </h1>
        <p className="text-primary-foreground/70 text-lg font-body mb-6">
          Computer Science & Engineering Student
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
          <a href="tel:+918499092868" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> +91 8499092868
          </a>
          <a href="mailto:vanajotshna081203@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" /> vanajotshna081203@gmail.com
          </a>
          <a href="https://github.com/Jotshna0821" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://linkedin.com/in/vanajotshna-7606842b0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

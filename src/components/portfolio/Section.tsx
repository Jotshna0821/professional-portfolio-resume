import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const Section = ({ title, children, delay = 0 }: SectionProps) => {
  return (
    <section
      className="py-8 border-b border-border last:border-b-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="text-2xl font-heading font-semibold text-primary mb-5 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;

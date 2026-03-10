import Header from "@/components/portfolio/Header";
import Section from "@/components/portfolio/Section";
import TimelineItem from "@/components/portfolio/TimelineItem";
import SkillBadge from "@/components/portfolio/SkillBadge";
import { Award, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container max-w-4xl pb-16">
        {/* Profile */}
        <Section title="Profile" delay={100}>
          <ul className="space-y-2 text-foreground/85 text-[15px] leading-relaxed">
            <li>Adaptable and detail-oriented developer with experience in programming and software development.</li>
            <li>Passionate about learning new technologies and building efficient digital solutions.</li>
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education" delay={200}>
          <TimelineItem
            title="B.Tech in Computer Science and Engineering"
            subtitle="Avanthi Institute of Engineering and Technology"
            location="Andhra Pradesh"
            period="2022 – 2026"
            details={["CGPA: 6.97"]}
          />
          <TimelineItem
            title="Intermediate – MPC"
            subtitle="Sri Prakash Junior College"
            location="Andhra Pradesh"
            period="2020 – 2022"
            details={["Percentage: 60.5%"]}
          />
          <TimelineItem
            title="SSC"
            subtitle="Viswa Santhi High School"
            location="Andhra Pradesh"
            period="2019 – 2020"
            details={["CGPA: 9.8"]}
          />
        </Section>

        {/* Training & Experience */}
        <Section title="Training & Experience" delay={300}>
          <TimelineItem
            title="AWS Cloud Intern"
            subtitle="Cloud Internship Program"
            location="Remote"
            period="Jul 2024 – Sep 2024"
            details={[
              "Worked with AWS services including EC2, S3, RDS, IAM and Lambda.",
              "Learned cloud deployment and cloud resource management.",
            ]}
          />
          <TimelineItem
            title="AI & ML Training"
            subtitle="ExcelR"
            period="May 2024 – Jul 2024"
            details={[
              "Studied Machine Learning, Deep Learning and NLP concepts.",
              "Worked on real-world AI based applications.",
            ]}
          />
          <TimelineItem
            title="Python Programming Training"
            subtitle="VaultofCodes"
            period="Feb 2024 – May 2024"
            details={[
              "Learned Python programming including OOP concepts and data structures.",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects" delay={400}>
          <TimelineItem
            title="AI Driven GPS Spoofing Detection System"
            subtitle="Python, Machine Learning"
            period=""
            details={[
              "Developed a system to detect GPS spoofing attacks using machine learning algorithms.",
              "Processed GPS signal data to identify anomalies in satellite signals.",
              "Improved navigation security by detecting fake GPS signals.",
            ]}
          />
          <TimelineItem
            title="AI Resume Builder"
            subtitle="Python, NLP"
            period=""
            details={[
              "Built an AI based resume builder that generates professional resumes automatically.",
              "Provided smart suggestions to improve resume content and formatting.",
            ]}
          />
          <TimelineItem
            title="Code Battle – Competitive Coding Platform"
            subtitle="Web Development"
            period=""
            details={[
              "Created a coding platform where users can solve problems and compete with others.",
              "Implemented problem system, code submission and leaderboard.",
            ]}
          />
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills" delay={500}>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C++", "Java", "MySQL"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Web</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Visual Studio", "Dev C++", "GitHub"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-body font-semibold text-muted-foreground uppercase tracking-wider mb-2">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Operating Systems", "Artificial Intelligence"].map(s => <SkillBadge key={s} label={s} />)}
              </div>
            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications" delay={600}>
          <ul className="space-y-2">
            {[
              "Microsoft – Data with Power BI",
              "HP Life – Data Science and Analytics",
              "Infosys Springboard – MEAN Stack Technologies",
            ].map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/85">
                <BookOpen className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* Achievements */}
        <Section title="Achievements" delay={700}>
          <ul className="space-y-2">
            {[
              "Participated in ISRO Bharatiya Antariksh Hackathon.",
              "Completed Deloitte Australia Data Analytics Job Simulation on Forage.",
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/85">
                <Award className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-6">
        <div className="container max-w-4xl text-center text-primary-foreground/60 text-sm font-body">
          © 2026 Vanajotshna Srigakolapu. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;

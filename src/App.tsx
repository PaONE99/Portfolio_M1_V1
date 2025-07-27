import React from 'react';
import { Github, Linkedin, Mail, Server, Database, Code2, Globe, Cpu } from 'lucide-react';
import image from './assets/blur -Bg.png';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <img 
        src={image}
        alt="Profile"
        className="w-40 h-40 rounded-full mb-8 object-cover object-top border-4 border-blue-500"
      />
        <h1 className="text-4xl font-bold mb-4">Pavan Kumar Tungala</h1>
        <h2 className="text-xl text-blue-400 mb-6">Full Stack Java Developer</h2>
        <p className="max-w-2xl text-gray-300 mb-8">
        Full Stack Developer with 1+ year of experience in building scalable enterprise applications using Java, Spring Boot, and modern web technologies. Passionate about clean code, performance, and continuous learning.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/PaONE99" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/pavan-kumar-tungala-996974166/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:pavan.jfsjd@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Server />}
              title="Backend"
              skills={['Java', 'Spring Boot','Microservices', 'JPA/Hibernate']}
            />
            <SkillCard 
              icon={<Globe />}
              title="Frontend"
              skills={['React.js', 'JavaScript', 'Boot Strap', 'Material UI']}
            />
            <SkillCard 
              icon={<Database />}
              title="Database"
              skills={['MySQL','PostgreSQL','Native SQL']}
            />
            <SkillCard 
              icon={<Cpu />}
              title="Deployment"
              skills={['Git-Pages', 'Tomcat','Jump Servers']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Dualvet by Siemens"
              description="Developed a full-stack Application Dualvet platform using Spring Boot and React. Implemented secure Login processing, Like JWT & Refresh Token, Google sign-in and Password Encryption."
              tech={['Monolithic', 'Spring Boot', 'React', 'My SQL','UI & UX','Looker Studio']}
            />
            <ProjectCard 
              title="PMS(Performance Management System)"
              description="Built an application with real-time data. Features include Employee Performance Management System Using BSC Model, progress tracking, Employee Rating, Multi Level Approval System custom query manipulating data"
              tech={['Monolithic', 'Spring Boot', 'My SQL']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <ExperienceCard 
              title="Full Stack Developer"
              company="Tata Strive"
              period="2024 - 2025"
             responsibilities={[
                'Developed and maintained enterprise Java applications using Spring Boot',
                'implemented RESTful APIs using Spring Boot to handle server-side logic',
                'Implemented responsive front-end interfaces using React.js',
                'Utilized Git for version control, managing feature branches and collaborating with team',
                'Maintained and deployed applications on cloud environments, ensuring scalability and reliability'
              ]}
            />
            <ExperienceCard 
              title="Java Developer"
              company="Diyos Infotech"
              period="2025 - Present"
               responsibilities={[
                'Developed and maintained enterprise Java applications using Spring Boot',
                'Handling multiple projects, including Defence GTS, PMS, True HR, and ATS Model',
                'Implemented RESTful APIs using Spring Boot to manage server-side logic and integrations',
                'Utilized Git for version control branches, and collaborating effectively with the development team',
                'Implemented custom optimized queries to improve performance, scalability, and reliability'
              ]}

            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Pavan Kumar Tungala All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 text-center">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="bg-blue-500 px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, responsibilities }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-blue-400 mb-2">{company}</p>
      <p className="text-gray-400 mb-4">{period}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

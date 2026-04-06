import React from "react";
import styled from "styled-components";

const ResumeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f5f5f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  color: white;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 48px;
    margin: 0;
    font-weight: bold;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    flex-wrap: wrap;
    font-size: 14px;

    a {
      color: #e0e7ff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: white;
      }
    }
  }
`;

const Section = styled.section`
  background: white;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #1e3a8a;
    border-bottom: 3px solid #2563eb;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

const SummaryText = styled.p`
  line-height: 1.8;
  color: #4b5563;
  font-size: 16px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    color: #1e3a8a;
    margin: 0 0 5px 0;
    font-size: 18px;
  }

  .company {
    color: #2563eb;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .date {
    color: #9ca3af;
    font-size: 14px;
    margin-bottom: 10px;
  }

  ul {
    margin: 10px 0;
    padding-left: 20px;

    li {
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 8px;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  .skill-category {
    h4 {
      color: #2563eb;
      margin-bottom: 10px;
      font-size: 16px;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      font-size: 14px;
    }
  }
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: #eff6ff;
    border-left: 4px solid #2563eb;
    color: #4b5563;
    border-radius: 4px;

    &:before {
      content: "✓ ";
      color: #2563eb;
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <Header>
        <h1>Bibekananda Sahoo</h1>
        <div className="contact-info">
          <span>📧 imbibeks826@gmail.com</span>
          <span>📱 9658179256</span>
          <span>📍 Bengaluru, Karnataka, India</span>
          <a href="https://github.com/imbibeks826" target="_blank" rel="noopener noreferrer">
            GitHub: bibekananda826
          </a>
        </div>
      </Header>

      <Section>
        <h2>Summary</h2>
        <SummaryText>
          Software Developer with 5 years of experience in building scalable web and mobile 
          applications using modern JavaScript frameworks such as React, React Native, and TypeScript. 
          Skilled in full software development lifecycle, debugging, and delivering production-ready 
          features in Agile/Scrum environments. Passionate about exploring emerging technologies, 
          improving system design practices, and growing toward a Software Architect role. Committed 
          to writing clean, maintainable code and contributing to high-impact solutions that align 
          with long-term business goals.
        </SummaryText>
      </Section>

      <Section>
        <h2>Work Experience</h2>
        
        <ExperienceItem>
          <div className="company">Mphasis</div>
          <h3>Software Engineer - Systems (Feb 2024 - Current)</h3>
          <div className="date">HP – Enterprise Web & Windows Applications</div>
          <ul>
            <li>Developed and maintained backend services supporting React-based and Micro Frontend (MFE) applications</li>
            <li>Implemented backend logic to support Windows native application features with secure data handling</li>
            <li>Collaborated with QA, design, and product teams to translate business requirements into technical deliverables</li>
            <li>Participated in sprint planning, task breakdown, and story point estimation</li>
            <li>Wrote unit tests and performed backend debugging to ensure code stability</li>
            <li>Followed security best practices to safeguard APIs and application data</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem>
          <div className="company">Panamax Infotech</div>
          <h3>Software Developer (Nov 2022 – Feb 2024)</h3>
          <div className="date">Digital Wallet and Agency Banking</div>
          <ul>
            <li>Contributed to the development of a secure agency banking application with core banking features</li>
            <li>Designed and built scalable, cross-platform components using React, React Native, TypeScript, and JavaScript</li>
            <li>Integrated RESTful APIs and handled client-side state management for real-time data access</li>
            <li>Collaborated with QA, design, and product teams to refine user flows and resolve issues</li>
            <li>Followed secure coding practices and implemented platform-specific protection</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem>
          <div className="company">Tata Consultancy Services</div>
          <h3>Assistant System Engineer (Nov 2020 – Nov 2022)</h3>
          <div className="date">Telecommunication Service Provider (Gofiber)</div>
          <ul>
            <li>Developed key modules of a mobile application using React Native</li>
            <li>Independently implemented two critical features including offline onboarding flow</li>
            <li>Integrated payment gateway to streamline transactions and reduce onboarding friction</li>
            <li>Collaborated with designers to build clean, responsive, and user-friendly interfaces</li>
          </ul>
        </ExperienceItem>
      </Section>

      <Section>
        <h2>Technical Skills</h2>
        <SkillsGrid>
          <div className="skill-category">
            <h4>Frontend</h4>
            <p>React, React Native, HTML5, CSS3, Styled Components</p>
          </div>
          <div className="skill-category">
            <h4>Languages</h4>
            <p>TypeScript, JavaScript, C#</p>
          </div>
          <div className="skill-category">
            <h4>State Management</h4>
            <p>Redux, Redux Saga</p>
          </div>
          <div className="skill-category">
            <h4>Tools & DevOps</h4>
            <p>Git, GitHub, Jira, CI/CD Pipelines, GitHub Actions</p>
          </div>
          <div className="skill-category">
            <h4>Architecture</h4>
            <p>Micro Frontend Architecture, RESTful APIs, Windows Native Integration</p>
          </div>
          <div className="skill-category">
            <h4>Testing</h4>
            <p>Unit Testing, Jest, React Testing Library</p>
          </div>
        </SkillsGrid>
      </Section>

      <Section>
        <h2>Education</h2>
        <ExperienceItem>
          <h3>Bachelor of Technology</h3>
          <div className="company">Government College of Engineering Keonjhar</div>
          <p><strong>Field:</strong> Computer Science and Engineering</p>
          <p><strong>CGPA:</strong> 8.70 (08/2020)</p>
        </ExperienceItem>
      </Section>

      <Section>
        <h2>Certifications</h2>
        <AchievementsList>
          <li>React Frontend Certification - Edureka</li>
        </AchievementsList>
      </Section>

      <Section>
        <h2>Projects</h2>
        <ExperienceItem>
          <h3>Placement Management Portal</h3>
          <ul>
            <li>Developed a centralized web portal to streamline student placement data management</li>
            <li>Implemented modules for student profiling, resume tracking, and placement status updates</li>
            <li>Integrated alumni database features to track career paths and build networks</li>
            <li>Designed user-friendly dashboards and filters for data analysis and reporting</li>
          </ul>
        </ExperienceItem>
      </Section>

      <Section>
        <h2>Accomplishments</h2>
        <AchievementsList>
          <li>Laurel Award in Ecometer project</li>
          <li>Applause Award in Gofiber project</li>
          <li>Star Team Award in Gofiber project</li>
        </AchievementsList>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;
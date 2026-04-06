import React from "react";
import { useNavigate } from "react-router";
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  ButtonGroup,
  Button,
  StatsCard,
  SkillsSection,
  SkillsContent,
  SkillsGrid,
  SkillCard,
  ExperienceSection,
  ExperienceTimeline,
  TimelineItem,
  CTASection,
} from "./styles";
import { experience, skills } from "../../data/Constants";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Bibekananda Sahoo</h1>
          <div className="title">Full Stack Developer | React Specialist</div>
          <p>
            Transforming ideas into scalable web and mobile applications with 5+
            years of experience in React, React Native, and TypeScript.
            Passionate about clean code, system design, and building high-impact
            solutions.
          </p>
          <ButtonGroup>
            <Button className="primary" onClick={() => navigate("/resume")}>
              View Resume
            </Button>
            <Button className="secondary" onClick={() => navigate("/contact")}>
              Get in Touch
            </Button>
          </ButtonGroup>
          <StatsCard>
            <div className="stat">
              <div className="number">5+</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="number">10+</div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="number">50+</div>
              <div className="label">Collaborated Members</div>
            </div>
            <div className="stat">
              <div className="number">3</div>
              <div className="label">Awards Won</div>
            </div>
          </StatsCard>
        </HeroContent>
      </HeroSection>

      <SkillsSection>
        <SkillsContent>
          <h2>Technical Expertise</h2>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard key={index}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContent>
      </SkillsSection>

      <ExperienceSection>
        <h2>Professional Journey</h2>
        <ExperienceTimeline>
          {experience.map((exp, index) => (
            <TimelineItem key={index} id={experience.length - index}>
              <div className="content">
                <h3>{exp.position}</h3>
                <div className="company">{exp.company}</div>
                <div className="date">{exp.period}</div>
                <p>{exp.description}</p>
              </div>
            </TimelineItem>
          ))}
        </ExperienceTimeline>
      </ExperienceSection>
    </HomeContainer>
  );
};

export default HomePage;

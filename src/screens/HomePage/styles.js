import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb);
  color: white;
`;

export const NavSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  text-align: center;
`;

export const HeroSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
`;

export const HeroContent = styled.div`
  h1 {
    font-size: 56px;
    margin: 0 0 20px 0;
    font-weight: bold;
    line-height: 1.2;
    word-break: break-word;
  }

  .title {
    font-size: 28px;
    color: #e0e7ff;
    margin-bottom: 20px;
    font-weight: 500;
    word-break: break-word;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #e0e7ff;
    word-break: break-word;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: white;
    color: #667eea;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  }

  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: white;
      color: #667eea;
      transform: translateY(-2px);
    }
  }
`;

export const StatsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  gap: 20px;
  margin-top: 50px;

  .stat {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-5px);
    }

    .number {
      font-size: 48px;
      font-weight: bold;
      color: #fbbf24;
      margin-bottom: 10px;
    }

    .label {
      font-size: 16px;
      color: #e0e7ff;
    }
  }
`;

export const SkillsSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 60px 20px;
  margin-top: 60px;
  backdrop-filter: blur(10px);
`;

export const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 40px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
    word-break: break-word;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 30px;
`;

export const SkillCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  h3 {
    color: #667eea;
    font-size: 22px;
    margin-bottom: 15px;
    word-break: break-word;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    font-size: 14px;
    word-break: break-word;
  }
`;

export const ExperienceSection = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;

  h2 {
    font-size: 40px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: bold;
    word-break: break-word;
  }
`;

export const ExperienceTimeline = styled.div`
  position: relative;
  padding: 20px 0;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div`
  margin-bottom: 50px;
  position: relative;

  &:nth-child(odd) {
    margin-left: 0;
    margin-right: 50%;
    text-align: right;
    word-break: break-word;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 60px;
      text-align: left;
      word-break: break-word;
    }
  }

  &:nth-child(even) {
    margin-left: 50%;
    margin-right: 0;
    text-align: left;
    word-break: break-word;

    @media (max-width: 768px) {
      margin-left: 60px;
      margin-right: 0;
      word-break: break-word;
    }
  }

  &:before {
    content: "${(props) => props.id}";
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border: 4px solid #667eea;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    color: #667eea;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    @media (max-width: 768px) {
      left: -28px;
    }
  }

  .content {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    h3 {
      color: #667eea;
      font-size: 20px;
      margin-bottom: 5px;
      word-break: break-word;
    }

    .company {
      color: #764ba2;
      font-weight: bold;
      margin-bottom: 10px;
      word-break: break-word;
    }

    .date {
      color: #9ca3af;
      font-size: 14px;
      margin-bottom: 15px;
      word-break: break-word;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      font-size: 14px;
      word-break: break-word;
    }
  }
`;

export const CTASection = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  padding: 60px 20px;
  margin-top: 60px;
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    margin-bottom: 30px;
    color: #e0e7ff;
  }
`;

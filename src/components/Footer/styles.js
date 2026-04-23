import styled from "styled-components";
export const CTASection = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  padding: 40px 20px;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: bold;
    color: white;
    word-break: break-word;
  }

  p {
    font-size: 16px;
    margin-bottom: 30px;
    color: #e0e7ff;
    word-break: break-word;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-bottom: 20px;
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

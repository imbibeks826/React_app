import React from 'react'
import { Button, ButtonGroup, CTASection } from './styles'
import { useNavigate } from 'react-router';

function Footer() {
  const navigate = useNavigate();
  return (
    <CTASection>
    <h2>Ready to Build Something Great?</h2>
    <p>
      Let's collaborate on your next project and create something amazing
      together.
    </p>
    <ButtonGroup style={{ justifyContent: "center" }}>
      <Button className="primary" onClick={() => navigate("/contact")}>
        Contact Me
      </Button>
      <Button className="secondary" onClick={() => navigate("/about")}>
        Learn More
      </Button>
    </ButtonGroup>
    <p>Copy Right Bibekananda Sahoo @2026</p>
  </CTASection>
  )
}

export default Footer

import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #2e4a8a);
  color: white;
  font-family: "Segoe UI", sans-serif;
`;

export const Content = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const Section = styled.div`
  margin-top: 40px;
`;

// Carousel Styles
export const CarouselWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: white;
  color: #2e4a8a;
  cursor: pointer;
`;

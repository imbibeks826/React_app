import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #2e4a8a);
  color: white;
  font-family: "Segoe UI", sans-serif;
`;

const Content = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const Section = styled.div`
  margin-top: 40px;
`;

// Carousel Styles
const CarouselWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: white;
  color: #2e4a8a;
  cursor: pointer;
`;

export default function AboutPage() {
  const images = [
    "https://picsum.photos/id/1011/800/400",
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1024/800/400",
    "https://picsum.photos/id/1025/800/400",
    "https://picsum.photos/id/1035/800/400",
    "https://picsum.photos/id/1039/800/400",
    "https://picsum.photos/id/1043/800/400",
    "https://picsum.photos/id/1050/800/400",
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Container>
      <Content>
        <Title>About Me</Title>

        <Text>
          Hi, I'm Bibekananda Sahoo. I come from a diverse background and have
          lived in multiple states across India, which helped me adapt to
          different cultures and environments.
        </Text>

        <Text>
          I have stayed in Odisha (home state), West Bengal, Gujarat,
          Maharashtra, Karnataka, and Uttarakhand. These experiences shaped my
          perspective and communication skills.
        </Text>

        <Section>
          <h2>Education</h2>
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            School: Jawahar Navodaya Vidyalaya (JNV), Baro, Kendrapara
          </Text>
          <Text>Completed 10th and 12th (2008 – 2015)</Text>
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            College: Government College of Engineering, Keonjhar
          </Text>
          <Text>
            Bachelor of Technology - Computer Science & Engineering (2016-2020)
          </Text>
        </Section>

        <Section>
          <h2>Languages Known</h2>
          <Text>Odia, Hindi, English</Text>
        </Section>

        {/* Image Carousel */}
        <Section>
          <h2>Memories & Journey</h2>
          <CarouselWrapper>
            <Image src={images[index]} alt="carousel" />
            <div>
              <Button onClick={prev}>Previous</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </CarouselWrapper>
        </Section>
      </Content>
    </Container>
  );
}

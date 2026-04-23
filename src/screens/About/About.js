import React, { useState } from "react";
import {
  Button,
  CarouselWrapper,
  Container,
  Content,
  Image,
  Section,
  Text,
  Title,
} from "./style";

import SchoolPhoto from "url:./../../Assets/image/schoolPhoto.jpg";
import WonderImage from "url:./../../Assets/image/7Wonder.jpg";
import Rudraprayag from "url:./../../Assets/image/rudraprayag.jpg";
import Victoria from "url:./../../Assets/image/victoria.jpg";
import Pentha from "url:./../../Assets/image/pentha.jpg";
import Panamax from "url:./../../Assets/image/panamax.jpg";

export default function AboutPage() {
  // const images = [
  //   "https://picsum.photos/id/1011/800/400",
  //   "https://picsum.photos/id/1015/800/400",
  //   "https://picsum.photos/id/1016/800/400",
  //   "https://picsum.photos/id/1020/800/400",
  //   "https://picsum.photos/id/1024/800/400",
  //   "https://picsum.photos/id/1025/800/400",
  //   "https://picsum.photos/id/1035/800/400",
  //   "https://picsum.photos/id/1039/800/400",
  //   "https://picsum.photos/id/1043/800/400",
  //   "https://picsum.photos/id/1050/800/400",
  // ];

  const images1 = [
    SchoolPhoto,
    Rudraprayag,
    Pentha,
    Victoria,
    WonderImage,
    Panamax,
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images1.length);
  const prev = () => setIndex((index - 1 + images1.length) % images1.length);
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
            Bachelor of Technology - Computer Science & Engineering ( 2016-2020
            )
          </Text>
        </Section>

        <Section>
          <h2>Languages Known</h2>
          <Text>Odia, Hindi, English</Text>
        </Section>

        {/* Image Carousel */}
        <Section>
          {/* <img src={WonderImage} alt="carousel" /> */}
          <h2>Memories & Journey</h2>
          <CarouselWrapper>
            <Image src={images1[index]} alt="carousel" />
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

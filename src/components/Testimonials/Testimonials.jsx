import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../Marginer/index.jsx";

import { useMediaQuery } from "react-responsive";
import "pure-react-carousel/dist/react-carousel.es.css";
import User1Img from "../../images/profile_picture_1.jpg";
import User2Img from "../../images/profile_picture_2.jpg";
import User3Img from "../../images/profile_picture_3.jpg";
import User4Img from "../../images/profile_picture_4.jpeg";

import Reviewcard from "../Reviewcard/Reviewcard";

const Section = styled.div`
  display: flex;
  margin-left: 10em;
  margin-right: 5em;
  /* gap: 2em; */
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-left: 0.1em;
    margin-right: 1em;
  }
`;
const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  line-height: 6em;
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #1d92ed;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 30px;
  }

 
`;
const SectionText = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #222330;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    text-align: center;
    margin: auto;
    font-size: 20px;
  }
`;

const ReviewsContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin: 0 auto;
    justify-content: center;
  }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 100%;
  /* padding: 20px 55px; */

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

// const StyledSlide = styled(Slide)`
//   .carousel__inner-slide {
//     display: flex;
//     justify-content: center;
//   }
// `;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    outline: none;
    border: none;
    background-color: #e4e4e4;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }

  @media screen and (max-width: 480px) {
  margin-top: -5rem;
  }
`;

const Testimonials = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <Section id="testemonials" className="linktest"> 
      <SectionIntro>
        <SectionTitle> User Testimonials</SectionTitle>
        <SectionText>What others saying about us</SectionText>
      </SectionIntro>
      <ReviewsContainer>
        <Marginer direction="vertical" margin="2em" />

        <StyledCarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={isMobile ? 300 : 280}
          totalSlides={4}
          visibleSlides={isMobile ? 1 : 2}
          dragEnabled={true}
        >
          <Slider>
            <Slide index={0}>
              <Reviewcard
                reviewText="Your company is truly upstanding and
                i can't wait to see how far you will go."
                username="Carla Richards"
                userImgUrl={User1Img}
                city="Toronto"
                country="Canada"
              />
            </Slide>
            <Slide index={1}>
              <Reviewcard
                reviewText="An amazing team of developers and designers that are more than ready to deliver great services."
                username="John Coner"
                userImgUrl={User2Img}
                city="New York"
                country="United States"
              />
            </Slide>
            <Slide index={2}>
              <Reviewcard
                reviewText="It's so great to witness the hardwork and dedication of this team."
                username="Pedro Bastos"
                userImgUrl={User3Img}
                city="Lisboa"
                country="Portugal"
              />
            </Slide>
            <Slide index={3}>
              <Reviewcard
                reviewText="Fantástica iniciativa desta equipa, continuem com o ótimo trabalho."
                username="João Pereira"
                userImgUrl={User4Img}
                city="Porto"
                country="Portugal"
              />
            </Slide>
          </Slider>
          <StyledDotGroup />
        </StyledCarouselProvider>
      </ReviewsContainer>
    </Section>
  );
};

export default Testimonials;

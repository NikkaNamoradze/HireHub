import { useState } from "react";
import styled from "styled-components";
import Arrows from "./Arrows";
import CarouselContent from "./carouselContent/CarouselContent";
import CarouselSearch from "./CarouselSearch/CarouselSearch";
import { DataInterface } from "../../types";

const Carousel = ({data}:{data:DataInterface[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <Conatiner>
      <CarouselContainer>
        {data?.map((slide, index) => (
          <Slide
            key={index}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <CarouselContent item={slide} />
          </Slide>
        ))}
        <Arrows
          currentIndex={currentSlide}
          handleNextSlide={handleNextSlide}
          handlePreviousSlide={handlePreviousSlide}
        />
      </CarouselContainer>
      <CarouselSearch />
    </Conatiner>
  );
};

export default Carousel;

const Conatiner = styled.div`
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin: auto;
  border-radius: 58px;
  height: 70vh;
  border: 15px solid #f5f4f4;
  position: relative;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.6s ease-in-out;
  width: 100%;
  height: 100%;
  display: flex;
`;

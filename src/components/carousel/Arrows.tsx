import styled from "styled-components";
import leftArrowIcon from "../../assets/icons/leftArrow.svg";
import rightArrowIcon from "../../assets/icons/rightArow.svg";


interface ArrowsProps {
  handlePreviousSlide: (scrollDirection: "left" | "right") => void;
  handleNextSlide: (scrollDirection: "left" | "right") => void;
  currentIndex: number;
  type?: string;
}

const Arrows = ({
  handlePreviousSlide,
  handleNextSlide,
  currentIndex,
  type,
}: ArrowsProps) => {
  return (
    <>
      {currentIndex !== 0 && (
        <LeftArrow  onClick={() => handlePreviousSlide("left")}>
          <img src={leftArrowIcon} alt="" />
        </LeftArrow>
      )}
      <RightArrow carouseltype={type} onClick={() => handleNextSlide("right")}>
        <img src={rightArrowIcon} alt="" />
      </RightArrow>
    </>
  );
};

export default Arrows;

const ArrowButton = styled.button<{ carouseltype?: string }>`
  position: absolute;
  top: 50%;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: 800ms;
  transform: translateY(-50%);
  width: 6%;
  &:hover {
    opacity: 1;
    transition: 800ms;
  }
  `;

const LeftArrow = styled(ArrowButton)`
  left: 0;
  background: linear-gradient(90deg, #1d1d1d 3.45%, rgba(29, 29, 29, 0) 100%);

  `;

const RightArrow = styled(ArrowButton)`
  right: 0;
  background: linear-gradient(269.66deg, #1d1d1d 3.45%, rgba(29, 29, 29, 0) 100%);

`
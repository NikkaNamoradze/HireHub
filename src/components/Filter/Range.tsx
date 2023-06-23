import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Range({ min, max }: { min: number; max: number }) {
  const [minValue, setMinValue] = useState<number>(min);
  const [maxValue, setMaxValue] = useState<number>(max);

  const minSlider = useRef<any>()
  const maxSlider = useRef<any>()


  const [minProgress, setMinProgress] = useState<string>("0%");
  const [maxProgress, setMaxProgress] = useState<string>("100%");

  

  const hendler = () => {
    const gap = 20;
    if (maxValue - minValue < gap) {
       if (minSlider.current){
        minSlider.current.value = maxValue - gap
       }else{
        maxSlider.current.value = minValue - gap
       }
    } else {
        setMinProgress((minValue / max) * 100 + "%");
        setMaxProgress(100 - (maxValue / max) * 100 + "%");
        minSlider.current.value = minValue
        maxSlider.current.value = maxValue
    }
  };

  useEffect(() => {
    hendler();
  }, [minValue, maxValue]);

  return (
    <Container>
      <Slider>
        <Progress min={minProgress} max={maxProgress} />

      </Slider>
      <RangeInput>
        <RangeMin
          type="range"
          ref={minSlider}
          min={min}
          max={max}
          onChange={(e) => setMinValue(parseInt(e.target.value))}
        />
        <RangeMax
          type="range"
          ref={maxSlider}
          min={min}
          max={max}
          onChange={(e) => setMaxValue(parseInt(e.target.value))}
        />
      </RangeInput>
    </Container>
  );
}

export default Range;

const Slider = styled.div`
  height: 2px;
  width: 100%;
  position: relative;
  background: #acacac;
  border-radius: 5px;
`;

const Progress = styled.div<{ min: string; max?: string }>`
  height: 2px;
  position: absolute;
  right: ${({ max }) => max};
  left: ${({ min }) => min};
  background: #222222;
  border-radius: 5px;
`;

const Container = styled.div``;

const RangeInput = styled.div`
  position: relative;
`;

const RangeComponent = styled.input`
  position: absolute;
  top: -2px;
  height: 2px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    width: 9px;
    height: 9px;
    border-radius: 150px;
    pointer-events: auto;
    -webkit-appearance: none;
    background: #222222;
  }
  &::-moz-range-thumb {
    width: 9px;
    height: 9px;
    border: none;
    border-radius: 150px;
    pointer-events: auto;
    -webkit-appearance: none;
    background: #222222;
  }
`;

const RangeMin = styled(RangeComponent)``;
const RangeMax = styled(RangeComponent)``;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Range({
  min,
  max,
  minValue,
  maxValue,
  range,
}: {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  range: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const minSlider = useRef<any>();
  const maxSlider = useRef<any>();

  const [minProgress, setMinProgress] = useState<string>("0%");
  const [maxProgress, setMaxProgress] = useState<string>("100%");

  const hendler = () => {
    const gap = 20;
    if (maxValue - minValue < gap) {
      if (minSlider.current) {
        minSlider.current.value = maxValue - gap;
      } else {
        maxSlider.current.value = minValue - gap;
      }
    } else {
      setMinProgress((minValue / max) * 100 + "%");
      setMaxProgress(100 - (maxValue / max) * 100 + "%");
      minSlider.current.value = minValue;
      maxSlider.current.value = maxValue;
    }
  };

  useEffect(() => {
    hendler();
  }, [minValue, maxValue]);

  return (
    <div>
      <Slider>
        <Progress min={minProgress} max={maxProgress} />
        <Min min={minProgress}>{minValue+"₾"}</Min>
        <Max max={maxProgress}>{maxValue+"₾"}</Max>

      </Slider>
      <RangeInput>
        <RangeMin
          type="range"
          ref={minSlider}
          min={min}
          step={10}
          max={max}
          onChange={(e) => range((array)=>[parseInt(e.target.value), ...array.slice(1)])}
        />
        <RangeMax
          type="range"
          ref={maxSlider}
          step={10}
          min={min}
          max={max}
          onChange={(e) => range((array)=>[array[0], parseInt(e.target.value)])}
        />
      </RangeInput>
    </div>
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

const Value = styled.div <{max?:string, min?:string}>`
    position: absolute;
    color: #222222;

    top: 10px;
`;


const Min = styled(Value)`
  left: ${({ min }) => min};
`;
const Max = styled(Value)`
  right: ${({ max }) => max};

`;

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

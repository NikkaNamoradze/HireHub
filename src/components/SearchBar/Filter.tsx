import React from "react";
import { styled } from "styled-components";
import { media } from "../../assets/css/GlobalCss";

function Filter({focused, setFocuse}:{ focused:boolean, setFocuse: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <FilterButton focused={focused} onClick={()=>setFocuse(e=>!e)}>
      <>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.2144 11.9945C16.7159 11.9945 17.9374 13.2099 17.9374 14.7035C17.9374 16.1971 16.7159 17.4125 15.2144 17.4125C13.712 17.4125 12.4897 16.1971 12.4897 14.7035C12.4897 13.2099 13.712 11.9945 15.2144 11.9945ZM15.2144 13.307C14.4357 13.307 13.8022 13.9335 13.8022 14.7035C13.8022 15.4744 14.4357 16.1 15.2144 16.1C15.9923 16.1 16.6249 15.4744 16.6249 14.7035C16.6249 13.9335 15.9923 13.307 15.2144 13.307ZM8.82026 14.0812C9.18251 14.0812 9.47651 14.3752 9.47651 14.7374C9.47651 15.0997 9.18251 15.3937 8.82026 15.3937H3.30689C2.94464 15.3937 2.65064 15.0997 2.65064 14.7374C2.65064 14.3752 2.94464 14.0812 3.30689 14.0812H8.82026ZM5.34888 3.5C6.85125 3.5 8.07275 4.71625 8.07275 6.20987C8.07275 7.7035 6.85125 8.918 5.34888 8.918C3.84738 8.918 2.625 7.7035 2.625 6.20987C2.625 4.71625 3.84738 3.5 5.34888 3.5ZM5.34888 4.8125C4.571 4.8125 3.9375 5.439 3.9375 6.20987C3.9375 6.97987 4.571 7.6055 5.34888 7.6055C6.12763 7.6055 6.76025 6.97987 6.76025 6.20987C6.76025 5.439 6.12763 4.8125 5.34888 4.8125ZM16.7922 5.60035C17.1545 5.60035 17.4485 5.89435 17.4485 6.2566C17.4485 6.61885 17.1545 6.91285 16.7922 6.91285H11.2797C10.9175 6.91285 10.6235 6.61885 10.6235 6.2566C10.6235 5.89435 10.9175 5.60035 11.2797 5.60035H16.7922Z"
              fill={focused ? "#F4F3F3" : "#222222"}
            />
          </svg>

      </>
    </FilterButton>
  );
}

export default Filter;

const FilterButton = styled.button<{focused:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 150px;
  cursor: pointer;
  height: 53px;
  width: 53px;
  margin-left: 18px;  
  background-color: ${({focused})=> focused?"#222222" : "#F4F3F3" };
  transition: 0.4s;

  ${media.phone(`
      display:none;
    `)}

`;



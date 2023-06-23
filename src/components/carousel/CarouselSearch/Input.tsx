
import icon from "../../../assets/icons/searchIcon.svg";
import { styled } from "styled-components";
function Input() {
  return (
    <InputContainer>
      <img src={icon} alt="" />
      <Search type="text" placeholder="ვაკანსიების ძიება" />
    </InputContainer>
  );
}

export default Input;



const Search =styled.input`
    all: unset;
    color:#222222;
    width: 100%;

    &::placeholder {
  color: #ACACAC;
}

`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap:15px;
`
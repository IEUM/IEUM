import React from "react";
import styled from "styled-components";
import palette from "../styles/palette";

const StyledDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height || "28rem"};
  background-color: ${palette.darkBlack};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem 0rem 0rem;
`;

const StyledInput = styled.textarea`
  resize: none;
  width: 90%;
  height: 100%;
  padding: 2rem;
  border: none;
  outline: none;
  color: white;
  background-color: transparent;
  font-size: 1.25rem;
  font-family: "NotoSans";
  &::placeholder {
    color: ${palette.ivory};
    font-weight: bold;
  }
`;

const Input = ({ name, value, placeholder, onChange, height }) => {
  return (
    <StyledDiv height={height}>
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "내용을 입력해주세요."}
      />
    </StyledDiv>
  );
};

export default Input;

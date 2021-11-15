import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.fontSize || 2.4}rem;
  height: 2.5rem;
  border-radius: 6px;
  border-color: #f6f7fb;
  outline: none;
  cursor: pointer;
`;

const Button = ({
  name,
  width,
  height,
  color,
  borderRadius,
  marginTop,
  fontSize,
  ...rest
}) => {
  return (
    <div>
      <ButtonBox
        fontSize={fontSize}
        style={{
          width: width,
          height: height,
          backgroundColor: color,
          borderRadius: borderRadius,
          marginTop: marginTop,
        }}
        {...rest}
      >
        {name}
      </ButtonBox>
    </div>
  );
};

export default Button;

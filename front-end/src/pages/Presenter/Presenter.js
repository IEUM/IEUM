import styled from "styled-components";
import palette from "../../styles/palette";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor || `${palette.darkBlack}`};
  margin-top: ${(props) => props.marginTop || "0px"};
  min-height: ${(props) => props.height || "4rem"};
  padding-left: ${(props) => props.paddingLeft || "0rem"};
`;

export const TextBox = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
`;

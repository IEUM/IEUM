import styled from "styled-components";
import palette from "../../styles/palette";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "center"};
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

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction || "row"};
  background-color: ${palette.darkBlack};
  margin-top: 1rem;
  padding: 1rem 0rem 1rem 1rem;
  color: ${(props) => props.color || "white"};
  filter: ${(props) => props.blur || "blur(0)"};
  height: ${(props) => props.height || "15rem"};
`;

export const Items = styled.div`
  width: ${(props) => props.width || "10rem"};
  font-size: 28px;

  &:hover {
    background-color: ${palette.ivory};
    color: ${palette.darkBlack};
    border-radius: 5px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems || "none"};
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${palette.darkBlack};
  padding-top: 1rem;
  margin-top: 1rem;
`;

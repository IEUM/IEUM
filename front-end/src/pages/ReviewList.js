import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";

import { Link } from "react-router-dom";

import User from "../assets/user.png";
import Play from "../assets/play.png";
import palette from "../styles/palette";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: center;
  width: 100%;
  background-color: ${palette.darkBlack};
  margin-top: ${(props) => props.marginTop || "0px"};
  min-height: ${(props) => props.height || "4rem"};
  padding-left: ${(props) => props.paddingLeft || "0rem"};
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 6rem;
`;
const TextBox = styled.div`
  display: flex;
`;

const LikeBox = styled.div``;

const Row = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
`;

const ReviewList = ({ location }) => {
  const result = location.state.result;
  const key = location.state.key;
  console.log(result);
  console.log(key);

  return (
    <Wrapper>
      <Box>
        <h2>후기</h2>
      </Box>
      <Box marginTop="1rem" paddingLeft="1rem">
        <h1>{result[key].hospital_name}</h1>
      </Box>
      <Box
        marginTop="1rem"
        height="10rem"
        justifyContent="space-around"
        flexDirection="column"
      >
        <Row>
          <ImageBox>
            <Image src={User} alt="user" />
            <Image src={Play} alt="user" />
          </ImageBox>
          <TextBox>
            <h2>임시 데이터 임시 데이터</h2>
          </TextBox>
        </Row>
        <LikeBox></LikeBox>
      </Box>
      <Button
        name="글쓰기"
        width="20rem"
        height="5rem"
        color="#1F2933"
        type="submit"
        marginTop="8rem"
      />
    </Wrapper>
  );
};

export default ReviewList;

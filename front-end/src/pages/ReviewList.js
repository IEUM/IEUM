import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Text from "../components/Text";

import { Link } from "react-router-dom";

import User from "../assets/user.png";
import Play from "../assets/play.png";

import { Wrapper, Box, TextBox, Row } from "./Presenter/Presenter";

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

const LikeBox = styled.div``;

const ReviewList = ({ location }) => {
  const result = location.state.result;
  const key = location.state.key;

  const [reviews, setReviews] = useState("");
  let temp = "";

  const submitHospitalId = () => {
    const post = { hospital_id: result[key].hospital_id };

    fetch("http://localhost:3001/review", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      }, // API응답 정보 담기
      body: JSON.stringify(post), //전달 내용
    })
      .then((res) => res.json())
      .then((json) => {
        //setReviews(JSON.stringify(json));
        temp = JSON.parse(JSON.stringify(json));
        setReviews(temp);
        //console.log(json);
      });
  };

  useEffect(() => {
    submitHospitalId();
  }, []);

  console.log(reviews);

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
            <Text></Text>
          </TextBox>
        </Row>
        <LikeBox></LikeBox>
      </Box>
      <Link
        to={{
          pathname: `/writeReview`,
          state: {
            result: result,
            key: key,
          },
        }}
      >
        <Button
          name="글쓰기"
          width="20rem"
          height="5rem"
          type="submit"
          marginTop="8rem"
        />
      </Link>
    </Wrapper>
  );
};

export default ReviewList;

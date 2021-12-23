import React, { useState, useEffect } from "react";
import { SERVER } from "../config";
import Speech from "react-speech";

import styled from "styled-components";
import Button from "../components/Button";
import Text from "../components/Text";

import { Link } from "react-router-dom";

import User from "../assets/user.png";
import Play from "../assets/play.png";
import Thumb from "../assets/thumb.png";

import { Wrapper, Box, TextBox, Row, Image } from "./Presenter/Presenter";

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 6rem;
`;

const LikeBox = styled.div`
  display: flex;
`;

const DateBox = styled.div`
  width: 10rem;
`;

const style = {
  play: {
    button: {
      width: "28",
      height: "28",
      cursor: "pointer",
      pointerEvents: "none",
      outline: "none",
      backgroundColor: "yellow",
      border: "solid 1px rgba(255,255,255,1)",
      borderRadius: 6,
    },
  },
};

const ReviewList = ({ location }) => {
  const result = location.state.result;
  const key = location.state.key;
  console.log(result);

  const [reviewsList, setReviewsList] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  // const [result, setResult] = useState([]);
  // const [key, setKey] = useState("");

  useEffect(() => {
    submitHospitalId();
  }, []);

  const submitHospitalId = () => {
    const post = { hospital_id: result[key].hospital_id };

    fetch(`${SERVER}/review`, {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      }, // API응답 정보 담기
      body: JSON.stringify(post), //전달 내용
    })
      .then((res) => res.json())
      .then((json) => {
        const reviewsList = json.map((c, index) => json[index]);
        setReviewsList(reviewsList);
        console.log("review", reviewsList);
        console.log(json);
      });
  };

  // const handleLike = (index) => {
  //   setReviewsList((like) =>
  //     like.map((item, review_index) => {
  //       if (item.review_index === index) {
  //         console.log(item.review_index);
  //       }
  //     })
  //   );
  // };

  return (
    <Wrapper>
      <Box>
        <h2>후기</h2>
      </Box>
      <Box marginTop="1rem" paddingLeft="1rem">
        <h1>{result[key].hospital_name}</h1>
      </Box>
      {reviewsList.map((c, index) => (
        <Box
          marginTop="1rem"
          paddingTop="1rem"
          paddingBottom="1rem"
          justifyContent="space-around"
          flexDirection="column"
        >
          <Row>
            <ImageBox>
              <Image src={User} alt="user" />
              <Image src={Play} alt="user" />
              <Speech styles={style} text={c.content} />,
            </ImageBox>
            <TextBox>
              <Text key={index} lineHeight="1rem">
                {c.content}
              </Text>
            </TextBox>
          </Row>
          <Row marginTop="1rem">
            <DateBox>
              {c.review_date ? c.review_date.toString().slice(0, 10) : ""}
            </DateBox>
            <LikeBox>
              <Image
                src={Thumb}
                alt="thumbUp"
                width="30px"
                height="30px"
                transform="rotate(180deg)"
                onClick={() => setLikeCount(likeCount + 1)}
              />
              <TextBox width="1rem" marginLeft="0.5rem">
                {c.like_count ? c.like_count : likeCount}
              </TextBox>
              <Image src={Thumb} alt="thumbUp" width="30px" height="30px" />
              <TextBox width="1rem" marginLeft="0.5rem">
                {c.dislike_count ? c.dislike_count : 0}
              </TextBox>
            </LikeBox>
          </Row>
        </Box>
      ))}
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
          marginBottom="2rem"
        />
      </Link>
    </Wrapper>
  );
};

export default ReviewList;

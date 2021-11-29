import React, { useState } from "react";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import Text from "../components/Text";

import { Link } from "react-router-dom";
import { Wrapper, Box, Row } from "./Presenter/Presenter";

// import { setCookies } from "../cookies/cookies";
// import { getCookie } from "../cookies/cookies";

const WriteReview = ({ location }) => {
  const result = location.state.result;
  const key = location.state.key;
  const today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let dateString = year + "-" + month + "-" + day;

  const [content, setContent] = useState("");

  const submitContent = () => {
    const post = {
      content: content,
      hospital_id: result[key].hospital_id,
      today: dateString,
    };

    fetch("http://localhost:3001/write", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
    console.log(post);
  };

  return (
    <Wrapper>
      <Box>
        <h2>글쓰기</h2>
      </Box>
      <Textarea onChange={(e) => setContent(e.target.value)} />
      <Box flexDirection="column" marginTop="1rem" backgroundColor="none">
        <Box
          backgroundColor="none"
          paddingLeft="2rem"
          justifyContent="flex-start"
        >
          <Text>입력방식 선택: </Text>
        </Box>

        <Row>
          <Button
            name="음성인식"
            width="8rem"
            height="3rem"
            type="submit"
            fontSize="1.6"
            borderRadius="20px"
            borderColor="#1F2933"
          />
          <Button
            name="키보드"
            width="8rem"
            height="3rem"
            type="submit"
            fontSize="1.6"
            borderRadius="20px"
            borderColor="#1F2933"
          />
        </Row>
        <Row>
          <Button
            name="글 올리기"
            width="12rem"
            height="3rem"
            type="submit"
            marginTop="3rem"
            fontSize="1.6"
            onClick={() => submitContent()}
          />
          <Link
            to={{
              pathname: `/reviewList`,
            }}
          >
            <Button
              name="취소"
              width="5rem"
              height="3rem"
              type="submit"
              marginTop="3rem"
              fontSize="1.6"
            />
          </Link>
        </Row>
      </Box>
    </Wrapper>
  );
};

export default WriteReview;

import React from "react";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import Text from "../components/Text";

import { Wrapper, Box, TextBox, Row } from "./Presenter/Presenter";

const WriteReview = () => {
  return (
    <Wrapper>
      <Box>
        <h2>글쓰기</h2>
      </Box>
      <Textarea />
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
          />
          <Button
            name="취소"
            width="5rem"
            height="3rem"
            type="submit"
            marginTop="3rem"
            fontSize="1.6"
          />
        </Row>
      </Box>
    </Wrapper>
  );
};

export default WriteReview;

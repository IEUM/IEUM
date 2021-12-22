import React, { useState } from "react";
import { SERVER } from "../config";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Textarea from "../components/Textarea";
import Button from "../components/Button";
import Text from "../components/Text";

import { Link } from "react-router-dom";
import { Wrapper, Box, Row, FloatingButton } from "./Presenter/Presenter";

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

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const submitContent = () => {
    const post = {
      content: content,
      hospital_id: result[key].hospital_id,
      today: dateString,
    };

    fetch(`${SERVER}/write`, {
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
        <p>Microphone: {listening ? "on" : "off"}</p>
      </Box>
      <Textarea
        onChange={(e) => setContent(e.target.value)}
        value={{ transcript }.transcript}
      />
      <FloatingButton>
        <button
          onClick={
            SpeechRecognition.startListening
            //   ({
            //   continuous: true,
            //   language: "ko",
            // })
          }
        >
          Start
        </button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </FloatingButton>

      <Box
        flexDirection="column"
        marginTop="1rem"
        marginBottom="1rem"
        backgroundColor="none"
      >
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

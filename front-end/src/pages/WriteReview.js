import React, { useState, useEffect } from "react";
import { SERVER } from "../config";
import { useCookies } from "react-cookie";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Textarea from "../components/Textarea";
import Button from "../components/Button";
import Text from "../components/Text";

import { Link } from "react-router-dom";
import { Wrapper, Box, Row, FloatingButton } from "./Presenter/Presenter";

const WriteReview = ({ location }) => {
  const result = location.state.result;
  const key = location.state.key;
  const [text, setText] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberText"]);

  const today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let now = new Date();
  let after1m = new Date();

  let dateString = year + "-" + month + "-" + day;

  const [content, setContent] = useState("");

  // useEffect(() => {
  //   if (cookies.rememberText !== undefined) {
  //     setText(cookies.rememberText);
  //     console.log(text);
  //     setIsRemember(true);
  //   }
  // }, []);

  const handleOnChange = (e) => {
    after1m.setMinutes(now.getMinutes() + 1);
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie("rememberText", text, { path: "/", expires: after1m });
    } else {
      removeCookie("rememberText");
    }
  };

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

  //console.log(setCookies("cookie", content, { path: "/" }));

  return (
    <Wrapper>
      <Box>
        <h2>글쓰기</h2>
        <p>Microphone: {listening ? "on" : "off"}</p>
      </Box>
      <Textarea
        onChange={(e) => setContent(e.target.value)}
        value={content || { transcript }.transcript}
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
        <button
          onClick={() => {
            SpeechRecognition.stopListening();
            if (content.length <= 1) {
              setContent({ transcript }.transcript);
            }
            console.log(content.length);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            resetTranscript() || setContent("");
          }}
        >
          Reset
        </button>
      </FloatingButton>

      <Box
        flexDirection="column"
        marginTop="1rem"
        marginBottom="1rem"
        backgroundColor="none"
      >
        <Row>
          <Link
            onClick={() => submitContent()}
            to={{
              pathname: `/reviewList`,
              state: {
                result: result,
                key: key,
              },
            }}
          >
            <Button
              name="글 올리기"
              width="12rem"
              height="3rem"
              type="submit"
              marginTop="3rem"
              fontSize="1.6"
            />
          </Link>
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

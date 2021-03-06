import React, { useState, useEffect } from "react";
import { SERVER } from "../config";
import { useCookies } from "react-cookie";
import Speech from "react-speech";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Textarea from "../components/Textarea";
import Button from "../components/Button";
import Mic from "../assets/mic.png";
import Stop from "../assets/stop.png";
import Refresh from "../assets/refresh.png";
import Play from "../assets/play.png";

import { Link } from "react-router-dom";
import {
  Wrapper,
  Box,
  Row,
  FloatingButton,
  Image,
} from "./Presenter/Presenter";

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

  let dateString = year + "-" + month + "-" + day;

  const [content, setContent] = useState("");

  useEffect(() => {
    if (cookies.rememberText !== undefined) {
      setText(cookies.rememberText);
      setIsRemember(true);
    }
    console.log(text);
  }, []);

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
    setCookie("rememberText", content, { path: "/" });
    //removeCookie("rememberText");
  };

  return (
    <Wrapper>
      <Box flexDirection="column">
        <h2>?????????</h2>
        {/* <div style={{ marginBottom: "1rem" }}>
          {listening ? "?????????" : "??????"}
        </div> */}
      </Box>
      {/* <input value={text} onChange={(e) => setText(e.target.value)} />{" "}
      <input type="checkBox" onChange={handleOnChange} checked={isRemember} />{" "}
      <h1>{text}</h1> */}
      <Textarea
        onChange={(e) => setContent(e.target.value)}
        value={content || { transcript }.transcript}
      />
      <FloatingButton>
        {!listening ? (
          <Image
            alt="mic"
            src={Mic}
            onClick={
              SpeechRecognition.startListening
              //   ({
              //   continuous: true,
              //   language: "ko",
              // })
            }
          />
        ) : (
          <Image
            alt="stop"
            src={Stop}
            onClick={() => {
              SpeechRecognition.stopListening();
              if (content.length <= 1) {
                setContent({ transcript }.transcript);
              }
              console.log(content.length);
            }}
          />
        )}
        <Image alt="play" src={Play} />
        <Image
          alt="refresh"
          src={Refresh}
          onClick={() => {
            resetTranscript() || setContent("");
          }}
        />
      </FloatingButton>
      <div style={{ position: "relative", top: "-5rem" }}>
        <Speech text={content} />
      </div>
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
              name="??? ?????????"
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
              state: {
                result: result,
                key: key,
              },
            }}
          >
            <Button
              name="??????"
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

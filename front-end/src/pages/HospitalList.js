import React, { useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction || "row"};
  background-color: #1f2933;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  color: ${(props) => props.color || "white"};
  filter: ${(props) => props.blur || "blur(0)"};
  height: ${(props) => props.height || "15rem"};
`;

const Card = styled.div``;

const HospitalList = () => {
  const [data, setData] = useState("");

  const submitId = () => {
    const post = {
      test: this.state.testbody,
    };

    fetch("http://localhost:3001/idplz", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          testbody: json.text,
        });
      });
  };
  const onCall = () => {
    fetch("http://localhost:3001/callbody", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.test_body,
        });
      });
  };

  return (
    <>
      {/* <Menu direction="column">
        {data.map((hospital, i) => (
          <Card key={data[i].hospital_id}>
            <h1>{data[i].hospital_name}</h1>
          </Card>
        ))}
      </Menu> */}

      <h3>
        데이터 찾기 <br />
        {data}
      </h3>
      <Button
        onClick={() => onCall}
        name="찾기"
        width="20rem"
        height="5rem"
        color="#1F2933"
        type="submit"
        marginTop="8rem"
      />
    </>
  );
};

export default HospitalList;

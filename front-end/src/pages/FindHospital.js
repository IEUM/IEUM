import React from "react";
import styled from "styled-components";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import Search from "../assets/find.png";

import Text from "../components/Text";
import Button from "../components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2933;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  color: white;
  outline: none;
  border: none;
  width: 17rem;
  height: 2rem;
  padding-left: 1rem;
  margin-right: 1rem;
  background-color: #1f2933;
`;

const FindHospital = () => {
  return (
    <Wrapper>
      <LocationBox>
        <Image src={Location} />
        <Text marginRight="3">위치 설정</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      <SearchBox>
        <Row>
          <Input />
          <Image src={Search} />
        </Row>
        <div
          style={{
            borderTop: "2px solid white",
            width: "17rem",
            paddingBottom: "1rem",
            marginRight: "1rem",
          }}
        />
      </SearchBox>
    </Wrapper>
  );
};

export default FindHospital;

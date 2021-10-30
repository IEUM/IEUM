import React from "react";
import styled from "styled-components";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import Search from "../assets/find.png";
import Filter from "../assets/filter.png";

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
  //align-items: center;
  background-color: #1f2933;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 2rem;
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

const Menu = styled.div`
  background-color: #1f2933;
  margin-top: 1rem;
  height: 20rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
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
            width: "77%",
            paddingBottom: "1rem",
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
        />
      </SearchBox>
      <LocationBox>
        <Image src={Filter} />
        <Text size="24">필터</Text>
      </LocationBox>
      <Menu></Menu>
      <ButtonBox>
        <Button
          name="검색하기"
          width="20rem"
          height="5rem"
          color="#1F2933"
          type="submit"
          marginTop="8rem"
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default FindHospital;

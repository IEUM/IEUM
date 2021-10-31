import React from "react";
import styled from "styled-components";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";

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
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

const Menu = styled.div`
  background-color: #1f2933;
  margin-top: 1rem;
  height: 20rem;
`;

const ChoiceCity = () => {
  return (
    <Wrapper>
      <Row>
        <LocationBox>
          <Image src={Location} />
          <Text marginRight="3">______</Text>
          <Image src={ArrowBack} style={{ transform: "rotate(180deg)" }} />
        </LocationBox>
        <Button
          name="설정 완료"
          width="10rem"
          height="3rem"
          color="#1F2933"
          type="submit"
          fontSize="28px"
        />
      </Row>
      <Menu></Menu>
    </Wrapper>
  );
};

export default ChoiceCity;

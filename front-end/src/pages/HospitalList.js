import React, { useState } from "react";
import styled from "styled-components";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";

import Button from "../components/Button";
import Text from "../components/Text";
import Modal from "../components/Modal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px white solid;
  width: 90%;
  padding: 1.3rem 0.3rem 0.5rem 0.3rem;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #1f2933;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  margin: 1rem 1rem 0rem 1rem;
  padding: 1rem 0.7rem 2rem 0.7rem;
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  min-height: ${(props) => props.height || "20rem"};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HospitalList = ({ location }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [cards, setCards] = useState(false);

  const where = location.state.where;
  const result = JSON.parse(location.state.result);
  console.log(result);

  return (
    <Wrapper>
      <LocationBox onClick={openModal}>
        <Image src={Location} />
        <Text marginRight="3">{where}</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      <SearchBox>
        <Row>
          <Text size="24px">{result.length} 개의 결과</Text>
          <Button
            name="지도 보기"
            fontSize="1.5"
            width="10rem"
            height="2.5rem"
            color="#1F2933"
            type="submit"
            marginTop="0rem"
          />
        </Row>
      </SearchBox>

      <>
        {result.map((hospital, i) => (
          <Card key={result[i].hospital_id}>
            <h1>{result[i].hospital_name}</h1>
            <Text weight="500" size="25">
              전화번호
            </Text>
            <Text marginLeft="20" weight="500" size="25">
              {result[i].phone !== "" ? result[i].phone : "데이터가 없습니다."}
            </Text>
            <Text weight="500" marginTop="10" size="25">
              주소
            </Text>
            <Text marginLeft="20" weight="500" size="25">
              {result[i].address}
            </Text>
            <ButtonBox>
              <Button
                name="후기 보러 가기"
                fontSize="1.5"
                width="15rem"
                height="2.5rem"
                color="#1F2933"
                type="submit"
                marginTop="1.5rem"
              />
            </ButtonBox>
          </Card>
        ))}
      </>
    </Wrapper>
  );
};

export default HospitalList;

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
  padding: 0.5rem 0rem 1rem 1rem;
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  height: ${(props) => props.height || "20rem"};
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
            <h2>{result[i].hospital_name}</h2>
          </Card>
        ))}
      </>
    </Wrapper>
  );
};

export default HospitalList;

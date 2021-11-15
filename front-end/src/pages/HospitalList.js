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

const HospitalList = ({ location }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const where = location.state.where;
  const result = location.state.result;

  return (
    <Wrapper>
      <LocationBox onClick={openModal}>
        <Image src={Location} />
        <Text marginRight="3">{where}</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      {/* <Menu direction="column">
        {data.map((hospital, i) => (
          <Card key={data[i].hospital_id}>
            <h1>{data[i].hospital_name}</h1>
          </Card>
        ))}
      </Menu> */}

      <h3>
        데이터 찾기 <br />
      </h3>
      <Button
        // onClick={() => onCall}
        name="찾기"
        width="20rem"
        height="5rem"
        color="#1F2933"
        type="submit"
        marginTop="8rem"
      />
    </Wrapper>
  );
};

export default HospitalList;

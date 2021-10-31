import React, { useState } from "react";
import styled from "styled-components";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import Search from "../assets/find.png";
import Filter from "../assets/filter.png";

import Text from "../components/Text";
import Button from "../components/Button";
import Modal from "../components/Modal";

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
  height: ${(props) => props.height || "15rem"};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const hospitals = [
  { id: 0, text: "전체" },
  { id: 1, text: "내과" },
  { id: 2, text: "의과" },
  { id: 3, text: "이비인후과" },
  { id: 4, text: "신경외과" },
  { id: 5, text: "정형외과" },
  { id: 6, text: "산부인과" },
  { id: 7, text: "성형외과" },
  { id: 8, text: "치과" },
  { id: 9, text: "동물병원" },
  { id: 10, text: "약국" },
];

const HospitalItems = styled.div``;

const FindHospital = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <LocationBox onClick={openModal}>
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
      <Menu>
        {hospitals.map((c) => (
          <HospitalItems key={c.id}>{c.text}</HospitalItems>
        ))}
      </Menu>
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

      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <Wrapper>
          <Menu></Menu>
          <Menu height="10rem"></Menu>
          <Menu height="10rem"></Menu>
        </Wrapper>
      </Modal>
    </Wrapper>
  );
};

export default FindHospital;

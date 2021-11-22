import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import palette from "../styles/palette";

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
  border-bottom: 2px ${palette.white} solid;
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
  background-color: ${palette.darkBlack};
  box-shadow: 0px 5px 10px ${palette.shadow};
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

const Items = styled.div`
  width: ${(props) => props.width || "10rem"};
  font-size: 28px;

  &:hover {
    background-color: ${palette.ivory};
    color: ${palette.darkBlack};
    border-radius: 5px;
  }
`;

const cities = [
  { id: 1, text: "서울", cityCode: "110000" },
  { id: 2, text: "경기", cityCode: "310000" },
  { id: 3, text: "인천", cityCode: "220000" },
  { id: 4, text: "강원", cityCode: "320000" },
  { id: 5, text: "대전", cityCode: "250000" },
  { id: 6, text: "세종", cityCode: "410000" },
  { id: 7, text: "충남", cityCode: "340000" },
  { id: 8, text: "충북", cityCode: "330000" },
  { id: 9, text: "부산", cityCode: "210000" },
  { id: 10, text: "울산", cityCode: "260000" },
  { id: 11, text: "경남", cityCode: "380000" },
  { id: 12, text: "경북", cityCode: "370000" },
  { id: 13, text: "대구", cityCode: "230000" },
  { id: 14, text: "광주", cityCode: "240000" },
  { id: 15, text: "전남", cityCode: "360000" },
  { id: 16, text: "전북", cityCode: "350000" },
  { id: 17, text: "제주", cityCode: "390000" },
];

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

  // const [reviews, setReviews] = useState("");
  // const submitHospitalId = (key) => {
  //   const post = { hospital_id: result[key].hospital_id };

  //   fetch("http://localhost:3001/review", {
  //     method: "post", // 통신방법
  //     headers: {
  //       "content-type": "application/json",
  //     }, // API응답 정보 담기
  //     body: JSON.stringify(post), //전달 내용
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setReviews(JSON.stringify(json));
  //       //temp = JSON.stringify(json);
  //       //setReviews(temp);
  //     });
  // };

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
              {result[i].phone !== "" ? (
                result[i].phone
              ) : (
                <span style={{ color: `${palette.gray}` }}>
                  데이터가 없습니다.
                </span>
              )}
            </Text>
            <Text weight="500" marginTop="10" size="25">
              주소
            </Text>
            <Text marginLeft="20" weight="500" size="25">
              {result[i].address}
            </Text>

            <ButtonBox>
              <Link
                to={{
                  pathname: `/reviewList`,
                  state: {
                    result: result,
                    key: i,
                  },
                }}
              >
                <Button
                  name="후기 보러 가기"
                  fontSize="1.5"
                  width="15rem"
                  height="2.5rem"
                  color="#1F2933"
                  type="submit"
                  marginTop="1.5rem"
                  // onClick={}
                />
              </Link>
            </ButtonBox>
          </Card>
        ))}

        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <Wrapper>
            <Menu>
              {cities.map((c) => (
                <Items width="5rem" key={c.id}>
                  {c.text}
                </Items>
              ))}
            </Menu>
            <Menu height="10rem"></Menu>
            <Menu height="10rem"></Menu>
          </Wrapper>
        </Modal>
      </>
    </Wrapper>
  );
};

export default HospitalList;

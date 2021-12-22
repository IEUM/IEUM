import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import palette from "../styles/palette";
import {
  Wrapper,
  Image,
  Menu,
  Items,
  ButtonBox,
  LocationBox,
  HospitalListSearchBox,
  HospitalListRow,
} from "./Presenter/Presenter";

import Button from "../components/Button";
import Text from "../components/Text";
import Modal from "../components/Modal";

import cities from "./data/cities";

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
    <Wrapper alignItems="none">
      <LocationBox onClick={openModal}>
        <Image src={Location} />
        <Text marginRight="3">{where}</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      <HospitalListSearchBox>
        <HospitalListRow>
          <Text size="24px">{result.length} 개의 결과</Text>
          <Link
            to={{
              pathname: `/map`,
              state: {
                result: result,
                where: where,
              },
            }}
          >
            <Button
              name="지도 보기"
              fontSize="1.5"
              width="10rem"
              height="2.5rem"
              type="submit"
              marginTop="0rem"
            />
          </Link>
        </HospitalListRow>
      </HospitalListSearchBox>

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

            <ButtonBox alignItems="center">
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
